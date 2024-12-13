import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ContactForm } from '../components/contact/ContactForm';

export const Contact = () => {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's discuss how we can help automate and scale your business
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};