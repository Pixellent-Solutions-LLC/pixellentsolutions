'use client';

import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiTrendingUp } from 'react-icons/fi';

const servicesContainer = cva([
  'relative py-24 bg-slate-900',
  'overflow-hidden',
]);

const servicesContent = cva([
  'max-w-7xl mx-auto px-4',
  'flex flex-col items-center',
]);

const sectionTitle = cva([
  'text-4xl lg:text-5xl font-bold text-center',
  'bg-clip-text text-transparent',
  'bg-gradient-to-r from-purple-400 to-pink-400',
  'mb-4',
]);

const sectionSubtitle = cva([
  'text-xl text-gray-400 text-center',
  'max-w-2xl mb-16',
]);

const servicesGrid = cva([
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  'gap-8 w-full',
]);

const serviceCard = cva([
  'relative p-6 rounded-xl',
  'bg-gradient-to-b from-white/5 to-white/[0.02]',
  'border border-white/10',
  'backdrop-blur-sm',
  'group hover:border-purple-500/50',
  'transition-all duration-300',
]);

const serviceIcon = cva([
  'text-4xl mb-4',
  'text-purple-400',
  'group-hover:text-purple-300',
  'transition-colors duration-300',
]);

const serviceTitle = cva([
  'text-xl font-semibold mb-3',
  'text-white',
]);

const serviceDescription = cva([
  'text-gray-400',
  'group-hover:text-gray-300',
  'transition-colors duration-300',
]);

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love.',
  },
  {
    icon: FiTrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven strategies to grow your online presence.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section className={servicesContainer()}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      
      <div className={servicesContent()}>
        <motion.h2 
          className={sectionTitle()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        
        <motion.p 
          className={sectionSubtitle()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We offer comprehensive digital solutions to help your business thrive in the modern world.
        </motion.p>

        <motion.div 
          className={servicesGrid()}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={serviceCard()}
              variants={itemVariants}
            >
              <service.icon className={serviceIcon()} />
              <h3 className={serviceTitle()}>{service.title}</h3>
              <p className={serviceDescription()}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}