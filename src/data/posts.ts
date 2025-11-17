export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tag: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "What should I check before signing my first lease?",
    excerpt: "Moving into my first place soon in BC. What should I look for?",
    content:
      "I'm 19 and looking at my first basement suite in Vancouver. What should I check before signing? The landlord seems nice but I have no idea what is normal.",
    tag: "Housing",
  },
  {
    id: "2",
    title: "How did you build your first budget as a student?",
    excerpt: "Trying to not blow all my money on food and Uber...",
    content:
      "I just started college and I keep overspending on eating out and random stuff. How did you set up your first budget in a way that you actually stuck to it?",
    tag: "Money",
  },
];