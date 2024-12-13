import React from 'react';
import { Mail, Phone, MapPin, Shield, Scale, FileText, Book, Users, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-background-dark text-text-dark py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Automation Coach
              </h3>
            </div>
            <p className="text-gray-400">
              Empowering businesses with AI-driven automation solutions for sustainable growth and efficiency.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/make-automation" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <Workflow className="w-4 h-4 mr-2" />
                  Make.com Automation
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <Users className="w-4 h-4 mr-2" />
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/guides" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <Book className="w-4 h-4 mr-2" />
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <Scale className="w-4 h-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FileText className="w-4 h-4 mr-2" />
                  Legal Information
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:contact@aiautomationcoach.com" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                contact@aiautomationcoach.com
              </a>
              <a href="tel:+393248085283" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +39 324 808 5283
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Antlas 8, 30954 Ritten, Italy</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AI Automation Coach. All rights reserved.
            <span className="block mt-2 text-sm">
              Made with ❤️ in South Tyrol, Italy
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};