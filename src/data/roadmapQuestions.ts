export const roadmapQuestions = [
  {
    id: 1,
    question: "What are your top 3 business processes that need automation?",
    type: "text",
    placeholder: "E.g., customer onboarding, invoice processing, lead nurturing",
    required: true
  },
  {
    id: 2,
    question: "What are your main challenges with current processes?",
    type: "text",
    placeholder: "E.g., time-consuming manual work, data entry errors, delayed responses",
    required: true
  },
  {
    id: 3,
    question: "What specific outcomes do you want to achieve with automation?",
    type: "text",
    placeholder: "E.g., reduce processing time by 50%, improve customer response time",
    required: true
  },
  {
    id: 4,
    question: "What tools and software do you currently use?",
    type: "text",
    placeholder: "E.g., CRM, accounting software, project management tools",
    required: true
  },
  {
    id: 5,
    question: "What is your implementation timeline preference?",
    options: [
      { text: "Within 1 month", score: 4 },
      { text: "Within 3 months", score: 3 },
      { text: "Within 6 months", score: 2 },
      { text: "Within 12 months", score: 1 }
    ],
    type: "choice"
  }
];