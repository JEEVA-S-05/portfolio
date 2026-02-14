# Portfolio Customization Guide

This guide will help you customize your portfolio website to make it your own.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Colors & Theme](#colors--theme)
3. [Skills & Tech Stack](#skills--tech-stack)
4. [Projects](#projects)
5. [Experience & Education](#experience--education)
6. [Contact Information](#contact-information)
7. [3D Elements](#3d-elements)
8. [SEO & Metadata](#seo--metadata)

---

## Personal Information

### Hero Section
**File:** `/components/Hero/Hero.tsx`

Find and replace the following text:
```tsx
// Line 36
<h1>Your Name</h1>

// Line 45
<h2>Full Stack Developer</h2>

// Line 52-55
<p>
  Crafting innovative web experiences with cutting-edge technologies
  and stunning 3D visualizations
</p>
```

### About Section
**File:** `/components/About/About.tsx`

Update your bio:
```tsx
// Lines 94-99
<p>
  I'm a passionate developer with expertise in modern web technologies.
  I love creating interactive, performant, and visually stunning applications.
</p>

// Lines 109-116
<p>
  As a computer science student with a passion for cutting-edge technologies...
</p>
```

---

## Colors & Theme

### Main Theme Colors
**File:** `/app/globals.css`

```css
:root {
  --primary: #6366f1;    /* Indigo - Main brand color */
  --secondary: #8b5cf6;  /* Purple - Secondary accent */
  --accent: #ec4899;     /* Pink - Accent highlights */
}
```

**Popular Color Schemes:**

**Blue Tech:**
```css
--primary: #0ea5e9;
--secondary: #06b6d4;
--accent: #3b82f6;
```

**Purple Dream:**
```css
--primary: #a855f7;
--secondary: #d946ef;
--accent: #f0abfc;
```

**Green Energy:**
```css
--primary: #10b981;
--secondary: #14b8a6;
--accent: #22c55e;
```

---

## Skills & Tech Stack

**File:** `/components/About/About.tsx`

### Adding a New Skill

```tsx
const skills = [
  { 
    name: 'React',           // Display name
    icon: FaReact,          // Icon from react-icons
    color: '#61DAFB',       // Icon color
    level: 90               // Skill level (0-100)
  },
  // Add your new skill here:
  { 
    name: 'Rust',
    icon: SiRust,           // Import from react-icons/si
    color: '#CE412B',
    level: 75
  },
];
```

### Importing New Icons
At the top of the file:
```tsx
import {
  FaReact,
  FaNodeJs,
  // Add your imports
} from 'react-icons/fa';

import {
  SiTypescript,
  SiRust,  // New import
  // Add more...
} from 'react-icons/si';
```

---

## Projects

**File:** `/components/Projects/Projects.tsx`

### Project Structure

```tsx
const projects = [
  {
    title: 'Project Name',
    description: 'Brief description of your project',
    image: '/projects/image.jpg',  // Add image to /public/projects/
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo.com',
    gradient: 'from-indigo-500 to-purple-600',  // Tailwind gradient
  },
  // Add more projects...
];
```

### Available Gradients
```
from-indigo-500 to-purple-600
from-purple-500 to-pink-600
from-pink-500 to-rose-600
from-cyan-500 to-blue-600
from-emerald-500 to-teal-600
from-amber-500 to-orange-600
```

---

## Experience & Education

**File:** `/components/Experience/Experience.tsx`

```tsx
const experiences = [
  {
    type: 'work',  // 'work' or 'education'
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'What you did in this role...',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // Add more experiences...
];
```

**Timeline will automatically:**
- Alternate left/right positioning
- Use different icons for work (💼) vs education (🎓)
- Animate on scroll

---

## Contact Information

**File:** `/components/Contact/Contact.tsx`

### Update Email
```tsx
// Line 81-82
<span>your.email@example.com</span>

// In form submission
mailto:your.email@example.com
```

### Update Social Links
```tsx
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/yourusername',
    color: '#333',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/yourprofile',
    color: '#0A66C2',
  },
  // Add Twitter, Instagram, etc.
];
```

### Enable Real Form Submission

Replace the demo form handler with your backend:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Your actual form submission logic
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    alert('Error sending message');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 3D Elements

### Adjust 3D Shapes
**File:** `/components/Hero/Hero.tsx`

```tsx
// Change positions [x, y, z]
<FloatingShape 
  position={[-2, 1, 0]}   // Left, Up, Depth
  color="#6366f1"         // Color
  speed={0.5}             // Rotation speed
/>

// Add more shapes
<FloatingShape position={[3, 0, -1]} color="#10b981" speed={0.8} />
```

### Modify Particle System
**File:** `/components/3D/ParticleBackground.tsx`

```tsx
// Line 13 - Number of particles
const positions = new Float32Array(5000 * 3);  // Change 5000

// Line 29 - Particle appearance
<PointMaterial
  color="#6366f1"    // Color
  size={0.02}        // Size
  opacity={0.6}      // Transparency
/>
```

### Camera Settings
```tsx
<Canvas camera={{ 
  position: [0, 0, 5],  // Camera position
  fov: 75               // Field of view
}}>
```

---

## SEO & Metadata

**File:** `/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full Stack Developer specializing in React, Node.js, and 3D web experiences",
  keywords: ["portfolio", "developer", "React", "Next.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Check out my portfolio...",
    type: "website",
    images: ['/og-image.jpg'],  // Add to /public/
  },
};
```

---

## Quick Tips

### Disable Animations for Testing
Add to any component:
```tsx
// Disable all animations temporarily
transition={{ duration: 0 }}
```

### Change Theme Toggle Default
**File:** `/components/Common/Navigation.tsx`
```tsx
const [isDark, setIsDark] = useState(true);  // false for light mode
```

### Adjust Mobile Breakpoints
In Tailwind classes:
- `md:` = 768px
- `lg:` = 1024px
- `xl:` = 1280px

Example:
```tsx
className="text-4xl md:text-6xl lg:text-8xl"
//         mobile   tablet     desktop
```

---

## Testing Your Changes

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Open:** http://localhost:3000

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## Need More Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Icons Gallery](https://react-icons.github.io/react-icons/)

---

**Happy Customizing! 🚀**
