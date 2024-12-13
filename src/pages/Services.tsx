import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Workflow, Zap, Brain, Code, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      title: 'Make.com Automation',
      description: 'Custom workflow development and optimization for your business processes',
      icon: Workflow,
      features: [
        'Custom workflow design',
        'System integration',
        'Error handling & monitoring',
        'Performance optimization'
      ]
    },
    {
      title: 'AI Implementation',
      description: 'Strategic AI integration to enhance your business operations',
      icon: Brain,
      features: [
        'AI readiness assessment',
        'Implementation roadmap',
        'Process automation',
        'ROI optimization'
      ]
    },
    {
      title: 'Team Training',
      description: 'Empower your team with practical automation skills',
      icon: Code,
      features: [
        'Hands-on workshops',
        'Custom training programs',
        'Best practices guidance',
        'Ongoing support'
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              AI & Automation{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI and automation services,
              designed to drive efficiency and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Zap className="w-5 h-5 text-primary mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Start with our free AI readiness assessment to discover how we can help you
              achieve your automation goals.
            </p>
            <Link to="/assessment">
              <Button size="lg">
                Take Free Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};