import React, { useState } from 'react';
import { Button } from '../ui/Button';

interface UserInfoFormProps {
  onSubmit: (userInfo: {
    email: string;
    companyName: string;
    companySize: string;
    industry: string;
  }) => void;
}

export const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    companySize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:text-white"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Company Size
            </label>
            <select
              id="companySize"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:text-white"
              value={formData.companySize}
              onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Start Assessment
          </Button>
        </div>
      </form>
    </div>
  );
};