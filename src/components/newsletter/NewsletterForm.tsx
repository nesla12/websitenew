import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(import.meta.env.VITE_MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'newsletter',
          email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={status === 'loading'}
        >
          Subscribe
        </Button>

        {status === 'success' && (
          <p className="text-green-600 dark:text-green-400 text-center">
            Thanks for subscribing!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 dark:text-red-400 text-center">
            Failed to subscribe. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};