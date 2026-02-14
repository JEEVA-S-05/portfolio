'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: '3D Portfolio Website',
    description:
      'A modern portfolio showcasing 3D graphics, animations, and cutting-edge web technologies.',
    image: '/projects/portfolio.jpg',
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'AI Chat Application',
    description:
      'Real-time chat application with AI-powered responses and sentiment analysis.',
    image: '/projects/chat.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'OpenAI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Task Management System',
    description:
      'Collaborative task manager with drag-and-drop, real-time updates, and team analytics.',
    image: '/projects/tasks.jpg',
    tags: ['React', 'Firebase', 'Material-UI', 'Redux'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media metrics with beautiful data visualizations.',
    image: '/projects/dashboard.jpg',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'GraphQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Weather Forecast App',
    description:
      '3D weather visualization with interactive maps and detailed forecasts.',
    image: '/projects/weather.jpg',
    tags: ['React', 'Three.js', 'Weather API', 'Mapbox'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    gradient: 'from-amber-500 to-orange-600',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative h-96 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 glass rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
          <div className="relative h-full flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold"
            >
              <FaGithub /> Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass border-2 border-indigo-400 rounded-lg font-semibold"
            >
              <FaExternalLinkAlt /> Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative
            implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
