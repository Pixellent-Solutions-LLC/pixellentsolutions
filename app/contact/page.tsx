'use client';

import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiArrowLeft, FiArrowRight, FiSend , FiCheck} from 'react-icons/fi';
import { sectionTitle } from 'components/Portfolio/Portfolio';
import { useRouter } from 'next/navigation';


const contactContainer = cva([
  'relative py-24 bg-slate-900',
  'overflow-hidden',
]);

const contactContent = cva([
  'max-w-7xl mx-auto px-4',
  'flex flex-col items-center',
]);

const contactGrid = cva([
  'grid grid-cols-1 lg:grid-cols-2',
  'gap-12 w-full max-w-6xl',
]);

const contactInfo = cva([
  'space-y-8',
]);

const contactInfoItem = cva([
  'flex items-start gap-4',
  'text-gray-400',
]);

const contactIcon = cva([
  'text-2xl text-purple-400',
  'mt-1',
]);

const contactForm = cva([
  'relative p-8 rounded-xl',
  'bg-gradient-to-b from-white/5 to-white/[0.02]',
  'border border-white/10',
  'backdrop-blur-sm',
]);



const formInput = cva([
  'w-full px-4 py-3 rounded-lg',
  'bg-slate-800/50',
  'border border-white/10',
  'text-white placeholder-gray-400',
  'focus:outline-none focus:border-purple-500',
  'transition duration-300',
]);


const submitButton = cva([
  'px-6 py-2 rounded-lg',
  'bg-gradient-to-r from-purple-500 to-pink-500',
  'text-white font-medium',
  'hover:from-purple-600 hover:to-pink-600',
  'transition duration-300',
  'flex items-center gap-2', // Add gap for icon
  'w-40', // Fixed width for both buttons
]);
const buttonContainer = cva([
  'flex justify-between mt-6',
  'gap-4', // Added gap between buttons
]);
const popover = cva([
  'absolute -top-16 left-1/2 transform -translate-x-1/2', // Moved up slightly
  'bg-red-500 text-white px-6 py-3 rounded-lg', // Made bigger and more solid
  'text-sm font-medium',
  'shadow-lg',
  'z-50', // Ensure it's above other elements
  'animate-bounce',
  'whitespace-nowrap', // Prevent text wrapping
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

interface ContactStep {
  id: number;
  title: string;
  subtitle: string;
}
const steps: ContactStep[] = [
  {
    id: 1,
    title: "Let's start with your name",
    subtitle: "How should we address you?"
  },
  {
    id: 2,
    title: "What's your email?",
    subtitle: "We'll keep in touch through here"
  },
  {
    id: 3,
    title: "What can we help you with?",
    subtitle: "Tell us about your project or inquiry"
  }
] as const;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== '';
      case 2:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 3:
        return formData.message.trim() !== '';
      default:
        return false;
    }
  };
  const handleNext = () => {
    if (!validateCurrentStep()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
      setShowError(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    return (
      formData.name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.message.trim() !== ''
    );
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if we're on the last step and if all fields are filled
    if (currentStep !== steps.length) {
      e.preventDefault();
      handleNext();
      return;
    }
  
    // Validate entire form before submission
    if (!validateForm()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    // Form is valid, proceed with submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };
  return (
    <section id="contact" className={contactContainer()}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      
      <div className={contactContent()}>
        <motion.h2 
          className={sectionTitle()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        
        <div className={contactGrid()}>
          {/* Contact Info Section */}
          <motion.div 
            className={contactInfo()}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={contactInfoItem()}>
              <FiMail className={contactIcon()} />
              <div>
                <h3 className="text-white font-medium mb-1">Email Us</h3>
                <p>info@pixellent-solutions.com</p>
              </div>
            </div>
            {/* ... keep other contact info items ... */}
          </motion.div>

          {/* Interactive Form Section */}
          <motion.form 
            className={contactForm()}
            onSubmit={handleSubmit}
          >
                <div className="relative">

              {showError && (
        <div className={popover()}>
          {currentStep === 1 && "Please enter your name"}
          {currentStep === 2 && "Please enter a valid email"}
          {currentStep === 3 && "Please enter your message"}
        </div>
      )}
            <div className="relative overflow-hidden h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200 , damping: 20}}
                  className="absolute w-full"
                >
                 
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {steps[currentStep - 1]?.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {steps[currentStep - 1]?.subtitle}
                  </p>

                  {currentStep === 1 && (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className={formInput()}
                      placeholder="Your name"
                      autoFocus
                    />
                  )}

                  {currentStep === 2 && (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className={formInput()}
                      placeholder="your@email.com"
                      autoFocus
                    />
                  )}

                  {currentStep === 3 && (
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateFormData('message', e.target.value)}
                      className={`${formInput()} h-32 resize-none`}
                      placeholder="How can we help you?"
                      autoFocus
                    />
                  )}
                </motion.div>
              </AnimatePresence>
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
                Message Sent Successfully!
              </motion.h3>
              
              <motion.p
                className="text-gray-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for reaching out. We'll get back to you soon!
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
            </div>
            </div>

            <div className={buttonContainer()}>
  {currentStep > 1 && (
    <button
      type="button"
      onClick={handlePrevious}
      className={submitButton()}
    >
      <FiArrowLeft />
      Previous
    </button>
  )}
  
  <button
    type={currentStep === steps.length ? "submit" : "button"}
    onClick={currentStep === steps.length ? undefined : handleNext}
    className={submitButton()}
  >
    {currentStep === steps.length ? (
      <>
        <span>Send</span>
        <FiSend />
      </>
    ) : (
      <>
        <span>Next</span>
        <FiArrowRight />
      </>
    )}
  </button>
</div>
            {/* Progress indicator */}
            <div className="flex justify-between mt-8">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`h-2 rounded-full flex-1 mx-1 ${
                    step.id <= currentStep ? 'bg-purple-500' : 'bg-gray-700'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}