import React from 'react';
import { Clock, DollarSign, TrendingUp, Zap, Shield, Users } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save Valuable Time',
    description: 'Reduce manual tasks by up to 80% with intelligent automation workflows'
  },
  {
    icon: DollarSign,
    title: 'Reduce Costs',
    description: 'Cut operational costs by automating repetitive processes'
  },
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    description: 'Boost sales with automated lead nurturing and follow-ups'
  },
  {
    icon: Zap,
    title: 'Boost Efficiency',
    description: 'Streamline operations with intelligent workflow automation'
  },
  {
    icon: Shield,
    title: 'Minimize Errors',
    description: 'Reduce human error with consistent automated processes'
  },
  {
    icon: Users,
    title: 'Scale Operations',
    description: 'Grow your business without proportionally increasing overhead'
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background-dark dark:to-background-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Automation
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Experience the power of intelligent automation across your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};