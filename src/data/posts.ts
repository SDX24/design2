export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tag: string;
  author: {
    username: string;
    avatar: string;
  };
  timestamp: string;
  replyCount: number;
  helpfulCount: number;
  replies?: Reply[];
}

export interface Reply {
  id: string;
  postId: string;
  author: {
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  helpfulCount: number;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "What should I check before signing my first lease?",
    excerpt: "Moving into my first place soon in BC. What should I look for?",
    content:
      "I'm 19 and looking at my first basement suite in Vancouver. What should I check before signing? The landlord seems nice but I have no idea what is normal.",
    tag: "Housing",
    author: { username: "movingout_sarah", avatar: "🏠" },
    timestamp: "2025-11-15T14:30:00Z",
    replyCount: 4,
    helpfulCount: 12,
    replies: [
      {
        id: "r1",
        postId: "1",
        author: { username: "rentalexpert_mike", avatar: "🔑" },
        content: "Take photos of EVERYTHING before you move in. Every scratch, stain, damaged outlet. Send them to your landlord via email. This saved me from losing my deposit.",
        timestamp: "2025-11-15T15:00:00Z",
        helpfulCount: 8,
      },
      {
        id: "r2",
        postId: "1",
        author: { username: "student_life_amy", avatar: "📚" },
        content: "Read the lease carefully! Check if utilities are included, what the pet policy is, and how much notice you need to give before moving out.",
        timestamp: "2025-11-15T16:20:00Z",
        helpfulCount: 5,
      },
    ],
  },
  {
    id: "2",
    title: "How did you build your first budget as a student?",
    excerpt: "Trying to not blow all my money on food and Uber...",
    content:
      "I just started college and I keep overspending on eating out and random stuff. How did you set up your first budget in a way that you actually stuck to it?",
    tag: "Money",
    author: { username: "broke_college_kid", avatar: "💸" },
    timestamp: "2025-11-14T10:15:00Z",
    replyCount: 3,
    helpfulCount: 18,
    replies: [
      {
        id: "r3",
        postId: "2",
        author: { username: "budgetpro_alex", avatar: "💰" },
        content: "I use the 50/30/20 rule. 50% on needs (rent, groceries), 30% on wants (eating out, fun), 20% to savings. I also automated my savings so it happens before I can spend it.",
        timestamp: "2025-11-14T11:00:00Z",
        helpfulCount: 12,
      },
    ],
  },
  {
    id: "3",
    title: "Just got my first 'real' job! What should I know?",
    excerpt: "Starting next week and I'm nervous about everything...",
    content:
      "I'm 22 and starting my first full-time job after graduation. What should I know about things like benefits, taxes, workplace culture? Any tips for not messing up?",
    tag: "Career",
    author: { username: "newgrad_jay", avatar: "💼" },
    timestamp: "2025-11-13T09:00:00Z",
    replyCount: 5,
    helpfulCount: 15,
  },
  {
    id: "4",
    title: "How do you deal with a messy roommate?",
    excerpt: "I'm going crazy with the dishes piling up...",
    content:
      "My roommate never does dishes and leaves stuff everywhere. I've mentioned it a few times but nothing changes. How do I bring this up without starting a huge fight?",
    tag: "Housing",
    author: { username: "stressed_roomie", avatar: "🧹" },
    timestamp: "2025-11-12T18:45:00Z",
    replyCount: 6,
    helpfulCount: 9,
  },
  {
    id: "5",
    title: "Best apps for tracking expenses?",
    excerpt: "Need something simple that actually works",
    content:
      "I've tried a few budgeting apps but they're either too complicated or I forget to use them. What apps do you use to track spending that are actually easy to stick with?",
    tag: "Money",
    author: { username: "techsavvy_lea", avatar: "📱" },
    timestamp: "2025-11-11T12:30:00Z",
    replyCount: 8,
    helpfulCount: 22,
  },
  {
    id: "6",
    title: "Filing taxes for the first time - totally lost",
    excerpt: "Is it as scary as it seems?",
    content:
      "I worked part-time all year and just got my T4. I have no idea what to do with it. Do I really need to pay someone to do my taxes or can I figure it out myself?",
    tag: "Money",
    author: { username: "confused_taxpayer", avatar: "🧾" },
    timestamp: "2025-11-10T14:00:00Z",
    replyCount: 4,
    helpfulCount: 11,
  },
  {
    id: "7",
    title: "Moved out 3 months ago - here's what I learned",
    excerpt: "Things I wish someone had told me before",
    content:
      "Just wanted to share some lessons from my first 3 months living alone. 1) Groceries are WAY more expensive than I thought. 2) Learn to cook like 5 basic meals. 3) Clean as you go or it piles up fast. 4) Talk to your neighbors - they can help in emergencies. Hope this helps someone!",
    tag: "Housing",
    author: { username: "independent_marco", avatar: "🎉" },
    timestamp: "2025-11-09T16:20:00Z",
    replyCount: 12,
    helpfulCount: 45,
  },
  {
    id: "8",
    title: "Should I get a credit card as a student?",
    excerpt: "Worried about getting into debt...",
    content:
      "I'm 20 and everyone says I should start building credit, but I'm scared of credit card debt. Is it worth getting one if I'm careful? What's a good starter card?",
    tag: "Money",
    author: { username: "cautious_kim", avatar: "💳" },
    timestamp: "2025-11-08T11:00:00Z",
    replyCount: 7,
    helpfulCount: 19,
  },
  {
    id: "9",
    title: "Job interview tips for introverts?",
    excerpt: "I get so nervous talking about myself",
    content:
      "I have a job interview next week and I'm already anxious. I'm naturally quiet and I struggle with 'selling myself'. Any advice for introverts on how to come across confident in interviews?",
    tag: "Career",
    author: { username: "quietbutcapable", avatar: "🤫" },
    timestamp: "2025-11-07T10:30:00Z",
    replyCount: 5,
    helpfulCount: 14,
  },
  {
    id: "10",
    title: "Landlord won't fix the heat - what can I do?",
    excerpt: "It's been 2 weeks and they keep ignoring me",
    content:
      "The heat in my apartment hasn't worked for 2 weeks. I've emailed and called my landlord multiple times and they keep saying they'll 'get to it'. It's getting really cold. What are my rights here?",
    tag: "Housing",
    author: { username: "freezing_tenant", avatar: "🥶" },
    timestamp: "2025-11-06T20:00:00Z",
    replyCount: 8,
    helpfulCount: 16,
  },
  {
    id: "11",
    title: "Making friends after moving to a new city",
    excerpt: "How do adults even make friends?",
    content:
      "I moved to Toronto for school and don't know anyone here. I'm not great at just walking up to people. How did you make friends as an adult in a new place?",
    tag: "Life",
    author: { username: "lonely_in_to", avatar: "👋" },
    timestamp: "2025-11-05T13:00:00Z",
    replyCount: 10,
    helpfulCount: 28,
  },
  {
    id: "12",
    title: "How much should I have in my emergency fund?",
    excerpt: "Everyone says different amounts...",
    content:
      "Some people say $500, others say 6 months of expenses. I'm 23, working full-time, and living paycheck to paycheck right now. What's a realistic emergency fund goal to start with?",
    tag: "Money",
    author: { username: "savingslowly", avatar: "🏦" },
    timestamp: "2025-11-04T09:15:00Z",
    replyCount: 6,
    helpfulCount: 21,
  },
  {
    id: "13",
    title: "Meal prep for beginners?",
    excerpt: "Trying to stop eating out every day",
    content:
      "I spend so much money on takeout because I don't know what to cook. What are some easy meal prep recipes that last a few days? I'm a total cooking beginner.",
    tag: "Life",
    author: { username: "learning_to_cook", avatar: "🍳" },
    timestamp: "2025-11-03T17:30:00Z",
    replyCount: 9,
    helpfulCount: 32,
  },
  {
    id: "14",
    title: "Negotiating salary - is it actually expected?",
    excerpt: "Got a job offer but not sure if I should ask for more",
    content:
      "I got my first real job offer! The salary is okay but I've heard you're supposed to negotiate. Is this actually expected for entry-level jobs? I don't want to seem ungrateful or lose the offer.",
    tag: "Career",
    author: { username: "newtoworking", avatar: "📊" },
    timestamp: "2025-11-02T14:45:00Z",
    replyCount: 7,
    helpfulCount: 25,
  },
  {
    id: "15",
    title: "Anyone else feel overwhelmed by 'adulting'?",
    excerpt: "Sometimes I just want to be 12 again",
    content:
      "Is it normal to feel like you have no idea what you're doing? I'm 24, have a job and an apartment, but I constantly feel like I'm faking it and everyone else has it together. Please tell me I'm not alone.",
    tag: "Life",
    author: { username: "faking_it_daily", avatar: "😅" },
    timestamp: "2025-11-01T19:00:00Z",
    replyCount: 15,
    helpfulCount: 67,
  },
];