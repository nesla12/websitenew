import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { UseCasesSlider } from '../components/home/UseCasesSlider';
import { NewsletterSection } from '../components/newsletter/NewsletterSection';
import { Zap, ArrowRight, Brain, Workflow, Clock, DollarSign, Users, Book, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { guides } from '../data/guides';
import { AutomationRequestForm } from '../components/automation/AutomationRequestForm';

export const Home = () => {
  const features = [
    {
      title: ' Free AI Assessment',
      description: 'Discover your automation potential with our comprehensive free assessment',
      icon: Brain,
      link: '/assessment',
      buttonText: 'Start Free Assessment'
    },
    {
      title: 'Custom Automations',
      description: 'Transform your business with tailored AI automation solutions',
      icon: Workflow,
      link: '/services/make-automation',
      buttonText: 'Explore Solutions'
    },
    {
      title: 'Team Training',
      description: 'Empower your team with hands-on automation workshops',
      icon: Users,
      link: '/workshops',
      buttonText: 'View Workshops'
    }
  ];

  const services = [
    {
      title: 'Done For You Automations',
      description: 'Custom-built automation solutions tailored to your business needs',
      price: 'From €480',
      features: [
        'Custom workflow development',
        'System integration',
        'Testing and deployment',
        'Documentation and training'
      ],
      icon: Workflow,
      link: '/services/make-automation'
    },
    {
      title: 'Consultation Services',
      description: 'Expert guidance for your automation journey',
      price: '€120/hour',
      features: [
        'Process analysis',
        'Strategy development',
        'Tool selection',
        'Implementation planning'
      ],
      icon: Brain,
      link: '/contact'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Reduce manual tasks by up to 80% with intelligent automation'
    },
    {
      icon: DollarSign,
      title: 'Cut Costs',
      description: 'Lower operational expenses through efficient process automation'
    },
    {
      icon: Users,
      title: 'Scale Operations',
      description: 'Grow your business without proportionally increasing overhead'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Unlock Your Business Potential with{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Intelligent Automation
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transform your workflows, save valuable time, and achieve sustainable growth with 
                expert-guided AI automation solutions
              </p>
              <div className="flex justify-center mt-8 space-x-4">
                <Link to="/assessment">
                  <Button size="lg" className="group">
                    Start Free Assessment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Book Consultation <Sparkles className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 z-10">
                      <Icon className="w-12 h-12 text-primary mb-6" />
                      <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {feature.description}
                      </p>
                      <Link to={feature.link}>
                        <Button className="w-full">
                          {feature.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12">
              <UseCasesSlider />
            </div>

            {/* Benefits Section */}
            <div className="mt-20 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Transform Your Business with AI
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Experience the power of intelligent automation across your organization
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            {/* Services Section */}
            <div className="mt-20 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Choose the perfect solution for your automation needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <Icon className="w-12 h-12 text-primary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {service.description}
                      </p>
                      <div className="text-2xl font-bold text-primary mb-6">
                        {service.price}
                      </div>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Zap className="w-5 h-5 text-primary mr-2" />
                            <span className="text-gray-600 dark:text-gray-400">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link to={service.link}>
                        <Button className="w-full">
                          Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Free Guides Section */}
            <div className="mt-20 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Free AI Automation Guides</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Expert resources to help you master AI automation
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {guides.slice(0, 3).map((guide, index) => (
                  <Link
                    key={guide.id}
                    to={`/guides/${guide.id}`}
                    className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                        {guide.category.split('-').join(' ')}
                      </span>
                      <Book className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {guide.description}
                    </p>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {new Date(guide.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/guides">
                  <Button size="lg">
                    View All Guides <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-20">
              <NewsletterSection />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};