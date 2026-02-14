# Quick Start Guide

Welcome to your new 3D Portfolio! Here's how to get started in 5 minutes.

## ⚡ Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### 3. Make It Yours - Essential Changes

#### Update Your Name (2 files)
**File: `components/Hero/Hero.tsx`**
```tsx
Line 36: <h1>Your Name</h1>          → <h1>John Doe</h1>
Line 45: <h2>Full Stack Developer</h2> → <h2>Your Title</h2>
```

**File: `app/layout.tsx`**
```tsx
Line 6: title: "Modern 3D Portfolio | Your Name"
    → title: "Modern 3D Portfolio | John Doe"
```

#### Update Social Links (1 file)
**File: `components/Hero/Hero.tsx` & `components/Contact/Contact.tsx`**
```tsx
href="https://github.com"          → href="https://github.com/yourusername"
href="https://linkedin.com"        → href="https://linkedin.com/in/yourprofile"
mailto:your.email@example.com      → mailto:john.doe@example.com
```

### 4. Build for Production
```bash
npm run build
npm start
```

## 🎨 Customize Colors (Optional)

**File: `app/globals.css`** (Lines 4-6)
```css
--primary: #6366f1;    /* Change this */
--secondary: #8b5cf6;  /* And this */
--accent: #ec4899;     /* And this */
```

## 📝 Add Your Projects

**File: `components/Projects/Projects.tsx`** (Line 13+)
```tsx
{
  title: 'Your Project Name',
  description: 'Brief description',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/you/repo',
  demo: 'https://your-demo.com',
  gradient: 'from-indigo-500 to-purple-600',
},
```

## 🚀 Deploy

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

### Netlify
1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Done!

## 📚 Need More Help?

- **Full Customization Guide:** See `CUSTOMIZATION.md`
- **Project README:** See `README.md`
- **Issues?** Check the console for errors

## ✅ Checklist

Before going live:
- [ ] Update your name in Hero and Layout
- [ ] Update all social media links
- [ ] Update email addresses
- [ ] Add your own projects
- [ ] Update About section bio
- [ ] Update Experience/Education timeline
- [ ] Test on mobile device
- [ ] Run `npm run build` to verify
- [ ] Deploy!

---

**That's it! You're ready to impress with your 3D portfolio! 🎉**

For detailed customization, see `CUSTOMIZATION.md`.
