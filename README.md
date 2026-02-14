# 🚀 Modern 3D Portfolio Website

A cutting-edge portfolio website featuring stunning 3D graphics, advanced animations, and modern web technologies. Built with Next.js, Three.js, and Framer Motion.

![Portfolio Preview](https://github.com/user-attachments/assets/d1d0a997-186e-4d3d-9856-c8b548b2f538)

> 📖 **New to this project?** Check out the [Quick Start Guide](QUICK_START.md) for a 5-minute setup!

## ✨ Features

### 3D Elements & Animations
- **3D Hero Section** with interactive floating geometric shapes
- **Particle Background** with animated particle systems
- **Mouse-responsive** camera movements and interactions
- **Smooth transitions** and page animations

### Advanced Animations
- **Framer Motion** powered UI animations
- **Scroll-triggered** reveal animations
- **Parallax effects** on multiple layers
- **Micro-interactions** on all interactive elements
- **3D card flip** animations for projects
- **Animated timeline** for experience section

### Portfolio Sections
- ✅ **Hero Section** - 3D animated background with call-to-action
- ✅ **About Section** - Animated skill cards with progress bars
- ✅ **Projects Section** - 3D card layouts with flip effects
- ✅ **Experience Section** - Interactive animated timeline
- ✅ **Contact Section** - Animated contact form with social links

### Modern Features
- 🌓 **Dark/Light Theme** toggle with smooth transitions
- 🎯 **Custom Cursor** with smooth following effect
- ⏳ **Loading Screen** with animated logo
- 📱 **Responsive Navigation** with animated mobile menu
- ⬆️ **Scroll-to-Top** button with animation
- 🎨 **Glass-morphism** UI effects
- 🌈 **Gradient Text** and animated backgrounds

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with TypeScript
- **3D Graphics:** [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **3D Utilities:** [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

### 1. Personal Information

#### Update Hero Section
Edit `/components/Hero/Hero.tsx`:
```typescript
<h1>Your Name</h1>
<h2>Full Stack Developer</h2>
<p>Your tagline here</p>
```

#### Update About Section
Edit `/components/About/About.tsx`:
- Modify the `skills` array to add/remove skills
- Update your bio text
- Adjust skill levels (0-100)

### 2. Projects

Edit `/components/Projects/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/your-repo',
    demo: 'https://your-demo.com',
    gradient: 'from-indigo-500 to-purple-600',
  },
  // Add more projects...
];
```

### 3. Experience & Education

Edit `/components/Experience/Experience.tsx`:
```typescript
const experiences = [
  {
    type: 'work', // or 'education'
    title: 'Job Title',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Your role description',
    skills: ['Skill 1', 'Skill 2'],
  },
  // Add more experiences...
];
```

### 4. Contact Information

Edit `/components/Contact/Contact.tsx`:
- Update social media links in the `socialLinks` array
- Change email address
- Customize form submission handling

### 5. Theme Colors

Edit `/app/globals.css`:
```css
:root {
  --primary: #6366f1;    /* Indigo */
  --secondary: #8b5cf6;  /* Purple */
  --accent: #ec4899;     /* Pink */
  /* Customize other colors */
}
```

### 6. Metadata & SEO

Edit `/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your custom description",
  keywords: ["your", "keywords"],
  // Add more metadata...
};
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Hero/
│   │   └── Hero.tsx        # Hero section with 3D elements
│   ├── About/
│   │   └── About.tsx       # About section with skills
│   ├── Projects/
│   │   └── Projects.tsx    # Projects with 3D cards
│   ├── Experience/
│   │   └── Experience.tsx  # Timeline component
│   ├── Contact/
│   │   └── Contact.tsx     # Contact form
│   ├── 3D/
│   │   ├── ParticleBackground.tsx
│   │   └── FloatingShape.tsx
│   └── Common/
│       ├── Navigation.tsx
│       ├── ScrollToTop.tsx
│       ├── LoadingScreen.tsx
│       └── CustomCursor.tsx
├── public/                 # Static assets
└── package.json
```

## 🎯 Performance Optimization

- ✅ Code splitting and lazy loading
- ✅ Optimized 3D models and textures
- ✅ Responsive images
- ✅ Smooth 60fps animations
- ✅ Progressive enhancement for lower-end devices

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1920px+)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/your-username/portfolio](https://github.com/your-username/portfolio)

---

Built with ❤️ using Next.js, Three.js, and Framer Motion
