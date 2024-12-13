import React from 'react';
import { Layout } from '../../components/layout/Layout';

export const Terms = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using AI Automation Coach's services, you agree to be bound by these Terms of Service.
              These Terms constitute a legally binding agreement between you and AI Automation Coach, operated by Lorenzo Nesler.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p>
              We provide AI automation consulting, workflow development, and training services. All services are provided
              "as is" and we make no warranties about the results or outcomes of using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Workflow development fees are charged per workflow</li>
              <li>Consultation services are billed hourly</li>
              <li>Workshop fees are per group</li>
              <li>Payment is required before service delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p>
              All materials, workflows, and training content remain the intellectual property of AI Automation Coach.
              Clients receive a license to use custom workflows for their business operations.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};