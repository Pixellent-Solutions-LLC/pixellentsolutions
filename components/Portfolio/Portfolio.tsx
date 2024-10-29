'use client';

import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FancyButton from '../FancyButton/FancyButton';


export const sectionTitle = cva([
  'text-4xl lg:text-5xl font-bold text-center',
  'bg-clip-text text-transparent',
  'bg-gradient-to-r from-purple-400 to-pink-400',
  'mb-4',
]);

export const sectionSubtitle = cva([
  'text-xl text-gray-400 text-center',
  'max-w-2xl mb-16',
  'mx-auto',
]);

const portfolioContainer = cva([
  'relative py-24 bg-slate-900',
]);

const portfolioContent = cva([
  'max-w-7xl mx-auto px-4',
]);

const portfolioGrid = cva([
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  'gap-8 mt-16',
]);

const projectCard = cva([
  'group relative rounded-xl overflow-hidden',
  'aspect-[4/3]',
]);

const projectImage = cva([
  'w-full h-full object-cover',
  'transition-transform duration-500',
  'group-hover:scale-110',
]);

const projectOverlay = cva([
  'absolute inset-0',
  'bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent',
  'opacity-0 group-hover:opacity-100',
  'transition-opacity duration-300',
  'flex flex-col justify-end p-6',
]);

const projectTitle = cva([
  'text-xl font-semibold text-white mb-2',
]);

const projectDescription = cva([
  'text-gray-300 mb-4',
]);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced features',
    image: '/assets/project1.png',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly banking application',
    image: '/assets/project1.png',
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Comprehensive analytics platform for healthcare providers',
    image: '/assets/project2.png',
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <section className={portfolioContainer()}>
      <div className={portfolioContent()}>
        <motion.h2 
          className={sectionTitle()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Work
        </motion.h2>
        
        <motion.p 
          className={sectionSubtitle()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Explore our latest projects and success stories
        </motion.p>

        <motion.div 
          className={portfolioGrid()}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={projectCard()}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={projectImage()}
              />
              <div className={projectOverlay()}>
                <h3 className={projectTitle()}>{project.title}</h3>
                <p className={projectDescription()}>{project.description}</p>
                <FancyButton text="View Project" colorVariant="secondary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}