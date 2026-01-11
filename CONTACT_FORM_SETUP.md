# 📧 Contact Form Setup Guide

This guide will help you set up the contact form for both **local development** and **production (Vercel)**.

## 🔑 Required Environment Variables

You need **2 environment variables** for the contact form to work:

1. **`RESEND_API_KEY`** - Your Resend API key for sending emails
2. **`CONTACT_EMAIL`** - Your email address where you want to receive contact form submissions

---

## 🏠 Local Development Setup

### Step 1: Get Your Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a **free account** (100 emails/day free)
3. Once logged in, go to **"API Keys"** in the dashboard
4. Click **"Create API Key"**
5. Give it a name (e.g., "Portfolio Local Dev")
6. Copy the API key (it starts with `re_`)

### Step 2: Create `.env.local` File

1. In your project root directory, create a file named `.env.local`
2. Add the following content:

```env
# Resend API Key (Get from https://resend.com/api-keys)
RESEND_API_KEY=re_your_actual_api_key_here

# Your email address where you want to receive contact form submissions
CONTACT_EMAIL=nareshsharma0318@gmail.com

# Optional: Site URL (for local development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. **Replace the values:**
   - Replace `re_your_actual_api_key_here` with your actual Resend API key
   - Replace `nareshsharma0318@gmail.com` with your email address

### Step 3: Restart Your Development Server

1. **Stop** your current dev server (Ctrl+C)
2. **Start** it again:
   ```bash
   npm run dev
   ```

3. The contact form should now work! ✅

### Step 4: Test the Contact Form

1. Go to `http://localhost:3000`
2. Scroll to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the submission

---

## 🚀 Production Setup (Vercel)

### Step 1: Get Your Resend API Key (if not done already)

1. Go to [resend.com](https://resend.com)
2. Sign in to your account
3. Go to **"API Keys"** in the dashboard
4. Create a new API key for production (or use the same one)
5. Copy the API key

### Step 2: Add Environment Variables in Vercel

1. Go to your Vercel dashboard: [vercel.com](https://vercel.com)
2. Select your **portfolio project**
3. Go to **"Settings"** → **"Environment Variables"**
4. Add the following variables:

   **Variable 1:**
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_your_actual_api_key_here` (paste your Resend API key)
   - **Environment:** Select all (Production, Preview, Development)

   **Variable 2:**
   - **Name:** `CONTACT_EMAIL`
   - **Value:** `nareshsharma0318@gmail.com` (your email address)
   - **Environment:** Select all (Production, Preview, Development)

5. Click **"Save"** after adding each variable

### Step 3: Redeploy Your Application

1. After adding environment variables, Vercel will prompt you to redeploy
2. Or go to **"Deployments"** tab
3. Click the **"..."** menu on your latest deployment
4. Select **"Redeploy"**
5. Wait for deployment to complete (1-2 minutes)

### Step 4: Test the Production Contact Form

1. Visit your live site (e.g., `your-portfolio.vercel.app`)
2. Scroll to the Contact section
3. Fill out and submit the form
4. Check your email inbox for the submission

---

## 🔒 Security Notes

### ⚠️ Important:

1. **Never commit `.env.local` to Git**
   - It's already in `.gitignore` ✅
   - Never share your API keys publicly

2. **Use different API keys for development and production** (optional but recommended)

3. **Resend Free Tier:**
   - 100 emails per day
   - 3,000 emails per month
   - Perfect for portfolio sites!

---

## 🐛 Troubleshooting

### Error: "Email service is not configured"

**Cause:** `RESEND_API_KEY` is missing or incorrect

**Solution:**
1. Check that `.env.local` exists in your project root
2. Verify the API key is correct (starts with `re_`)
3. Restart your dev server after adding/changing `.env.local`
4. For production, verify the variable is set in Vercel

### Error: "Failed to send email"

**Possible causes:**
1. Invalid API key
2. Email address not verified in Resend
3. Rate limit exceeded (check Resend dashboard)

**Solution:**
1. Verify your API key in Resend dashboard
2. Check Resend dashboard for error logs
3. Ensure your email domain is verified (if using custom domain)

### Form submits but no email received

**Check:**
1. Check your spam/junk folder
2. Verify `CONTACT_EMAIL` is correct
3. Check Resend dashboard → "Emails" for delivery status
4. Verify your email address in Resend account

---

## 📝 Quick Checklist

### Local Development:
- [ ] Created `.env.local` file
- [ ] Added `RESEND_API_KEY` with your actual key
- [ ] Added `CONTACT_EMAIL` with your email
- [ ] Restarted dev server
- [ ] Tested form submission

### Production (Vercel):
- [ ] Added `RESEND_API_KEY` in Vercel environment variables
- [ ] Added `CONTACT_EMAIL` in Vercel environment variables
- [ ] Selected all environments (Production, Preview, Development)
- [ ] Redeployed application
- [ ] Tested form on live site

---

## 🎯 Next Steps

Once your contact form is working:

1. **Customize the "from" email** (optional):
   - In `src/app/api/contact/route.ts`, line 54
   - Change `"Portfolio Contact <onboarding@resend.dev>"`
   - To your verified domain: `"Portfolio Contact <noreply@yourdomain.com>"`

2. **Verify your domain in Resend** (for custom domain):
   - Go to Resend dashboard → "Domains"
   - Add and verify your domain
   - Update the "from" email in the API route

3. **Set up email notifications** (optional):
   - Configure email templates
   - Add auto-reply to form submissions

---

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

**Need help?** Check the Resend dashboard for detailed error logs and delivery status.

