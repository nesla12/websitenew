import React from 'react';
import { Layout } from '../../components/layout/Layout';

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              AI Automation Coach ("we", "our", or "us"), operated by Lorenzo Nesler, is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information</li>
              <li>Assessment responses</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Generate personalized AI implementation roadmaps</li>
              <li>Send relevant communications</li>
              <li>Analyze and improve our website performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Contact Information</h2>
            <p>
              For any privacy-related questions, please contact:<br />
              Email: contact@aiautomationcoach.com<br />
              Address: Antlas 8, 30954 Ritten, Italy
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};