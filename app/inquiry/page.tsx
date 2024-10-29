'use client';

import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';

const inquiryContainer = cva([
  'relative py-24 bg-slate-900',
  'overflow-hidden',
]);

const inquiryContent = cva([
  'max-w-3xl mx-auto px-4',
  'flex flex-col items-center',
]);

const formContainer = cva([
  'relative p-8 rounded-xl w-full',
  'bg-gradient-to-b from-white/5 to-white/[0.02]',
  'border border-white/10',
  'backdrop-blur-sm',
]);

const formGroup = cva([
  'mb-6',
]);

const formLabel = cva([
  'block text-sm font-medium text-gray-300 mb-2',
]);

const formInput = cva([
  'w-full px-4 py-3 rounded-lg',
  'bg-slate-800/50',
  'border border-white/10',
  'text-white placeholder-gray-400',
  'focus:outline-none focus:border-purple-500',
  'transition duration-300',
]);

const formSelect = cva([
  'w-full px-4 py-3 rounded-lg',
  'bg-slate-800/50',
  'border border-white/10',
  'text-white',
  'focus:outline-none focus:border-purple-500',
  'transition duration-300',
]);

const submitButton = cva([
  'w-full py-3 px-6 rounded-lg',
  'bg-gradient-to-r from-purple-500 to-pink-500',
  'text-white font-medium',
  'hover:from-purple-600 hover:to-pink-600',
  'transition duration-300',
  'transform hover:scale-[1.02]',
]);

export default function InquiryPage() {
  return (
    <section className={inquiryContainer()}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      
      <div className={inquiryContent()}>
        <motion.h2 
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Project Inquiry
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-400 text-center max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Tell us about your project and let's create something amazing together
        </motion.p>

        <motion.form 
          className={formContainer()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={formGroup()}>
              <label htmlFor="name" className={formLabel()}>Full Name</label>
              <input type="text" id="name" className={formInput()} placeholder="John Doe" />
            </div>
            
            <div className={formGroup()}>
              <label htmlFor="email" className={formLabel()}>Email Address</label>
              <input type="email" id="email" className={formInput()} placeholder="john@example.com" />
            </div>
          </div>

          <div className={formGroup()}>
            <label htmlFor="company" className={formLabel()}>Company Name</label>
            <input type="text" id="company" className={formInput()} placeholder="Your Company Ltd." />
          </div>

          <div className={formGroup()}>
            <label htmlFor="projectType" className={formLabel()}>Project Type</label>
            <select id="projectType" className={formSelect()}>
              <option value="">Select a project type</option>
              <option value="web">Web Application</option>
              <option value="mobile">Mobile Application</option>
              <option value="desktop">Desktop Application</option>
              <option value="ecommerce">E-Commerce Solution</option>
              <option value="design">UI/UX Design</option>
              <option value="consulting">Technical Consulting</option>
            </select>
          </div>

          <div className={formGroup()}>
            <label htmlFor="budget" className={formLabel()}>Budget Range</label>
            <select id="budget" className={formSelect()}>
              <option value="">Select a budget range</option>
              <option value="small">$5,000 - $10,000</option>
              <option value="medium">$10,000 - $25,000</option>
              <option value="large">$25,000 - $50,000</option>
              <option value="enterprise">$50,000+</option>
            </select>
          </div>

          <div className={formGroup()}>
            <label htmlFor="timeline" className={formLabel()}>Expected Timeline</label>
            <select id="timeline" className={formSelect()}>
              <option value="">Select a timeline</option>
              <option value="urgent">Less than 1 month</option>
              <option value="short">1-3 months</option>
              <option value="medium">3-6 months</option>
              <option value="long">6+ months</option>
            </select>
          </div>

          <div className={formGroup()}>
            <label htmlFor="description" className={formLabel()}>Project Description</label>
            <textarea 
              id="description" 
              className={`${formInput()} h-32 resize-none`}
              placeholder="Tell us about your project requirements, goals, and any specific features you need..."
            ></textarea>
          </div>

          <button type="submit" className={submitButton()}>
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
} 