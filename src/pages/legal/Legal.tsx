import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Scale, Shield, FileText, Building, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Legal = () => {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Important legal notices and business information
            </p>
          </div>

          <div className="space-y-8">
            {/* Company Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Company Information</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p><strong>Business Name:</strong> AI Automation Coach</p>
                <p><strong>Owner:</strong> Lorenzo Nesler</p>
                <p><strong>VAT ID:</strong> Registration starts january 2025</p>
                <p><strong>Registration:</strong> Chamber of Commerce of Bolzano</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Antlas 8<br />
                    39054 Ritten (BZ)<br />
                    Italy
                  </p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <a href="mailto:contact@aiautomationcoach.com" 
                     className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    contact@aiautomationcoach.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <a href="tel:+393248085283" 
                     className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    +39 324 808 5283
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Documents */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Legal Documents</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/privacy" 
                      className="flex items-center p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary group transition-all duration-300">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Privacy Policy</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Data protection information</p>
                  </div>
                </Link>
                <Link to="/terms"
                      className="flex items-center p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary group transition-all duration-300">
                  <Scale className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Terms of Service</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Service usage conditions</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8">
              <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  The information provided on this website is for general informational purposes only.
                  While we strive to keep the information up to date and accurate, we make no
                  representations or warranties of any kind about the completeness, accuracy,
                  reliability, suitability, or availability of the information.
                </p>
                <p>
                  Any reliance you place on such information is strictly at your own risk. We will not
                  be liable for any loss or damage arising from the use of this website or the
                  information it contains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};