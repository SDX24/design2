export type GuideType = "core" | "local";

export interface GuideStep {
  id: string;
  title: string;
  description: string;
}

export interface Guide {
  slug: string;
  title: string;
  summary: string;
  category: string;
  type: GuideType;
  region?: string; // e.g., "CA-BC"
  steps: GuideStep[];
}

export const guides: Guide[] = [
  // MONEY GUIDES (10)
  {
    slug: "budgeting-101",
    title: "Budgeting 101",
    summary: "A simple first budget for students and young adults.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "List your monthly income",
        description: "Include paycheques, scholarships, family support, etc.",
      },
      {
        id: "step-2",
        title: "List your fixed expenses",
        description:
          "Rent, phone, transit pass, insurance, subscriptions you pay every month.",
      },
      {
        id: "step-3",
        title: "Set flexible spending limits",
        description:
          "Decide how much you can spend on food, going out, hobbies, etc.",
      },
    ],
  },
  {
    slug: "emergency-fund-starter",
    title: "Building Your First Emergency Fund",
    summary: "Start small and build a safety net for unexpected expenses.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Set a realistic goal",
        description:
          "Start with $500-$1000 as your first milestone. This covers most small emergencies like car repairs or urgent travel.",
      },
      {
        id: "step-2",
        title: "Open a separate savings account",
        description:
          "Keep your emergency fund separate from daily spending. Look for a high-interest savings account with no fees.",
      },
      {
        id: "step-3",
        title: "Automate small deposits",
        description:
          "Set up automatic transfers of $20-$50 per paycheque. Even small amounts add up quickly over time.",
      },
      {
        id: "step-4",
        title: "Only use for real emergencies",
        description:
          "Medical bills, job loss, urgent repairs. Not for sales, trips, or regular expenses. Rebuild immediately after use.",
      },
    ],
  },
  {
    slug: "credit-card-basics",
    title: "Your First Credit Card: The Basics",
    summary: "How to choose, use, and manage your first credit card responsibly.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Understand what credit means",
        description:
          "A credit card is borrowed money you must repay. It's not 'extra money'—every purchase needs to be paid back with interest if not paid in full.",
      },
      {
        id: "step-2",
        title: "Choose a student or low-limit card",
        description:
          "Look for cards with no annual fee, low interest rates, and credit limits of $500-$1000. Many banks offer student cards with rewards.",
      },
      {
        id: "step-3",
        title: "Make a payment plan",
        description:
          "Only charge what you can pay off in full each month. Set up automatic payments for at least the minimum, but always aim to pay the full balance.",
      },
      {
        id: "step-4",
        title: "Monitor your spending",
        description:
          "Check your balance weekly. Set up alerts for large purchases. Keep your credit utilization under 30% of your limit to build good credit.",
      },
    ],
  },
  {
    slug: "student-loans-101",
    title: "Understanding Student Loans",
    summary: "What you need to know about borrowing for school.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Know the types of loans",
        description:
          "Government loans (OSAP, student aid) usually have lower interest and flexible repayment. Private loans have higher rates but fewer restrictions.",
      },
      {
        id: "step-2",
        title: "Borrow only what you need",
        description:
          "Calculate tuition, books, rent, and essential living costs. Don't borrow extra for lifestyle expenses—you'll pay interest on every dollar.",
      },
      {
        id: "step-3",
        title: "Understand grace periods",
        description:
          "Most student loans have a 6-month grace period after graduation before payments start. Interest may still accrue during this time.",
      },
      {
        id: "step-4",
        title: "Plan for repayment",
        description:
          "Use loan calculators to estimate monthly payments. Look into Repayment Assistance Plans (RAP) if you're struggling after graduation.",
      },
    ],
  },
  {
    slug: "banking-101",
    title: "Opening Your First Bank Account",
    summary: "How to choose a bank and set up your first account.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Compare account types",
        description:
          "Chequing accounts are for daily spending. Savings accounts earn interest but have transaction limits. Most people need both.",
      },
      {
        id: "step-2",
        title: "Look for student or youth accounts",
        description:
          "Many banks offer free accounts for students under 25. Compare fees, minimum balances, ATM access, and mobile banking features.",
      },
      {
        id: "step-3",
        title: "Gather required documents",
        description:
          "Bring government ID (driver's license or passport), proof of address (utility bill or lease), and your SIN if you want to earn interest.",
      },
      {
        id: "step-4",
        title: "Set up online banking",
        description:
          "Download the mobile app, set up direct deposit for paycheques, and enable alerts for low balances or large transactions.",
      },
    ],
  },
  {
    slug: "investing-basics",
    title: "Investing 101 for Beginners",
    summary: "Start investing with small amounts and simple strategies.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Understand the basics",
        description:
          "Investing means buying assets (stocks, bonds, ETFs) that can grow in value over time. It's riskier than savings but offers higher returns long-term.",
      },
      {
        id: "step-2",
        title: "Start with a TFSA or RRSP",
        description:
          "Tax-Free Savings Accounts (TFSA) let you invest without paying tax on gains. RRSPs reduce your taxable income and are better for retirement.",
      },
      {
        id: "step-3",
        title: "Choose low-cost index funds",
        description:
          "Index funds track the whole market and have low fees. Robo-advisors like Wealthsimple make it easy to start with $1. Avoid picking individual stocks at first.",
      },
      {
        id: "step-4",
        title: "Invest regularly and stay patient",
        description:
          "Set up automatic contributions even if it's just $25/month. Don't panic during market dips—investing works best over 5-10+ years.",
      },
    ],
  },
  {
    slug: "credit-score-basics",
    title: "Building a Good Credit Score",
    summary: "What credit scores are and how to build yours from scratch.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Understand what affects your score",
        description:
          "Payment history (35%), credit utilization (30%), length of credit history (15%), types of credit (10%), and new credit inquiries (10%).",
      },
      {
        id: "step-2",
        title: "Always pay on time",
        description:
          "Payment history is the biggest factor. Set up automatic payments for at least the minimum amount. Even one late payment can drop your score significantly.",
      },
      {
        id: "step-3",
        title: "Keep balances low",
        description:
          "Use less than 30% of your available credit. If your limit is $1000, keep your balance under $300. Pay off balances in full each month if possible.",
      },
      {
        id: "step-4",
        title: "Check your credit report",
        description:
          "Get a free credit report from Equifax or TransUnion annually. Look for errors and dispute them immediately. Monitor your score with free tools like Borrowell or Credit Karma.",
      },
    ],
  },
  {
    slug: "debt-management",
    title: "Managing and Paying Off Debt",
    summary: "Strategies to tackle debt and avoid getting overwhelmed.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "List all your debts",
        description:
          "Write down every debt: credit cards, student loans, car loans. Include the balance, interest rate, minimum payment, and due date for each.",
      },
      {
        id: "step-2",
        title: "Choose a payoff strategy",
        description:
          "Avalanche method: Pay off highest interest rate first (saves the most money). Snowball method: Pay off smallest balance first (builds momentum).",
      },
      {
        id: "step-3",
        title: "Pay more than the minimum",
        description:
          "Minimum payments mostly cover interest. Even an extra $20/month on the principal makes a huge difference over time. Round up payments when possible.",
      },
      {
        id: "step-4",
        title: "Avoid taking on new debt",
        description:
          "Stop using credit cards while paying off debt. If you must use them, pay off purchases immediately. Consider balance transfers to lower-interest cards.",
      },
    ],
  },
  {
    slug: "financial-goals",
    title: "Setting Financial Goals That Work",
    summary: "How to set realistic money goals and actually achieve them.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Define short and long-term goals",
        description:
          "Short-term (1 year): Emergency fund, pay off credit card, save for a trip. Long-term (5+ years): House down payment, retirement savings, debt-free.",
      },
      {
        id: "step-2",
        title: "Make goals specific and measurable",
        description:
          "Instead of 'save more,' say 'save $3000 for emergency fund by December.' Use the SMART framework: Specific, Measurable, Achievable, Relevant, Time-bound.",
      },
      {
        id: "step-3",
        title: "Break goals into monthly targets",
        description:
          "If you want $3000 in 12 months, you need to save $250/month. Automate transfers to savings on payday. Track progress in a spreadsheet or app.",
      },
      {
        id: "step-4",
        title: "Review and adjust quarterly",
        description:
          "Life changes, and so should your goals. Every 3 months, check your progress. Celebrate wins, adjust targets if needed, and don't beat yourself up over setbacks.",
      },
    ],
  },
  {
    slug: "saving-strategies",
    title: "Simple Strategies to Save More Money",
    summary: "Practical tips to build savings without feeling deprived.",
    category: "Money",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Pay yourself first",
        description:
          "Transfer savings automatically on payday before you have a chance to spend it. Treat savings like a non-negotiable bill you must pay.",
      },
      {
        id: "step-2",
        title: "Use the 50/30/20 rule",
        description:
          "Spend 50% on needs (rent, food, transit), 30% on wants (entertainment, dining out), and save 20%. Adjust percentages based on your situation.",
      },
      {
        id: "step-3",
        title: "Cut one big expense",
        description:
          "Downgrade your phone plan, cancel unused subscriptions, or meal prep instead of eating out. One significant cut is easier than many tiny ones.",
      },
      {
        id: "step-4",
        title: "Try a savings challenge",
        description:
          "52-week challenge (save $1 week 1, $2 week 2, etc. = $1378/year). No-spend weekends. Round-up apps that invest your spare change automatically.",
      },
    ],
  },

  // HOUSING GUIDES (5)
  {
    slug: "renting-checklist",
    title: "First Rental Checklist",
    summary: "What to check before you sign a lease for the first time.",
    category: "Housing",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Review the lease terms",
        description:
          "Check length, rent amount, utilities, pet rules, and notice period.",
      },
      {
        id: "step-2",
        title: "Inspect the unit",
        description:
          "Look for damage, test appliances, water pressure, windows and locks.",
      },
      {
        id: "step-3",
        title: "Ask key questions",
        description:
          "Ask about noise, neighbours, laundry, parking, and how repairs work.",
      },
    ],
  },
  {
    slug: "understanding-leases",
    title: "Understanding Your Lease Agreement",
    summary: "Decode your lease and know your rights as a tenant.",
    category: "Housing",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Read every page carefully",
        description:
          "Don't skip the fine print. Look for clauses about rent increases, subletting, guests, maintenance responsibilities, and early termination fees.",
      },
      {
        id: "step-2",
        title: "Understand your rent obligations",
        description:
          "Know your rent amount, due date, accepted payment methods, and late fees. Check if utilities are included or separate. Ask about rent increase rules.",
      },
      {
        id: "step-3",
        title: "Know your tenant rights",
        description:
          "You have the right to safe, habitable housing. Landlords must give proper notice before entering. You can't be evicted without cause and proper process.",
      },
      {
        id: "step-4",
        title: "Document everything",
        description:
          "Take photos/videos of the unit's condition before moving in. Get a copy of your signed lease. Save all communication with your landlord in writing (email/text).",
      },
    ],
  },
  {
    slug: "roommate-agreements",
    title: "Living with Roommates: Making It Work",
    summary: "How to set up a roommate agreement and avoid conflict.",
    category: "Housing",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Create a written agreement",
        description:
          "Even with friends, write down rent split, bill responsibilities, shared supplies, cleaning schedule, and house rules. Review it together and both sign.",
      },
      {
        id: "step-2",
        title: "Set up shared expenses",
        description:
          "Use apps like Splitwise to track shared costs (utilities, internet, cleaning supplies). Agree on a budget for common items. Review expenses monthly.",
      },
      {
        id: "step-3",
        title: "Establish house rules early",
        description:
          "Discuss overnight guests, quiet hours, shared food, bathroom schedules, thermostat settings, and common space usage. Be specific to avoid assumptions.",
      },
      {
        id: "step-4",
        title: "Communicate issues quickly",
        description:
          "Address problems before they build up. Use 'I feel' statements ('I feel frustrated when dishes pile up') instead of blame. Schedule monthly house meetings.",
      },
    ],
  },
  {
    slug: "moving-checklist",
    title: "Moving Out: Your Complete Checklist",
    summary: "Everything you need to do for a smooth move.",
    category: "Housing",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Plan 4-6 weeks ahead",
        description:
          "Book movers or truck rental early. Order boxes and packing supplies. Start decluttering and selling/donating items you don't need. Create a moving binder.",
      },
      {
        id: "step-2",
        title: "Notify everyone 2-3 weeks before",
        description:
          "Update address with: bank, employer, CRA, subscriptions, insurance, doctor, dentist. Transfer or cancel utilities (hydro, internet, gas). Forward mail at Canada Post.",
      },
      {
        id: "step-3",
        title: "Pack strategically",
        description:
          "Label boxes by room and contents. Pack an 'essentials box' (toiletries, chargers, medications, snacks, change of clothes). Take photos of electronics before disconnecting.",
      },
      {
        id: "step-4",
        title: "Clean and document old place",
        description:
          "Deep clean the unit to get your full deposit back. Take photos/videos of its condition. Do a final walkthrough with landlord. Return keys and get receipt.",
      },
    ],
  },
  {
    slug: "tenant-rights",
    title: "Know Your Rights as a Renter",
    summary: "Essential tenant rights and protections in Canada.",
    category: "Housing",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Right to safe housing",
        description:
          "Landlords must maintain working heat, hot water, electricity, and structural safety. They must fix urgent repairs quickly. You can withhold rent or break lease if conditions are unsafe.",
      },
      {
        id: "step-2",
        title: "Notice requirements",
        description:
          "Landlords must give 24-hours notice before entering (except emergencies). They can't change locks, harass you, or shut off utilities. You have privacy rights.",
      },
      {
        id: "step-3",
        title: "Eviction protections",
        description:
          "Landlords can't evict you without proper legal process. They need valid reasons (non-payment, property damage, owner move-in). They must provide 60-90 days notice depending on reason.",
      },
      {
        id: "step-4",
        title: "Know where to get help",
        description:
          "Contact your province's Landlord-Tenant Board or Residential Tenancy Branch. Most disputes can be resolved through mediation. Document everything in writing.",
      },
    ],
  },

  // JOB GUIDES (4)
  {
    slug: "resume-writing",
    title: "Writing Your First Resume",
    summary: "Create a strong resume that gets you interviews.",
    category: "Jobs",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Choose the right format",
        description:
          "Chronological (work history in reverse order) is most common. Use functional format if you're changing careers. Keep it to 1 page for entry-level positions.",
      },
      {
        id: "step-2",
        title: "Write a strong summary",
        description:
          "2-3 sentences highlighting your skills, experience, and career goals. Focus on what you can offer employers, not what you want. Tailor it to each job.",
      },
      {
        id: "step-3",
        title: "List experience with impact",
        description:
          "Use action verbs (managed, created, improved). Include volunteer work, school projects, and part-time jobs. Quantify achievements (increased sales by 15%, served 50+ customers daily).",
      },
      {
        id: "step-4",
        title: "Include relevant skills and education",
        description:
          "List technical skills (Microsoft Office, Adobe, languages). Add soft skills (communication, teamwork). Include education with graduation date, relevant coursework, and GPA if 3.5+.",
      },
      {
        id: "step-5",
        title: "Proofread and format",
        description:
          "Use consistent fonts (11-12pt) and spacing. No spelling or grammar errors—have someone else review it. Save as PDF to preserve formatting. Update for each application.",
      },
    ],
  },
  {
    slug: "job-search-strategy",
    title: "Job Search Strategies That Work",
    summary: "How to find and land your first job.",
    category: "Jobs",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Set up job alerts",
        description:
          "Create profiles on Indeed, LinkedIn, Glassdoor. Set up email alerts for relevant positions. Check daily and apply within 24-48 hours of posting for best response.",
      },
      {
        id: "step-2",
        title: "Network actively",
        description:
          "Tell everyone you're job hunting. Reach out to family friends, professors, alumni. Attend career fairs and industry events. 70% of jobs come from networking.",
      },
      {
        id: "step-3",
        title: "Customize every application",
        description:
          "Tailor your resume and cover letter to each job description. Use keywords from the posting. Explain why you want THIS job at THIS company, not just any job.",
      },
      {
        id: "step-4",
        title: "Follow up strategically",
        description:
          "Send a thank-you email within 24 hours after interviews. Follow up on applications after 1-2 weeks if no response. Be polite and professional, not pushy.",
      },
      {
        id: "step-5",
        title: "Track your applications",
        description:
          "Keep a spreadsheet: company, position, date applied, contact person, status. Note interview dates and follow-up deadlines. This helps you stay organized and persistent.",
      },
    ],
  },
  {
    slug: "interview-prep",
    title: "Acing Your First Job Interview",
    summary: "Prepare, practice, and present your best self.",
    category: "Jobs",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Research the company",
        description:
          "Visit their website, read recent news, understand their products/services. Know their mission and values. Prepare 2-3 questions to ask them about the role and culture.",
      },
      {
        id: "step-2",
        title: "Practice common questions",
        description:
          "Prepare answers for: Tell me about yourself, Why this company, Strengths/weaknesses, Describe a challenge you overcame. Use STAR method (Situation, Task, Action, Result).",
      },
      {
        id: "step-3",
        title: "Plan your outfit and logistics",
        description:
          "Choose professional attire (business casual is usually safe). Plan your route and arrive 10 minutes early. Bring extra resumes, a notebook, and pen.",
      },
      {
        id: "step-4",
        title: "Make a strong impression",
        description:
          "Offer a firm handshake, make eye contact, smile genuinely. Speak clearly and enthusiastically. Show interest by asking questions. Mention specific things you learned about the company.",
      },
      {
        id: "step-5",
        title: "Follow up after",
        description:
          "Send a personalized thank-you email within 24 hours. Reference specific topics discussed. Reiterate your interest and fit. If you don't hear back in a week, politely follow up.",
      },
    ],
  },
  {
    slug: "first-day-success",
    title: "Surviving Your First Day at Work",
    summary: "What to expect and how to make a great first impression.",
    category: "Jobs",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Arrive early and prepared",
        description:
          "Show up 10-15 minutes early. Bring required documents (SIN, void cheque, ID). Have a notebook for taking notes. Dress professionally—match or slightly exceed office dress code.",
      },
      {
        id: "step-2",
        title: "Be friendly and observant",
        description:
          "Introduce yourself to everyone you meet. Ask people about their roles. Observe office culture (communication style, lunch habits, work hours). Listen more than you talk.",
      },
      {
        id: "step-3",
        title: "Take lots of notes",
        description:
          "Write down names, passwords, procedures, and expectations. Ask questions when unclear—it's better to ask than make mistakes. Review your notes at the end of the day.",
      },
      {
        id: "step-4",
        title: "Be patient with yourself",
        description:
          "You won't know everything on day one. It's okay to feel overwhelmed. Focus on making connections and understanding the basics. Most places expect a 3-6 month learning curve.",
      },
    ],
  },

  // TAX GUIDES (3)
  {
    slug: "taxes-canada-basics",
    title: "Taxes in Canada: Basic Steps",
    summary: "A simple overview of filing your first tax return in Canada.",
    category: "Taxes",
    type: "local",
    region: "CA",
    steps: [
      {
        id: "step-1",
        title: "Gather your tax slips",
        description: "T4, T4A, T2202, and any other income or tuition slips.",
      },
      {
        id: "step-2",
        title: "Choose a filing method",
        description:
          "Use certified tax software, a community tax clinic, or a professional.",
      },
      {
        id: "step-3",
        title: "Submit and save a copy",
        description:
          "Submit to CRA and save a PDF copy of your return and NOA for later.",
      },
    ],
  },
  {
    slug: "tax-deductions-students",
    title: "Tax Deductions for Students",
    summary: "Claim tuition, textbooks, and other student expenses.",
    category: "Taxes",
    type: "local",
    region: "CA",
    steps: [
      {
        id: "step-1",
        title: "Claim tuition with T2202",
        description:
          "Download your T2202 from your school's portal. This certificate shows tuition and fees paid. You can claim amounts you didn't receive scholarships for.",
      },
      {
        id: "step-2",
        title: "Claim student loan interest",
        description:
          "If you paid interest on government student loans, claim it using your tax software. You can carry forward unused amounts for up to 5 years.",
      },
      {
        id: "step-3",
        title: "Claim moving expenses",
        description:
          "If you moved 40km+ closer to school or work, claim moving costs (truck rental, gas, temporary lodging). Keep all receipts.",
      },
      {
        id: "step-4",
        title: "Save unused credits",
        description:
          "If you don't owe taxes, you can't get a refund for tuition credits. But you can carry them forward to future years or transfer to parents/spouse.",
      },
    ],
  },
  {
    slug: "understanding-t4",
    title: "Understanding Your T4 Slip",
    summary: "Decode your T4 and know what each box means.",
    category: "Taxes",
    type: "local",
    region: "CA",
    steps: [
      {
        id: "step-1",
        title: "Box 14: Employment income",
        description:
          "This is your total gross pay before deductions. This is what gets reported on your tax return and what you pay income tax on.",
      },
      {
        id: "step-2",
        title: "Boxes 16, 17, 18: CPP, EI, Income tax",
        description:
          "Box 16 shows CPP contributions. Box 17 shows EI premiums. Box 22 shows income tax already deducted. These reduce what you owe at tax time.",
      },
      {
        id: "step-3",
        title: "Box 44 and 46: Union dues and charity",
        description:
          "If applicable, these show amounts you can claim as deductions or credits. These reduce your taxable income or taxes owed.",
      },
      {
        id: "step-4",
        title: "Keep T4s for 6 years",
        description:
          "Store your T4 slips with your tax return. CRA recommends keeping tax documents for 6 years in case of audit or review. Save digital copies as backup.",
      },
    ],
  },

  // EDUCATION GUIDES (3)
  {
    slug: "student-loans-osap",
    title: "Applying for OSAP (Ontario Student Aid)",
    summary: "How to apply for student financial assistance in Ontario.",
    category: "Education",
    type: "local",
    region: "CA-ON",
    steps: [
      {
        id: "step-1",
        title: "Check eligibility",
        description:
          "Must be Canadian citizen/PR, Ontario resident for 12 months, enrolled in approved program. Aid is based on financial need, not grades.",
      },
      {
        id: "step-2",
        title: "Gather required documents",
        description:
          "SIN, OSAP access number (from school), banking info, parental income (if dependent), previous year's income tax info. Have your school and program details ready.",
      },
      {
        id: "step-3",
        title: "Apply online at OSAP website",
        description:
          "Applications open in May for fall semester. Apply 2-3 months before school starts. Fill out all sections accurately. Estimate costs if you're unsure.",
      },
      {
        id: "step-4",
        title: "Accept your offer and confirm enrollment",
        description:
          "You'll receive an offer within 2-3 weeks. Review grant vs. loan amounts. Accept online, then confirm enrollment with your school. Funds arrive 1-2 weeks before semester starts.",
      },
    ],
  },
  {
    slug: "scholarship-search",
    title: "Finding and Winning Scholarships",
    summary: "Where to find scholarships and how to apply successfully.",
    category: "Education",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Start with your school",
        description:
          "Check your school's financial aid office, website, and department. Many scholarships are only for current students. Apply for everything you're eligible for—even small amounts add up.",
      },
      {
        id: "step-2",
        title: "Search online databases",
        description:
          "Use ScholarshipsCanada, Yconic, StudentAwards. Set up a profile and get matched to opportunities. Search by: field of study, location, demographics, interests.",
      },
      {
        id: "step-3",
        title: "Look for local opportunities",
        description:
          "Check community foundations, local businesses, professional associations, clubs, places of worship. These have fewer applicants. Ask parents to check with their employers.",
      },
      {
        id: "step-4",
        title: "Write compelling applications",
        description:
          "Follow instructions exactly. Answer the prompt directly. Share specific stories and achievements. Proofread carefully. Get feedback from teachers or mentors. Apply to at least 10.",
      },
    ],
  },
  {
    slug: "managing-student-life",
    title: "Balancing School, Work, and Life",
    summary: "Time management tips for busy students.",
    category: "Education",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Use a planner or calendar app",
        description:
          "Write down all assignment due dates, exams, work shifts, and social events. Review your week every Sunday. Time-block study sessions. Use color coding by subject/priority.",
      },
      {
        id: "step-2",
        title: "Limit work hours during school",
        description:
          "Try not to work more than 15-20 hours/week during full course load. Studies show working 20+ hours negatively impacts grades. Quality of work matters more than quantity.",
      },
      {
        id: "step-3",
        title: "Build in breaks and self-care",
        description:
          "Schedule downtime like you schedule work. Get 7-8 hours sleep. Exercise 20-30 minutes daily. Eat regular meals. Say no to commitments that don't align with priorities.",
      },
      {
        id: "step-4",
        title: "Ask for help early",
        description:
          "Use tutoring, office hours, study groups. Talk to professors if you're struggling. Visit counseling or accessibility services if needed. Most schools have tons of free support.",
      },
    ],
  },

  // CREDIT GUIDES (2)
  {
    slug: "building-credit-from-scratch",
    title: "Building Credit from Zero",
    summary: "Start establishing your credit history the right way.",
    category: "Credit",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Get your first credit product",
        description:
          "Options: Student credit card, secured credit card ($300-$500 deposit), or become an authorized user on parent's card. Being added to someone's good credit history helps yours.",
      },
      {
        id: "step-2",
        title: "Use credit lightly and pay in full",
        description:
          "Charge only small, regular expenses (gas, groceries, subscriptions). Pay the full balance every month by the due date. This builds history without debt or interest charges.",
      },
      {
        id: "step-3",
        title: "Keep your oldest account open",
        description:
          "Length of credit history matters. Don't close your first credit card unless it has high annual fees. Even if you stop using it, keep it open to maintain history length.",
      },
      {
        id: "step-4",
        title: "Be patient and consistent",
        description:
          "Good credit takes 6-12 months to establish. After a year of on-time payments, you'll qualify for better cards and loans. Check your score quarterly (Borrowell, Credit Karma are free).",
      },
    ],
  },
  {
    slug: "reading-credit-report",
    title: "Understanding Your Credit Report",
    summary: "How to read and improve your credit report.",
    category: "Credit",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Get your free credit report",
        description:
          "Order free reports from Equifax and TransUnion annually. Online: Borrowell (Equifax) or Credit Karma (TransUnion) for free access anytime. By mail: Request official report free once per year.",
      },
      {
        id: "step-2",
        title: "Review personal information",
        description:
          "Check name, address, SIN, employment. Errors here can mix your file with someone else's. Dispute incorrect info immediately through credit bureau's dispute process.",
      },
      {
        id: "step-3",
        title: "Check account details",
        description:
          "Review all credit cards, loans, and lines of credit. Look for: accounts you don't recognize (fraud), wrong balances, incorrect payment history. Dispute errors with proof.",
      },
      {
        id: "step-4",
        title: "Understand inquiry and collections",
        description:
          "Hard inquiries (credit applications) stay 3 years. Too many hurt your score. Collections are serious—pay them and negotiate to have them removed. Negative items fall off after 6-7 years.",
      },
    ],
  },

  // DOCUMENT GUIDES (2)
  {
    slug: "applying-for-sin",
    title: "Getting Your Social Insurance Number (SIN)",
    summary: "How to apply for a SIN in Canada.",
    category: "Documents",
    type: "local",
    region: "CA",
    steps: [
      {
        id: "step-1",
        title: "Understand what a SIN is",
        description:
          "Your 9-digit Social Insurance Number is required to work in Canada and access government benefits. It's linked to your tax account and employment records. Keep it confidential.",
      },
      {
        id: "step-2",
        title: "Gather required documents",
        description:
          "Canadian citizens: Birth certificate + 1 other ID (passport, driver's license). Permanent residents: Confirmation of PR + foreign passport. Temporary residents: Work or study permit.",
      },
      {
        id: "step-3",
        title: "Apply in person at Service Canada",
        description:
          "Find nearest Service Canada office. Bring original documents (no copies). Application is free. Most are processed immediately and you walk out with your SIN on paper.",
      },
      {
        id: "step-4",
        title: "Keep your SIN secure",
        description:
          "Memorize it—don't carry the paper in your wallet. Only give it to employers, banks, and government. Never share it online or via email. Report lost/stolen SIN immediately.",
      },
    ],
  },
  {
    slug: "id-requirements-canada",
    title: "Essential ID Documents You Need",
    summary: "What IDs to get and when you'll need them.",
    category: "Documents",
    type: "local",
    region: "CA",
    steps: [
      {
        id: "step-1",
        title: "Get a government photo ID",
        description:
          "Driver's license (provincial): Most common, accepted everywhere. Provincial photo ID card: If you don't drive, get this from ServiceOntario/equivalent. Passport: Federal ID for travel.",
      },
      {
        id: "step-2",
        title: "Health card for medical coverage",
        description:
          "Apply for provincial health insurance (OHIP, MSP, etc.) if you don't have one. Bring proof of residency and identity. Coverage starts after 3-month waiting period for some newcomers.",
      },
      {
        id: "step-3",
        title: "Keep copies and backups",
        description:
          "Scan or photo all ID documents. Store encrypted digital copies in cloud storage. Keep physical copies in a safe place separate from originals. Never email or text ID photos.",
      },
      {
        id: "step-4",
        title: "Know what ID you need when",
        description:
          "Banking: 2 pieces of ID (1 photo). Renting: Government photo ID + SIN. Travel: Passport for international, photo ID for domestic flights. Voting: Any government-issued ID with address.",
      },
    ],
  },

  // IMMIGRATION GUIDE (1)
  {
    slug: "work-permit-basics",
    title: "Work Permits in Canada: The Basics",
    summary: "Understanding work permits for international students and newcomers.",
    category: "Immigration",
    type: "local",
    region: "CA",
    steps: [
      {
        id: "step-1",
        title: "Know the types of work permits",
        description:
          "Open work permit: Work for any employer. Closed work permit: Specific employer only. PGWP (Post-Grad): For international students after graduation. Co-op work permit: For required internships.",
      },
      {
        id: "step-2",
        title: "Check if you need a permit",
        description:
          "International students can work 20 hours/week during semester, full-time during breaks without separate permit (must have valid study permit). Some countries have IEC/Working Holiday agreements.",
      },
      {
        id: "step-3",
        title: "Apply before your current permit expires",
        description:
          "PGWP: Apply within 180 days of graduation. Provide transcripts, program completion letter, valid study permit. Takes 2-4 months. You have implied status while waiting.",
      },
      {
        id: "step-4",
        title: "Know your work permit conditions",
        description:
          "Check expiry date—set calendar reminders. Some permits restrict hours or type of work. Keep permit with you always. Employer must verify your eligibility. Report permit changes to IRCC.",
      },
    ],
  },

  // CAR OWNERSHIP GUIDE (1)
  {
    slug: "buying-first-car",
    title: "Buying Your First Car",
    summary: "What to know before purchasing your first vehicle.",
    category: "Car Ownership",
    type: "core",
    steps: [
      {
        id: "step-1",
        title: "Set a realistic budget",
        description:
          "Include: car price, insurance ($2000-$4000/year for new drivers), gas ($150-$300/month), maintenance ($1000/year), registration ($120/year). Total cost = purchase + $5000-$10,000/year to operate.",
      },
      {
        id: "step-2",
        title: "Decide: new, used, or lease?",
        description:
          "New: Expensive, warranty, reliable. Used (3-5 years old): Best value, check CarFax. Private sale: Cheaper than dealer but higher risk. Lease: Lowest monthly but no ownership.",
      },
      {
        id: "step-3",
        title: "Get pre-approved for financing",
        description:
          "Check loan rates at your bank before visiting dealers. Get quotes from multiple lenders. Aim for 20% down payment, 4-year loan max. Never agree to financing at dealer without comparing.",
      },
      {
        id: "step-4",
        title: "Inspect before you buy",
        description:
          "For used cars: Get pre-purchase inspection from mechanic ($100-$150). Check CarFax for accidents. Test drive in different conditions. Walk away if seller refuses inspection.",
      },
      {
        id: "step-5",
        title: "Complete ownership transfer",
        description:
          "At purchase: Get bill of sale, ownership (pink slip), safety certificate (if required), emissions test. Within 6 days: Register vehicle and get plates at ServiceOntario. Get insurance before driving.",
      },
    ],
  },
];