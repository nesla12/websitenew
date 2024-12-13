import React from 'react';
import { NewsletterForm } from './NewsletterForm';
import { Mail, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with AI Automation Insights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Get the latest AI automation tips, guides, and industry updates delivered to your inbox
              </p>
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Join the community of ai business leaders
                </span>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};