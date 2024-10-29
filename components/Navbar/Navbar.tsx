'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

const navbar = cva([
  'fixed w-full z-50 transition-all duration-300',
], {
  variants: {
    scrolled: {
      true: ['bg-slate-900/95 backdrop-blur-sm shadow-lg'],
      false: ['bg-transparent'],
    },
  },
  defaultVariants: {
    scrolled: false,
  },
});

const navContent = cva([
  'max-w-7xl mx-auto px-4',
  'flex items-center justify-between',
  'h-20',
]);

const navLogo = cva([
  'text-2xl font-bold',
  'bg-clip-text text-transparent',
  'bg-gradient-to-r from-purple-400 to-pink-400',
  'hover:opacity-80 transition-opacity',
]);

const navLinks = cva([
  'hidden md:flex md:items-center md:space-x-8',
]);

const navLink = cva([
  'text-gray-300 hover:text-white',
  'transition-colors duration-300',
  'relative group',
]);

const navLinkUnderline = cva([
  'absolute -bottom-2 left-0 right-0 h-0.5',
  'bg-gradient-to-r from-purple-400 to-pink-400',
  'scale-x-0 group-hover:scale-x-100',
  'transition-transform duration-300',
]);

const mobileMenuButton = cva([
  '-mr-2 flex md:hidden',
  'p-2 rounded-lg',
  'border border-white/10',
  'hover:bg-white/5',
  'transition-colors duration-300',
]);

const mobileMenu = cva([
  'absolute top-full left-0 right-0',
  'bg-slate-900/95 backdrop-blur-sm',
  'border-t border-white/10',
  'shadow-lg',
]);

const mobileLink = cva([
  'block px-4 py-3',
  'text-gray-300 hover:text-white',
  'hover:bg-white/5',
  'transition-colors duration-300',
]);

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
        <Link href="/" className={navLogo()}>
          Pixellent Solutions
        </Link>

        <div className={navLinks()}>
          <Link 
            href="/#services" 
            className={navLink()} 
            onClick={(e) => handleSmoothScroll(e, 'services')}
          >
            Services
            <div className={navLinkUnderline()} />
          </Link>
          <Link 
            href="/portfolio" 
            className={navLink()} 
          >
            Portfolio
            <div className={navLinkUnderline()} />
          </Link>
          <Link 
            href="/inquiry" 
            className={navLink()} 
          >
            Inquiry
            <div className={navLinkUnderline()} />
          </Link>
          <Link 
            href="/contact" 
            className={navLink()} 
          >
            Contact
            <div className={navLinkUnderline()} />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={mobileMenuButton()}
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
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={mobileMenu()}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
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
            >
              Portfolio
            </Link>
            <Link 
              href="/inquiry" 
              className={mobileLink()} 
              onClick={(e) => handleSmoothScroll(e, 'inquiry')}
            >
              Inquiry
            </Link>
            
            <Link 
              href="/#contact" 
              className={mobileLink()} 
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};