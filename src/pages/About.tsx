import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Bot, Clock, Sparkles, Brain, Leaf, Lightbulb, LineChart, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Bridging Technology and{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Sustainable Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Hi, I'm Lorenzo Nesler. I combine environmental science expertise with AI innovation
                to help businesses create sustainable, efficient solutions for a better future.
              </p>
              <div className="flex space-x-4">
                <Link to="/contact">
                <Button size="lg">
                  Let's Connect <Sparkles className="ml-2 w-5 h-5" />
                </Button>
                </Link>
                <a href="https://www.linkedin.com/in/lorenzo-nesler-12x12" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
              <img
                src="https://aiautomationcoach.com/lorenzo.jpg"
                alt="AI Automation Expert"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Mission & Background</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Combining environmental science with AI innovation to create sustainable solutions
                that benefit both businesses and our planet.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Environmental Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Graduate of BOKU Vienna in Environment and Bioresources Management, specializing in sustainable development.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Exploring breakthrough technologies in clean energy, ecosystem preservation, and resource optimization.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Microsoft AI certified since 2021, pioneering GPT-3 implementations since early development.
                </p>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">My Journey</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  My journey began at the University of Natural Resources and Life Sciences, Vienna (BOKU),
                  where I studied Environment and Bioresources Management. This interdisciplinary program
                  integrated knowledge from natural sciences, engineering, biotechnology, social sciences,
                  and economics.
                </p>
                <p>
                  Through my studies and research, I identified key environmental challenges: ecosystem
                  disruption, clean energy, chemical pollution, microplastic contamination, and systemic issues in our
                  societal and monetary systems leading to resource misallocation and inequality.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 my-6">
                  <p className="italic">
                    "AI represents a powerful tool for optimizing resource allocation and creating
                    better equilibrium between human needs and environmental sustainability."
                  </p>
                  <footer className="text-sm">- Personal Philosophy</footer>
                </blockquote>
                <p>
                  In 2021, I obtained my first AI certification from Microsoft, and by 2022, I was
                  already experimenting with GPT-3 during its development phase. This unique combination
                  of environmental science and AI expertise allows me to develop solutions that address
                  both business efficiency and environmental sustainability.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I envision a future where AI and automation help create a more sustainable and equitable world.
              By optimizing resource allocation, reducing waste, and enabling better decision-making,
              we can address both environmental challenges and business efficiency simultaneously.
            </p>
            <Link to="/assessment">
              <Button size="lg">
                Start Your Journey <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};