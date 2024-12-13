import React from 'react';
import { Twitter, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      color: 'hover:text-primary'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-600 dark:text-gray-400">Share:</span>
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 dark:text-gray-400 ${link.color} transition-colors`}
            title={`Share on ${link.name}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
      <button
        onClick={copyToClipboard}
        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
        title="Copy link"
      >
        <LinkIcon className="w-5 h-5" />
      </button>
    </div>
  );
};