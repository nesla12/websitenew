import React from 'react';
import { Layout } from '../components/layout/Layout';
import { AssessmentQuiz } from '../components/assessment/AssessmentQuiz';
import { Sparkles, ArrowRight, Workflow, Brain, Zap } from 'lucide-react';

export const Assessment = () => {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Discover Your AI Automation Potential
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Take our strategic assessment to uncover automation opportunities and get a personalized roadmap for implementation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Quick Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  15 question evaluation to identify key automation opportunities
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <ArrowRight className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Instant Insights</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get immediate recommendations based on your responses
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <Workflow className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Custom Roadmap</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Detailed implementation plan delivered to your inbox
                </p>
              </div>
            </div>
          </div>
          
          <AssessmentQuiz />
        </div>
      </div>
    </Layout>
  );
};