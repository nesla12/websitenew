import React from 'react';
import { Check, Zap, Users, Workflow, ArrowRight, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '480',
      description: 'Perfect for small businesses starting with automation',
      features: [
        'Simple Make.com workflow',
        'Basic integration (up to 4 modules/apps)',
        'Email support',
        'Documentation included',
        '2 revision rounds',
        '14-day delivery'
      ],
      icon: Zap,
      popular: false
    },
    {
      name: 'Professional',
      price: '960',
      description: 'Ideal for growing companies seeking advanced automation',
      features: [
        'Complex workflow design',
        'Multiple integrations (up to 6 modules/apps)',
        'Priority support',
        'Advanced error handling',
        'Custom functions & formulas',
        '14-day delivery'
      ],
      icon: Workflow,
      popular: true
    },
    {
      name: 'Enterprise',
      price: '4.800',
      description: 'Full-scale automation solutions for large organizations',
      features: [
        'Enterprise-grade workflow',
        'Complex business logic',
        'Dedicated support',
        'Custom API integrations',
        'Advanced data processing',
        '14-day priority delivery',
        'Performance optimization'
      ],
      icon: Users,
      popular: false
    }
  ];

  const consultingRates = {
    title: 'Consultation Services',
    rate: '120',
    description: 'Expert guidance for your automation needs',
    options: [
      'One-on-one consultation',
      'System architecture review',
      'Workflow optimization',
      'Best practices guidance'
    ]
  };

  const workshops = {
    title: 'Team Training Workshops',
    options: [
      {
        name: 'Fundamentals',
        price: '997',
        duration: '1 day',
        participants: 'Up to 6',
        topics: [
          'Make.com basics',
          'Simple automation creation',
          'Integration fundamentals',
          'Hands-on exercises'
        ]
      },
      {
        name: 'Advanced',
        price: '1,997',
        duration: '2 days',
        participants: 'Up to 6',
        topics: [
          'Complex workflow design',
          'Error handling strategies',
          'Custom functions',
          'Performance optimization',
          'Best practices'
        ]
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Pricing for Every Stage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your automation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 hover:from-primary/20 hover:to-secondary/20'
                    : 'bg-white dark:bg-gray-800 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5'
                } shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-center mb-8">
                  <Icon className={`w-12 h-12 ${plan.popular ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}`} />
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">
                    €{plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/workflow</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  onClick={() => window.location.href = '/book-consultation'}
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Consulting Rate Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">{consultingRates.title}</h3>
            <p className="text-xl">
              <span className="text-3xl font-bold">€{consultingRates.rate}</span>
              <span className="text-gray-600 dark:text-gray-400">/hour</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{consultingRates.description}</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consultingRates.options.map((option, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Workshop Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">{workshops.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Empower your team with hands-on training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.options.map((workshop, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
                <h4 className="text-xl font-bold mb-4">{workshop.name} Workshop</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold">€{workshop.price}</span>
                  <span className="text-gray-600 dark:text-gray-400"> / group</span>
                </div>
                <div className="space-y-4 mb-8">
                  <p className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    {workshop.participants} participants
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    {workshop.duration}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {workshop.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{topic}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = '/book-consultation'}
                >
                  Book Workshop
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Common questions about our services and process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="font-semibold mb-3">How long does workflow development take?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Development time varies by complexity. Simple workflows take 1-2 weeks, while complex enterprise solutions may take 2-4 weeks.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="font-semibold mb-3">Do you provide ongoing support?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we offer dedicated support for all our workflows. Enterprise clients receive 24/7 priority support.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="font-semibold mb-3">Can you customize workshops for our team?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! We tailor workshop content to your team's skill level and specific automation needs.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="font-semibold mb-3">What's included in the consultation?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Consultations cover workflow assessment, optimization recommendations, and strategic automation planning.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All services include our satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
};