import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { guides } from '../data/guides';
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShareButtons } from '../components/sharing/ShareButtons';

export const GuideDetail = () => {
  const { id } = useParams<{ id: string }>();
  const guide = guides.find(g => g.id === id);
  const relatedGuides = guides
    .filter(g => g.id !== id && g.category === guide?.category)
    .slice(0, 3);

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      return !inline && match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          PreTag="div"
          className="rounded-lg my-4 p-4 bg-gray-900"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5" {...props}>
          {children}
        </code>
      );
    },
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-16 mb-8 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800 dark:text-white">
        {children}
      </h3>
    ),
    p: ({ children }: any) => (
      <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside mb-8 space-y-3 text-gray-600 dark:text-gray-300 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-8 space-y-3 text-gray-600 dark:text-gray-300 ml-4">
        {children}
      </ol>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-lg text-gray-600 dark:text-gray-300">
        {children}
      </blockquote>
    ),
  };
  if (!guide) {
    return (
      <Layout>
        <div className="py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Guide not found</h1>
          <Link to="/guides">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/95">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/guides" className="inline-block mb-8">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Button>
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-12">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  {guide.category.split('-').join(' ')}
                </span>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">
                    {new Date(guide.publishDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                {guide.description}
              </p>
              <p className="text-sm text-gray-500">
                Written by {guide.author}
              </p>
            </div>

            <div className="mt-12">
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown components={components}>{guide.content}</ReactMarkdown>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <ShareButtons 
                title={guide.title}
                url={window.location.href}
              />
            </div>
            
            {relatedGuides.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Related Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedGuides.map((relatedGuide) => (
                    <Link
                      key={relatedGuide.id}
                      to={`/guides/${relatedGuide.id}`}
                      className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center space-x-2 mb-4">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary">{relatedGuide.category.split('-').join(' ')}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {relatedGuide.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {relatedGuide.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};