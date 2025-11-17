# Adult App — Hi-Fi Prototype

A Next.js + TypeScript + Tailwind hi-fi prototype for the "Adult" app, helping young adults navigate life skills through step-by-step guides and community support.

## 🚀 Live Demo

**Deployed on Vercel:** *(Deploy to get this URL)*

## ✨ Features

- **🏠 Home** - Prominent Starter Guide card + Local Guides + popular content
- **📋 Onboarding** - Country/age selection for personalized roadmaps  
- **📚 Guides** - Step-by-step adulting guides (Budgeting, Renting, Taxes)
- **🌍 Local Guides** - Region-specific content (Canada tax guides, etc.)
- **👥 Community** - Social feed with posts and discussions
- **🔍 Search** - Real-time search across guides and community posts
- **📖 History** - Recently viewed guides and posts with clear labeling
- **👤 Profile** - Account settings and preferences

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Roboto + Roboto Mono (Google Fonts)
- **Deployment:** Vercel-ready

## 🎨 Design System

- **Primary:** Deep Blue (#3A7BD5)  
- **Accent:** Coral (#FF6B6B)
- **Mobile-first** responsive design (max-width: 640px)
- **Clear navigation** with bottom nav bar

## 🏃‍♂️ Quick Start

```bash
# Clone the repo
git clone <your-repo-url>
cd adult-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deploy to Vercel

1. **Create GitHub repo** (if not done):
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - "Add New Project" → import your GitHub repo
   - Keep all defaults, click "Deploy"
   - Get your live URL: `https://adult-app-yourname.vercel.app`

## 📱 User Flows Implemented

- ✅ Onboarding → Home → Guides → Guide Detail
- ✅ Home → Local Guides (region-specific)
- ✅ Home → Community → Post Detail  
- ✅ Search guides and community posts
- ✅ History with clear Guide vs Post labels
- ✅ Profile/Account settings

## 📋 Assignment Coverage

This prototype addresses key feedback from user testing:
- **Starter Guide prominence** - Large hero card on home
- **Local Guides clarity** - Clearly labeled section
- **Search functionality** - Comprehensive search across content
- **History labeling** - Clear Guide vs Post distinction
- **Navigation clarity** - Obvious bottom nav with labels

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── community/       # Community feed & post detail
│   ├── guides/          # Guide list & individual guides
│   ├── search/          # Search functionality
│   └── ...
├── components/          # Reusable UI components
│   ├── AppShell.tsx     # Main layout wrapper
│   └── BottomNav.tsx    # Bottom navigation
├── data/                # Sample data
│   ├── guides.ts        # Step-by-step guides
│   └── posts.ts         # Community posts
└── lib/                 # Utilities
    └── cn.ts            # className helper
```

## 🎯 Next Steps (Optional)

- Add Starter Guide age segments (16, 18, 19+)
- Implement guide step completion checkboxes
- Add accessibility settings in Profile
- Connect to real backend/database
