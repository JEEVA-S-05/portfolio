'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 90 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 85 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 88 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 80 },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 92 },
  { name: 'Python', icon: FaPython, color: '#3776AB', level: 75 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 82 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 78 },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098', level: 80 },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 75 },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 88 },
  { name: 'AWS', icon: FaAws, color: '#FF9900', level: 70 },
];

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -90 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateY: 0 }
          : { opacity: 0, y: 50, rotateY: -90 }
      }
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="glass p-6 rounded-xl text-center group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <skill.icon style={{ color: skill.color, margin: '0 auto' }} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
          className="h-2 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}AA)`,
          }}
        />
      </div>
      <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate developer with expertise in modern web technologies.
            I love creating interactive, performant, and visually stunning
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass p-8 rounded-2xl mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">
            My Journey
          </h3>
          <p className="text-gray-300 leading-relaxed">
            As a computer science student with a passion for cutting-edge
            technologies, I specialize in creating immersive web experiences. My
            expertise spans from 3D graphics with Three.js to performant React
            applications. I&apos;m constantly learning and exploring new technologies
            to push the boundaries of what&apos;s possible on the web.
          </p>
        </motion.div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            <span className="gradient-text">Tech Stack</span>
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
