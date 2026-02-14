'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2023 - Present',
    description:
      'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Startup XYZ',
    period: '2022 - 2023',
    description:
      'Developed responsive web applications with focus on performance and user experience. Implemented 3D visualizations using Three.js.',
    skills: ['React', 'Three.js', 'Tailwind CSS'],
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'University Name',
    period: '2019 - 2023',
    description:
      'Focused on software engineering, algorithms, and web development. Graduated with honors.',
    skills: ['Algorithms', 'Data Structures', 'Web Development'],
  },
  {
    type: 'work',
    title: 'Web Development Intern',
    company: 'Digital Agency',
    period: '2021 - 2022',
    description:
      'Assisted in building client websites and learned modern web development practices.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];

interface TimelineItemProps {
  item: typeof experiences[0];
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }
      }
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-12`}
    >
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-3">
            {isLeft && (
              <div
                className={`text-3xl ${item.type === 'work' ? 'text-indigo-400' : 'text-purple-400'}`}
              >
                {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
            )}
            <div className={isLeft ? '' : 'text-left'}>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-indigo-400 font-semibold">{item.company}</p>
            </div>
            {!isLeft && (
              <div
                className={`text-3xl ${item.type === 'work' ? 'text-indigo-400' : 'text-purple-400'}`}
              >
                {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400 mb-3">{item.period}</p>
          <p className="text-gray-300 mb-4">{item.description}</p>
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/10 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
          className={`w-4 h-4 rounded-full ${item.type === 'work' ? 'bg-indigo-500' : 'bg-purple-500'} shadow-lg`}
          style={{
            boxShadow: `0 0 20px ${item.type === 'work' ? '#6366f1' : '#8b5cf6'}`,
          }}
        />
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
            className={`w-0.5 flex-1 ${item.type === 'work' ? 'bg-indigo-500/30' : 'bg-purple-500/30'}`}
          />
        )}
      </div>

      <div className="flex-1" />
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
