'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import FancyButton from 'components/FancyButton/FancyButton';

const navbar = cva([
  'fixed w-full z-50 transition-all duration-300',
], {
  variants: {
    scrolled: {
      true: ['bg-slate-900/95 backdrop-blur-sm shadow-lg'],
      false: ['bg-transparent'],
    }
  },
  defaultVariants: {
    scrolled: false,
  },
});

const navContent = cva([
  'w-full',
  'px-4',
  'flex items-center justify-between',
  'h-20',
]);


const navLogo = cva([
  'text-2xl',
  'hover:opacity-80 transition-opacity',
]);


const navLinks = cva([
  'fixed top-0 left-0 h-full', // Changed to full height from top
  'w-[400px]', // Wider menu
  'bg-slate-900/95 backdrop-blur-md', // Darker background with more blur
  'border-r border-white/10',
  'shadow-2xl',
  'z-[41]',
  'flex flex-col',
  'pt-20', // Add padding top to account for header
]);

const mobileMenuButton = cva([
  'absolute left-4', // Almost at the edge
  'flex items-center',
  'p-2 rounded-lg',
  'border border-white/10',
  'hover:bg-white/5',
  'transition-colors duration-300',
]);

const mobileLink = cva([
  'block px-8 py-4', // Increased padding
  'text-gray-300 hover:text-white',
  'hover:bg-white/5',
  'transition-colors duration-300',
  'text-lg', // Larger text
]);

const inquiryButton = cva([
  'px-6 py-2',
  'border border-white/10',
  'hover:bg-white/5',
  'transition-colors duration-300',
  'rounded-lg',
  'text-gray-300',
]);
// Add the animation variants
const variants = {
  open: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  closed: { 
    opacity: 0, 
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};


export interface NavbarProps extends VariantProps<typeof navbar> {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={twMerge(navbar({ scrolled }), className)}>
      <div className={navContent()}>
        {/* Left - Logo/Menu button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-gray-300" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link href="/" className={navLogo()}>
              <Image
              src="/assets/logo2.png"
              alt="Logo" 
              width={80}
              height={80}
            />
          </Link>
        </div>

        {/* Center - Title (hidden on mobile, visible on md and up) */}
        <div className="hidden md:block">
        <Link href="/" className={twMerge(navLogo(), "bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text")}>
        Pixellent Solutions
          </Link>
        </div>

        {/* Right - Inquiry Button */}
        <Link 
          href="/inquiry" 
        >
                   <FancyButton text="Start Your Project" colorVariant="primary" />

        </Link>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" // Darker overlay with blur
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className={navLinks()}
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
            >
              {/* Close button at the top */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-7 left-8 p-2"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6 text-gray-300" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col pt-12">
                <Link 
                  href="/#services" 
                  className={mobileLink()} 
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                >
                  Services
                </Link>
                <Link 
                  href="/portfolio" 
                  className={mobileLink()} 
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  href="/inquiry" 
                  className={mobileLink()} 
                  onClick={() => setIsOpen(false)}
                >
                  Inquiry
                </Link>
                <Link 
                  href="/contact" 
                  className={mobileLink()} 
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};