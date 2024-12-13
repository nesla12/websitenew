import React, { useState, useEffect } from 'react';
import { Mail, Share2, FileText, Users, Calendar, Building, MessageCircle, Bot } from 'lucide-react';

interface UseCase {
  icon: React.ElementType;
  title: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    icon: Mail,
    title: 'Email Management',
    description: 'Automate email sorting, responses, and follow-ups with AI-powered workflows'
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Schedule posts and analyze engagement across platforms automatically'
  },
  {
    icon: FileText,
    title: 'Document Processing',
    description: 'Automate document generation, processing, and storage workflows'
  },
  {
    icon: Users,
    title: 'CRM Integration',
    description: 'Seamlessly sync customer data and automate follow-up sequences'
  },
  {
    icon: Calendar,
    title: 'Meeting Management',
    description: 'Streamline scheduling, confirmations, and follow-up processes'
  },
  {
    icon: Building,
    title: 'Recruitment',
    description: 'Automate candidate processing, screening, and communication'
  },
  {
    icon: MessageCircle,
    title: 'Customer Support',
    description: 'Automate ticket routing, responses, and support workflow management'
  },
  {
    icon: Bot,
    title: 'AI Chat Assistant',
    description: 'Deploy intelligent chatbots for 24/7 customer engagement and support'
  }
];

export const UseCasesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % useCases.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div 
      className="w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-bold text-center mb-8">
        Did You Know You Can Automate This?
        <span className="block text-base font-normal text-gray-600 dark:text-gray-400 mt-2">
          Discover powerful automation possibilities for your business
        </span>
      </h2>
      <div 
        className="flex transition-all duration-700 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <div 
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center text-center space-y-6 px-6"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full hover:scale-110 transition-all duration-300">
                  <Icon className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                {useCase.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                {useCase.description}
              </p>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center mt-8 space-x-3">
        {useCases.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-primary to-secondary w-8' 
                : 'bg-gray-300 dark:bg-gray-700 hover:bg-primary/50 hover:scale-110'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};