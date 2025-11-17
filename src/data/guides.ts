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
    slug: "taxes-canada-basics",
    title: "Taxes in Canada: Basic Steps",
    summary: "A simple overview of filing your first tax return in Canada.",
    category: "Money",
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
];