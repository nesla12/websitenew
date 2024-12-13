import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { roadmapQuestions } from '../../data/roadmapQuestions';

interface RoadmapAnswers {
  scores: number[];
  textAnswers: { [key: number]: string };
}

interface RoadmapQuestionnaireProps {
  onComplete: (answers: RoadmapAnswers) => void;
  onCancel: () => void;
}

export const RoadmapQuestionnaire: React.FC<RoadmapQuestionnaireProps> = ({ onComplete, onCancel }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [textAnswers, setTextAnswers] = useState<{ [key: number]: string }>({});
  const [errors, setErrors] = useState<{ [key: number]: string }>({});

  const handleAnswer = (value: number | string) => {
    const question = roadmapQuestions[currentQuestion];
    
    if (question.type === 'choice') {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = value as number;
      setAnswers(newAnswers);

    if (currentQuestion < roadmapQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalData = {
        scores: answers,
        textAnswers
      };
      onComplete(finalData);
    }
  }
  };

  const handleTextChange = (value: string) => {
    setTextAnswers({ ...textAnswers, [currentQuestion]: value });
    setErrors({ ...errors, [currentQuestion]: '' });
  };

  const handleNext = () => {
    const question = roadmapQuestions[currentQuestion];
    
    if (question.type === 'text' && question.required) {
      if (!textAnswers[currentQuestion]?.trim()) {
        setErrors({ ...errors, [currentQuestion]: 'This field is required' });
        return;
      }
    }
    
    if (currentQuestion < roadmapQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalData = {
        scores: answers,
        textAnswers
      };
      onComplete(finalData);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderQuestion = () => {
    const question = roadmapQuestions[currentQuestion];

    if (question.type === 'text') {
      return (
        <div className="space-y-4">
          <textarea
            className="w-full p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary dark:focus:border-primary bg-white dark:bg-gray-800 min-h-[120px] resize-none"
            placeholder={question.placeholder}
            value={textAnswers[currentQuestion] || ''}
            onChange={(e) => handleTextChange(e.target.value)}
          />
          {errors[currentQuestion] && (
            <p className="text-red-500 text-sm">{errors[currentQuestion]}</p>
          )}
          <Button
            className="mt-4 w-full"
            onClick={handleNext}>
            Next <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      );
    }

    return (
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.score)}
            className="p-4 text-left border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group relative"
          >
            <div className="flex items-center space-x-3">
              <span className="flex-1">{option.text}</span>
              <CheckCircle2 className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </div>
    );
  };

  const question = roadmapQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / roadmapQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">AI Implementation Roadmap Questionnaire</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Answer a few more questions to receive your personalized AI implementation roadmap
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary/10 text-primary">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-primary">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-primary/10">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary to-secondary transition-all duration-500"
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {question.question}
        </h3>

        {renderQuestion()}

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Skip
          </Button>
          {question.type === 'choice' && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Question {currentQuestion + 1} of {roadmapQuestions.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};