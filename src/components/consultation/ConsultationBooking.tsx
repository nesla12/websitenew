import React, { useEffect } from 'react';
import { Layout } from '../layout/Layout';

export const ConsultationBooking = () => {
  useEffect(() => {
    // Load TidyCal script
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Book a Consultation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Schedule a 30-minute consultation to discuss your automation needs
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
          <div className="tidycal-embed" data-path="lorenzonesla/30-minute-meeting"></div>
        </div>
      </div>
    </Layout>
  );
};