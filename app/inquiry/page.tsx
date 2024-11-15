'use client';

import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

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

const popover = cva([
  'fixed top-40 left-1/2 transform -translate-x-1/2', // Changed to fixed positioning
  'bg-red-500 text-white px-6 py-3 rounded-lg',
  'text-sm font-medium',
  'shadow-lg',
  'z-[9999]', // Increased z-index to be above everything
  'animate-bounce',
  'whitespace-nowrap',
]);
  
  
  const successOverlay = cva([
    'fixed inset-0 bg-slate-900/80',
    'backdrop-blur-sm',
    'z-50',
    'flex items-center justify-center',
  ]);
  
  const successCard = cva([
    'bg-gradient-to-b from-white/10 to-white/5',
    'border border-white/10',
    'rounded-2xl p-8',
    'flex flex-col items-center',
    'backdrop-blur-md',
    'max-w-md mx-4',
  ]);
  
  const successIcon = cva([
    'w-16 h-16 rounded-full',
    'bg-gradient-to-r from-green-500 to-emerald-500',
    'flex items-center justify-center',
    'text-white text-3xl',
    'mb-4',
  ]);
  interface InquiryFormData {
    name: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    timeline: string;
    description: string;
  }
export default function InquiryPage() {
    const router = useRouter();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const [formData, setFormData] = useState<InquiryFormData>({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
  
      const validateForm = () => {
        if (!formData.name.trim()) {
          setErrorMessage('Please enter your name');
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setErrorMessage('Please enter a valid email');
          return false;
        }
        if (!formData.company.trim()) {
          setErrorMessage('Please enter your company name');
          return false;
        }
        if (!formData.projectType) {
          setErrorMessage('Please select a project type');
          return false;
        }
        if (!formData.budget) {
          setErrorMessage('Please select a budget range');
          return false;
        }
        if (!formData.timeline) {
          setErrorMessage('Please select a timeline');
          return false;
        }
        if (!formData.description.trim()) {
          setErrorMessage('Please describe your project');
          return false;
        }
        return true;
      };
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!validateForm()) {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        return;
      }
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        router.push('/');
      }, 2000);
    };
  
    const handleInputChange = (field: keyof InquiryFormData, value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };
  return (
    <section className={inquiryContainer()}>
       <AnimatePresence>
        {showError && (
          <motion.div 
            className={popover()}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
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
        <div className="relative w-full">


       

        <motion.form 
          className={formContainer()}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={formGroup()}>
              <label htmlFor="name" className={formLabel()}>Full Name</label>
              <input type="text" id="name" className={formInput()} placeholder="John Doe" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)}/>
            </div>
            
            <div className={formGroup()}>
              <label htmlFor="email" className={formLabel()}>Email Address</label>
              <input type="email" id="email" className={formInput()} placeholder="john@example.com" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)}/>
            </div>
          </div>

          <div className={formGroup()}>
            <label htmlFor="company" className={formLabel()}>Company Name</label>
            <input type="text" id="company" className={formInput()} placeholder="Your Company Ltd." value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)}/>
          </div>

          <div className={formGroup()}>
            <label htmlFor="projectType" className={formLabel()}>Project Type</label>
            <select id="projectType" className={formSelect()} value={formData.projectType} onChange={(e) => handleInputChange('projectType', e.target.value)}>
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
            <select id="budget" className={formSelect()} value={formData.budget} onChange={(e) => handleInputChange('budget', e.target.value)}>
              <option value="">Select a budget range</option>
              <option value="small">$5,000 - $10,000</option>
              <option value="medium">$10,000 - $25,000</option>
              <option value="large">$25,000 - $50,000</option>
              <option value="enterprise">$50,000+</option>
            </select>
          </div>

          <div className={formGroup()}>
            <label htmlFor="timeline" className={formLabel()}>Expected Timeline</label>
            <select id="timeline" className={formSelect()} value={formData.timeline} onChange={(e) => handleInputChange('timeline', e.target.value)}>
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
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className={submitButton()}>
            Submit Inquiry
          </button>
        </motion.form>
        </div>
      </div>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className={successOverlay()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={successCard()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <motion.div
                className={successIcon()}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 10 }}
              >
                <FiCheck />
              </motion.div>
              
              <motion.h3
                className="text-2xl font-bold text-white mb-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Inquiry Submitted Successfully!
              </motion.h3>
              
              <motion.p
                className="text-gray-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We'll review your project details and get back to you soon!
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 