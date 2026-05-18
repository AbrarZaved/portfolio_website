# Abrar Javed Sorafi - Portfolio

A modern, production-quality developer portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark-themed with neon accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Ready**: Comprehensive meta tags and Open Graph support
- **Interactive**: Smooth animations and hover effects throughout
- **Contact Form**: Working contact form with API integration
- **Resume Download**: Direct resume download functionality

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Typography**: Inter and Sora fonts
- **Icons**: Lucide React
- **Language**: TypeScript

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts      # Contact form API
│   │   ├── layout.tsx                # Root layout with SEO
│   │   ├── page.tsx                  # Home page
│   │   └── globals.css               # Global styles
│   └── components/
│       ├── Navbar.tsx                # Navigation component
│       ├── Hero.tsx                  # Hero section
│       ├── About.tsx                 # About section
│       ├── ExperienceTimeline.tsx    # Experience timeline
│       ├── ProjectsGrid.tsx          # Projects showcase
│       ├── SkillsGrid.tsx            # Skills section
│       ├── ContactForm.tsx           # Contact form
│       └── Footer.tsx                # Footer component
├── public/
│   ├── resume.pdf                    # Resume file
│   └── images/                       # Image assets
├── tailwind.config.ts                # Tailwind configuration
└── package.json                      # Dependencies
```

## 🎨 Design Features

- **Color Scheme**: Dark background with neon blue, purple, green, and pink accents
- **Typography**: Clean, modern fonts (Inter/Sora)
- **Animations**: Fade-ins, slide-ups, hover effects, and scroll-triggered animations
- **Interactive Elements**: Glowing buttons, animated cards, and smooth transitions
- **Responsive Grid**: Flexible layouts that adapt to screen size

## 🔧 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📮 Contact Form

The contact form includes:
- Form validation
- API endpoint at `/api/contact`
- Success/error states
- Responsive design

To integrate with email services, modify `src/app/api/contact/route.ts` to include your preferred email service (SendGrid, Nodemailer, etc.).

## 🎯 Sections Overview

1. **Hero**: Animated introduction with rotating taglines
2. **About**: Professional bio with contact information cards
3. **Experience**: Timeline of professional experience
4. **Projects**: Grid of featured projects with hover effects
5. **Skills**: Categorized technical skills with progress bars
6. **Contact**: Contact form and social links
7. **Footer**: Additional links and information

## 🚀 Deployment

This project is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- Railway
- AWS Amplify
- VPS Services

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Abrar Javed Sorafi using Next.js, Tailwind CSS, and Framer Motion.
