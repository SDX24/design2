# Adult App - Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Create GitHub repository:**
   ```bash
   # If you haven't already, create a new repo on GitHub, then:
   git remote add origin https://github.com/yourusername/adult-app.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js - keep all defaults
   - Click "Deploy"
   - Get your live URL: `https://adult-app-yourname.vercel.app`

### Option 2: Deploy from CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (run from project root)
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: adult-app
# - Directory: ./
# - Override settings? N
```

## Environment Check

Before deploying, ensure:
- ✅ All dependencies in package.json
- ✅ Build command: `next build`
- ✅ Output directory: `.next`
- ✅ No environment variables needed
- ✅ All pages load without errors locally

## Post-Deploy

After deployment:
1. Test all routes work on live URL
2. Test search functionality  
3. Test navigation between pages
4. Share URL in your assignment submission

## Troubleshooting

**Build fails?**
- Run `npm run build` locally first
- Check for TypeScript errors: `npm run lint`

**Pages not found?**
- Verify all files are committed to git
- Check Next.js App Router structure in `src/app/`

**Styling issues?**
- Tailwind should work automatically
- Check globals.css is imported in layout.tsx