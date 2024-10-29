'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import FancyButton from 'components/FancyButton/FancyButton';

const categories = [
  'All',
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'E-Commerce',
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced features',
    image: '/assets/project1.png',
    category: 'E-Commerce',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe'],
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly banking application',
    image: '/assets/project2.png',
    category: 'Mobile Apps',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Comprehensive analytics platform for healthcare providers',
    image: '/assets/project2.png',
    category: 'Web Development',
    technologies: ['React', 'D3.js', 'Firebase'],
    link: '#',
  },
  // Add more projects as needed
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <FancyButton 
                      text="View Project" 
                      colorVariant="secondary"
                      href={project.link}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}