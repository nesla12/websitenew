import React, { useEffect, useState, useMemo } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Download, Mail, BarChart3, Target, Zap, Brain } from 'lucide-react';
import { assessmentQuestions } from '../../data/assessmentQuestions';
import { RoadmapQuestionnaire } from './RoadmapQuestionnaire';
import { sendAssessmentToWebhook } from '../../services/webhookService';
import { Link } from 'react-router-dom';
import { saveRoadmap } from '../../services/assessmentService';

interface AssessmentResultProps {
  answers: number[];
  assessmentId?: string;
  userInfo: {
    email: string;
    companyName: string;
    companySize: string;
    industry: string;
  };
}
interface CategoryScore {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export const AssessmentResult: React.FC<AssessmentResultProps> = (props) => {
  const { answers, userInfo, assessmentId } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [webhookResponse, setWebhookResponse] = useState<{ success: boolean; message: string }>();
  const [showRoadmapQuestions, setShowRoadmapQuestions] = useState(false);

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = assessmentQuestions.length * 4;
  const percentage = (totalScore / maxScore) * 100;

  const categories = useMemo(() => {
    const categoryScores: CategoryScore[] = [
      {
        name: 'Operations & Workflow',
        score: answers.slice(0, 5).reduce((sum, score) => sum + (score || 0), 0),
        maxScore: 5 * 4,
        percentage: 0
      },
      {
        name: 'Systems & Integration',
        score: answers.slice(5, 10).reduce((sum, score) => sum + (score || 0), 0),
        maxScore: 5 * 4,
        percentage: 0
      },
      {
        name: 'Implementation Readiness',
        score: answers.slice(10, 15).reduce((sum, score) => sum + (score || 0), 0),
        maxScore: 5 * 4,
        percentage: 0
      }
    ];

    return categoryScores.map(category => ({
      ...category,
      percentage: (category.score / category.maxScore) * 100
    }));
  }, [answers]);
  useEffect(() => {
    const sendAssessment = async () => {
      const response = await sendAssessmentToWebhook(answers, userInfo);
      if (!response.success) {
        console.error('Assessment submission failed:', response.message);
      }
      setWebhookResponse(response);
      setIsLoading(false);
    };

    sendAssessment();
  }, [answers, userInfo]);

  const handleRoadmapComplete = async (roadmapAnswers: { scores: number[]; textAnswers: { [key: number]: string } }) => {
    setShowRoadmapQuestions(false);
    setIsLoading(true);
    let success = false;

    try {
      const response = await saveRoadmap({
        ...roadmapAnswers,
        assessmentId
      }, userInfo);
      
      success = response.success;
      setWebhookResponse({
        success: true,
        message: 'Thank you! Your custom AI implementation roadmap will be sent to your email within 24 hours.'
      });
    } catch (error) {
      console.error('Error sending roadmap answers:', error);
      setWebhookResponse({
        success: false,
        message: 'There was an error processing your request. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getRecommendations = () => {
    if (percentage >= 75) {
      return {
        level: 'Advanced',
        title: 'Ready for Advanced AI Implementation',
        recommendations: [
          'Implement advanced AI automation workflows',
          'Develop custom AI solutions',
          'Scale existing AI infrastructure',
          'Train team members in advanced AI concepts'
        ]
      };
    } else if (percentage >= 50) {
      return {
        level: 'Intermediate',
        title: 'Building on Good Foundations',
        recommendations: [
          'Enhance current automation processes',
          'Integrate AI into more workflows',
          'Expand team AI capabilities',
          'Develop comprehensive AI strategy'
        ]
      };
    } else {
      return {
        level: 'Beginner',
        title: 'Starting Your AI Journey',
        recommendations: [
          'Begin with basic automation workflows',
          'Implement foundational AI tools',
          'Provide basic AI training to team',
          'Develop data management practices'
        ]
      };
    }
  };

  const result = getRecommendations();

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <div className="animate-pulse space-y-8">
          <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showRoadmapQuestions) {
    return (
      <RoadmapQuestionnaire
        onComplete={handleRoadmapComplete}
        onCancel={() => setShowRoadmapQuestions(false)}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-4">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">
            AI Readiness Score:{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {Math.round(percentage)}%
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {result.title}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              {index === 0 ? (
                <Zap className="w-6 h-6 text-primary" />
              ) : index === 1 ? (
                <Brain className="w-6 h-6 text-primary" />
              ) : (
                <Target className="w-6 h-6 text-primary" />
              )}
              <h3 className="font-semibold">{category.name}</h3>
            </div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-primary/10">
                <div
                  style={{ width: `${category.percentage}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary to-secondary transition-all duration-500 relative overflow-hidden"
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Score: {category.score}/{category.maxScore}</span>
                <span className="text-sm font-bold inline-block text-primary">
                  {Math.round(category.percentage)}%
                </span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {category.percentage >= 75 ? 'Advanced' : 
               category.percentage >= 50 ? 'Intermediate' : 'Basic'}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Key Recommendations
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Want a comprehensive roadmap tailored to your business? Complete our detailed assessment
          to receive a personalized AI implementation strategy, including:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-center space-x-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</span>
            <span>Detailed technology stack recommendations</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</span>
            <span>Step-by-step implementation timeline</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</span>
            <span>ROI projections and cost analysis</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</span>
            <span>Training and resource requirements</span>
          </li>
        </ul>
        <Button className="w-full" onClick={() => setShowRoadmapQuestions(true)}>
          Get Your Custom Roadmap <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/book-consultation">
            <Button>
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          {webhookResponse?.success && webhookResponse?.message && (
            <p className="text-green-600 dark:text-green-400 text-center mt-4">
              {webhookResponse.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};