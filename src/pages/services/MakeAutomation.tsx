import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../../components/layout/Layout';
import { Workflow, Zap, ArrowRight, Code, Brain, Sparkles, Mail, Share2, FileText, Users, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { AutomationRequestForm } from '../../components/automation/AutomationRequestForm';

export const MakeAutomation = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const features = [
    {
      title: 'Custom Workflow Design',
      description: 'Tailored automation solutions designed specifically for your business processes',
      icon: Workflow,
      benefits: [
        'Streamlined operations',
        'Reduced manual work',
        'Improved accuracy',
        'Real-time processing'
      ]
    },
    {
      title: 'System Integration',
      description: 'Seamless connection of your existing tools and platforms',
      icon: Brain,
      benefits: [
        'Data synchronization',
        'API integration',
        'Custom webhooks',
        'Automated data flow'
      ]
    },
    {
      title: 'Error Handling',
      description: 'Robust error management and monitoring systems',
      icon: Code,
      benefits: [
        'Automatic retries',
        'Error notifications',
        'Fallback scenarios',
        'Data validation'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Integration',
      description: 'Automated order processing and inventory management',
      metrics: ['50% reduction in processing time', '99.9% accuracy rate']
    },
    {
      title: 'CRM Automation',
      description: 'Customer data synchronization and lead management',
      metrics: ['4 hours saved daily', 'Zero manual data entry']
    }
  ];

  const popularAutomations = [
    {
      title: 'Email Management',
      icon: Mail,
      description: 'Intelligent email processing and routing',
      features: [
        'Auto-categorize incoming emails',
        'Smart response suggestions',
        'Team assignment automation',
        'Follow-up reminders'
      ]
    },
    {
      title: 'Social Media Management',
      icon: Share2,
      description: 'Streamlined content publishing and analytics',
      features: [
        'Multi-platform scheduling',
        'AI-powered caption generation',
        'Hashtag optimization',
        'Engagement analytics'
      ]
    },
    {
      title: 'Document Processing',
      icon: FileText,
      description: 'Automated document handling and generation',
      features: [
        'Invoice generation',
        'Proposal automation',
        'Contract management',
        'Document archiving'
      ]
    },
    {
      title: 'CRM Integration',
      icon: Users,
      description: 'Seamless customer data management',
      features: [
        'Lead capture automation',
        'Contact enrichment',
        'Activity tracking',
        'Sales pipeline automation'
      ]
    },
    {
      title: 'Meeting Management',
      icon: Calendar,
      description: 'Streamlined scheduling and follow-up',
      features: [
        'Calendar integration',
        'Automated confirmations',
        'Meeting notes distribution',
        'Follow-up automation'
      ]
    },
    {
      title: 'Recruitment Workflow',
      icon: Building,
      description: 'Efficient candidate processing',
      features: [
        'Application processing',
        'Resume parsing',
        'Interview scheduling',
        'Candidate communication'
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">
              Make.com{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Automation Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your business processes with powerful, reliable automation workflows
              that save time and reduce errors.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" onClick={() => setShowRequestForm(true)}>
                Request Automation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/assessment">
                <Button variant="outline" size="lg">
                  Take Assessment <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Popular Automations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">Popular Automations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Discover our most requested automation solutions that help businesses save time and reduce errors
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularAutomations.map((automation, index) => {
                const Icon = automation.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative rounded-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl backdrop-blur-sm z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{automation.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {automation.description}
                    </p>
                    <ul className="space-y-2">
                      {automation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm group/item">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm z-10">
                    <Icon className="w-12 h-12 text-primary mb-6" />
                    <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center group/item">
                          <Zap className="w-5 h-5 text-primary mr-2 group-hover/item:rotate-12 transition-transform duration-300" />
                          <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={index}
                  className="group cursor-pointer relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 backdrop-blur-sm z-10">
                    <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {study.description}
                    </p>
                    <ul className="space-y-2">
                      {study.metrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-center group/item">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 group-hover/item:scale-150 transition-transform duration-300" />
                          <span className="text-gray-600 dark:text-gray-400">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 backdrop-blur-sm z-10">
                <h2 className="text-2xl font-bold mb-4">Ready to Automate?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Book a free consultation to discuss your automation needs and get a customized solution.
                </p>
                <Link to="/contact">
                  <Button size="lg">
                    Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showRequestForm && (
          <AutomationRequestForm onClose={() => setShowRequestForm(false)} />
        )}
      </AnimatePresence>
    </Layout>
  );
};