# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcase your skills, projects, and connect with potential clients through a beautiful contact form.

## 🚀 Features

- **Modern Design**: Clean, professional, and responsive design
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Functional contact form with email integration using Resend
- **SEO Optimized**: Built-in SEO optimization for better visibility
- **Fast Performance**: Optimized for speed and performance
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: Resend

## 📦 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd n-projects/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Resend API key and contact email:
     ```
     RESEND_API_KEY=re_your_api_key_here
     CONTACT_EMAIL=your-email@example.com
     NEXT_PUBLIC_SITE_URL=http://localhost:3000
     ```

4. **Get Resend API Key**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key from the dashboard
   - Add it to your `.env.local` file

## 🚀 Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`)
   - Update your name
   - Modify the description

2. **About Section** (`src/components/About.tsx`)
   - Update your bio
   - Modify statistics

3. **Skills Section** (`src/components/Skills.tsx`)
   - Update skill categories
   - Adjust skill levels
   - Add/remove skills

4. **Projects Section** (`src/components/Projects.tsx`)
   - Add your projects
   - Update project details
   - Add GitHub and demo links

5. **Contact Section** (`src/components/ContactForm.tsx`)
   - Update contact information
   - Modify email, phone, and location

6. **Metadata** (`src/app/layout.tsx`)
   - Update SEO metadata
   - Modify page title and description

## 🚢 Deployment

### Quick Deploy to Vercel (FREE & Recommended)

**📖 See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed step-by-step instructions!**

**Quick Steps:**
1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com) (free)
3. Import your GitHub repository
4. Add environment variables:
   - `RESEND_API_KEY` - Your Resend API key
   - `CONTACT_EMAIL` - Your email address
5. Click Deploy! 🚀

Your site will be live in ~2 minutes with a free `.vercel.app` domain!

### Alternative Free Hosting Options

- **Netlify**: Similar process, supports Next.js
- **Cloudflare Pages**: Fast CDN, free tier available
- **GitHub Pages**: For static exports (requires additional config)

## 📧 Email Configuration

The contact form uses Resend for sending emails. Make sure to:

1. Sign up for a Resend account
2. Get your API key
3. Add it to `.env.local`
4. (Optional) Verify your domain for better deliverability

## 🎨 Customization Tips

- **Colors**: Modify the primary color in `tailwind.config.js`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Sections**: Add or remove sections in `src/app/page.tsx`
- **Animations**: Adjust animation settings in components

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

If you have any questions or need help, feel free to reach out!

---

Built with ❤️ using Next.js and Tailwind CSS

