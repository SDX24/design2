export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  guideIds: string[];
  milestones: string[];
  emoji: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: "move-out-essentials",
    title: "Move Out Essentials",
    description: "Everything you need to know before moving into your first place. From finding a rental to setting up utilities.",
    category: "Housing",
    difficulty: "Beginner",
    estimatedTime: "2-3 weeks",
    guideIds: [
      "renting-checklist",
      "understanding-leases",
      "moving-checklist",
      "budgeting-101",
      "banking-101",
    ],
    milestones: [
      "Find and inspect potential rentals",
      "Understand your lease agreement",
      "Create a moving budget",
      "Complete your move successfully",
    ],
    emoji: "🏠",
  },
  {
    id: "first-job-journey",
    title: "First Job Journey",
    description: "Land your first job and succeed in the workplace. Resume writing, interviews, and workplace success.",
    category: "Career",
    difficulty: "Beginner",
    estimatedTime: "3-4 weeks",
    guideIds: [
      "resume-writing",
      "job-search-strategy",
      "interview-prep",
      "first-day-success",
      "applying-for-sin",
    ],
    milestones: [
      "Create a professional resume",
      "Apply to 10+ jobs",
      "Ace your first interview",
      "Successfully complete your first week",
    ],
    emoji: "💼",
  },
  {
    id: "financial-basics",
    title: "Financial Basics",
    description: "Build a strong financial foundation. Budgeting, saving, credit, and emergency funds.",
    category: "Money",
    difficulty: "Beginner",
    estimatedTime: "4-6 weeks",
    guideIds: [
      "budgeting-101",
      "emergency-fund-starter",
      "banking-101",
      "credit-card-basics",
      "building-credit-from-scratch",
      "saving-strategies",
    ],
    milestones: [
      "Create your first budget",
      "Open a savings account",
      "Start building credit",
      "Save your first $500",
    ],
    emoji: "💰",
  },
  {
    id: "tax-season-ready",
    title: "Tax Season Ready",
    description: "Understand taxes and file your first return with confidence. Canadian tax basics and deductions.",
    category: "Taxes",
    difficulty: "Intermediate",
    estimatedTime: "2 weeks",
    guideIds: [
      "taxes-canada-basics",
      "understanding-t4",
      "tax-deductions-students",
    ],
    milestones: [
      "Gather all tax documents",
      "Understand your T4 slip",
      "File your first tax return",
      "Claim eligible deductions",
    ],
    emoji: "📋",
  },
  {
    id: "student-success",
    title: "Student Success",
    description: "Navigate student life like a pro. Financial aid, managing school and work, and planning for after graduation.",
    category: "Education",
    difficulty: "Beginner",
    estimatedTime: "Ongoing",
    guideIds: [
      "student-loans-osap",
      "scholarship-search",
      "managing-student-life",
      "budgeting-101",
      "tax-deductions-students",
    ],
    milestones: [
      "Apply for financial aid",
      "Apply to 5+ scholarships",
      "Balance school and work",
      "Plan for graduation",
    ],
    emoji: "📚",
  },
  {
    id: "newcomer-starter",
    title: "Newcomer Starter",
    description: "Essential steps for newcomers to Canada. Work permits, essential documents, and settling in.",
    category: "Immigration",
    difficulty: "Intermediate",
    estimatedTime: "4-8 weeks",
    guideIds: [
      "work-permit-basics",
      "applying-for-sin",
      "id-requirements-canada",
      "banking-101",
      "renting-checklist",
    ],
    milestones: [
      "Understand your work permit",
      "Get your SIN",
      "Open a bank account",
      "Find your first place to live",
    ],
    emoji: "🌍",
  },
];
