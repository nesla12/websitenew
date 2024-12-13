import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { sendAssessmentToWebhook } from '../../services/webhookService';

interface AutomationRequestFormProps {
  onClose: () => void;
}

export const AutomationRequestForm: React.FC<AutomationRequestFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    companyName: '',
    needs: '',
    requirements: '',
    budgetRange: ''
  });

  const questions = [
    {
      label: 'Email',
      type: 'email',
      key: 'email',
      placeholder: 'your@email.com'
    },
    {
      label: 'Phone',
      type: 'tel',
      key: 'phone',
      placeholder: '+1234567890'
    },
    {
      label: 'Company Name',
      type: 'text',
      key: 'companyName',
      placeholder: 'Your Company Name'
    },
    {
      label: 'What are your automation needs?',
      type: 'textarea',
      key: 'needs',
      placeholder: 'Describe the processes you want to automate'
    },
    {
      label: 'Specific Requirements',
      type: 'textarea',
      key: 'requirements',
      placeholder: 'Any specific tools, integrations, or requirements'
    },
    {
      label: 'Budget Range',
      type: 'select',
      key: 'budgetRange',
      options: [
        '€1,000 - €3,000',
        '€3,000 - €5,000',
        '€5,000 - €10,000',
        '€10,000+'
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendAssessmentToWebhook([], {
        ...formData,
        type: 'automation_request'
      });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const currentQuestion = questions[step];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6">Request Custom Automation</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            <label className="block text-sm font-medium mb-2">
              {currentQuestion.label}
            </label>
            {currentQuestion.type === 'textarea' ? (
              <textarea
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData[currentQuestion.key as keyof typeof formData]}
                onChange={(e) => handleInputChange(currentQuestion.key, e.target.value)}
                placeholder={currentQuestion.placeholder}
                rows={4}
                required
              />
            ) : currentQuestion.type === 'select' ? (
              <select
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData[currentQuestion.key as keyof typeof formData]}
                onChange={(e) => handleInputChange(currentQuestion.key, e.target.value)}
                required
              >
                <option value="">Select budget range</option>
                {currentQuestion.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={currentQuestion.type}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData[currentQuestion.key as keyof typeof formData]}
                onChange={(e) => handleInputChange(currentQuestion.key, e.target.value)}
                placeholder={currentQuestion.placeholder}
                required
              />
            )}
          </motion.div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => step > 0 ? setStep(step - 1) : onClose()}
            >
              {step > 0 ? 'Previous' : 'Cancel'}
            </Button>
            {step < questions.length - 1 ? (
              <Button
                type="button"
                onClick={() => setStep(step + 1)}
              >
                Next
              </Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};