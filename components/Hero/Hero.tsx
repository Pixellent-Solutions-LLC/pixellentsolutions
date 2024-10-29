'use client';

import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion'; // We'll add animations
import FancyButton from '../FancyButton/FancyButton';
import NetworkSphere from 'components/3DElement/NetworkSphere';

const heroContainer = cva([
  'relative min-h-screen flex items-center justify-center',
  'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
  'overflow-hidden',
]);

const heroContent = cva([
  'relative z-10 max-w-7xl mx-auto px-4',
  'flex flex-col lg:flex-row items-center justify-between',
  'gap-12 w-full'
]);

const heroText = cva([
  'flex-1 text-left',
  'animate-fade-in-up'
]);

const heroHeadline = cva([
  'text-5xl lg:text-7xl font-bold',
  'bg-clip-text text-transparent',
  'bg-gradient-to-r from-white via-purple-200 to-purple-400',
  'mb-6'
]);

const heroSubheadline = cva([
  'text-xl lg:text-2xl text-gray-300',
  'mb-8 max-w-2xl'
]);

const heroImageContainer = cva([
  'flex-1 relative',
  'w-full h-[600px]', // Fixed height instead of aspect-square
  'max-w-xl',
  'overflow-hidden', 
]);

const heroButtons = cva([
  'flex flex-wrap gap-4'
]);

// Add geometric shapes for background
const shapes = [
  'absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl',
  'absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl',
  'absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl',
];

export default function Hero() {
  return (
    <section className={heroContainer()}>
      {/* Background shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={shape}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      
      <div className={heroContent()}>
        <div className={heroText()}>
          <motion.h1 
            className={heroHeadline()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Digital Presence
          </motion.h1>
          <motion.p 
            className={heroSubheadline()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We craft cutting-edge solutions that elevate your business in the digital landscape. Experience innovation that drives results.
          </motion.p>
          <motion.div 
            className={heroButtons()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FancyButton text="Start Your Journey" colorVariant="primary" />
            <FancyButton text="View Our Work" colorVariant="secondary" />
          </motion.div>
        </div>

        <motion.div 
  className={heroImageContainer()}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  <NetworkSphere />
</motion.div>
      </div>
    </section>
  );
}