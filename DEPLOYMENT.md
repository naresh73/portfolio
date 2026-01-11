# 🚀 Free Deployment Guide - Vercel

This guide will help you deploy your portfolio website to Vercel for **FREE**!

## Why Vercel?

- ✅ **100% Free** for personal projects
- ✅ Made by Next.js creators (perfect compatibility)
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Global CDN for fast loading
- ✅ Custom domain support
- ✅ Environment variables management

## Step-by-Step Deployment

### Step 1: Push Your Code to GitHub

1. **Create a GitHub account** (if you don't have one): [github.com](https://github.com)

2. **Create a new repository**:

   - Go to GitHub and click "New repository"
   - Name it (e.g., `portfolio` or `my-portfolio`)
   - Make it **Public** (required for free Vercel)
   - Don't initialize with README (you already have one)

3. **Push your code to GitHub**:

   ```bash
   # Initialize git (if not already done)
   git init

   # Add all files
   git add .

   # Commit
   git commit -m "Initial commit - Portfolio website"

   # Add your GitHub repository (replace YOUR_USERNAME and REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up for Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub" (easiest option)

2. **Import your project**:

   - After signing in, click "Add New..." → "Project"
   - Find your repository and click "Import"
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**:

   - In the "Environment Variables" section, add:
     - `RESEND_API_KEY` = Your Resend API key (get from https://resend.com/api-keys)
     - `CONTACT_EMAIL` = Your email address (where you want to receive form submissions)
   - **Important:** Select all environments (Production, Preview, Development)
   - Click "Save" for each variable
   - Click "Deploy"

4. **Wait for deployment** (usually 1-2 minutes)

5. **Your site is live!** 🎉
   - Vercel will give you a URL like: `your-portfolio.vercel.app`
   - You can customize the domain name in settings

### Step 3: Get Your Resend API Key (if needed)

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Go to "API Keys" in the dashboard
4. Create a new API key
5. Copy it and add it to Vercel environment variables

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project → "Settings" → "Domains"
2. Add your custom domain (e.g., `yourname.com`)
3. Follow the DNS configuration instructions
4. Vercel will automatically set up SSL for you!

## Quick Deploy Commands

If you prefer using Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## Troubleshooting

### Build Errors

- Make sure all dependencies are in `package.json`
- Check that your code builds locally: `npm run build`

### Environment Variables Not Working

- Double-check variable names (case-sensitive)
- Redeploy after adding new variables
- Check Vercel logs for errors

### Contact Form Not Working

- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for email logs
- Make sure `CONTACT_EMAIL` is set

## Alternative Free Hosting Options

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

### Cloudflare Pages

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repository
3. Framework preset: Next.js
4. Add environment variables

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Discord: [vercel.com/discord](https://vercel.com/discord)
- GitHub Issues: Create an issue in your repo

---

**Congratulations! Your portfolio is now live! 🎉**
