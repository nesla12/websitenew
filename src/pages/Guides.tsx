import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { guides } from '../data/guides';
import { Book, Calendar, Search, Sparkles, Bot, Brain, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsletterSection } from '../components/newsletter/NewsletterSection';
import { Button } from '../components/ui/Button';

export const Guides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'prompt-engineering', label: 'Prompt Engineering' },
    { id: 'make-automation', label: 'Make.com Automation' },
    { id: 'ai-implementation', label: 'AI Implementation' }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCategories = [
    {
      icon: Brain,
      title: 'AI Implementation',
      description: 'Learn how to successfully implement AI in your business'
    },
    {
      icon: Bot,
      title: 'Prompt Engineering',
      description: 'Master the art of crafting effective AI prompts'
    },
    {
      icon: Code,
      title: 'Automation',
      description: 'Discover powerful automation techniques and strategies'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Guides
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              In-depth resources to master AI automation and implementation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {featuredCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search guides..."
                className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                    selectedCategory === category.id ?
                    'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' :
                    'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-primary/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredGuides.map((guide) => (
              <Link
                key={guide.id}
                to={`/guides/${guide.id}`}
                className="group relative block"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden z-10 h-full">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary backdrop-blur-md group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      {guide.category.split('-').join(' ')}
                    </span>
                    <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                    {guide.title}
                  </h2>
                  <p className="text-lg text-gray-600/90 dark:text-gray-400/90 mb-6">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-gray-500">
                      <Book className="w-4 h-4 mr-1" />
                      <span className="text-sm">{guide.author}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        {new Date(guide.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Featured Guide Preview */}
          {guides[0] && (
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="group relative mb-20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl z-10">
              <h2 className="text-3xl font-bold mb-6">Featured Guide</h2>
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-2xl font-bold mb-4">{guides[0].title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {guides[0].description}
                </p>
                <Link to={`/guides/${guides[0].id}`}>
                  <Button>
                    Read Full Guide <Book className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              </div>
            </motion.div>
          )}
          
          {/* Newsletter Section */}
          <NewsletterSection />
        </div>
      </div>
    </Layout>
  );
};