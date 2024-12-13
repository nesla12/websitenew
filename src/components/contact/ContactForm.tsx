import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(import.meta.env.VITE_MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          data: formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have questions about our services? We're here to help!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:contact@aiautomationcoach.com" 
                   className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  contact@aiautomationcoach.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+393248085283" 
                   className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  +39 324 808 5283
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
            <h3 className="font-semibold mb-2">Book a Free Consultation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Schedule a 30-minute call to discuss your automation needs
            </p>
            <div className="tidycal-embed" data-path="lorenzonesla/30-minute-meeting"></div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full" isLoading={isSubmitting}>
            Send Message <Send className="ml-2 w-4 h-4" />
          </Button>

          {submitStatus === 'success' && (
            <p className="text-green-600 dark:text-green-400 text-center">
              Message sent successfully! We'll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 dark:text-red-400 text-center">
              Failed to send message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};