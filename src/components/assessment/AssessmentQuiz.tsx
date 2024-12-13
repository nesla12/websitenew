import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Sparkles, Workflow } from 'lucide-react';
import { Button } from '../ui/Button';
import { UserInfoForm } from './UserInfoForm';
import { assessmentQuestions } from '../../data/assessmentQuestions';
import { AssessmentResult } from './AssessmentResult';
import { saveAssessment } from '../../services/assessmentService';

export const AssessmentQuiz = () => {
  const [userInfo, setUserInfo] = useState<{
    email: string;
    companyName: string;
    companySize: string;
  } | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [assessmentId, setAssessmentId] = useState<string>();

  if (!userInfo) {
    return (
      <div className="max-w-md mx-auto">
        <UserInfoForm onSubmit={setUserInfo} />
      </div>
    );
  }

  const handleAnswer = async (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      try {
        const result = await saveAssessment({
          answers: [...answers, score],
          userInfo
        });
        setAssessmentId(result.assessmentId);
      } catch (error) {
        console.error('Error saving assessment:', error);
      }
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (isComplete) {
    return <AssessmentResult 
      answers={answers} 
      userInfo={userInfo}
      assessmentId={assessmentId}
    />;
  }

  const question = assessmentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {question.question}
        </h2>

        {/* Options */}
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
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Question {currentQuestion + 1} of {assessmentQuestions.length}
          </div>
        </div>
      </div>
    </div>
  );
};