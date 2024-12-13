export interface User {
  id: string;
  email: string;
  full_name?: string;
  company_name?: string;
  company_size?: string;
  industry?: string;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface AssessmentResult {
  userId: string;
  totalScore: number;
  recommendations: string[];
  timestamp: Date;
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}