'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import FancyButton from 'components/FancyButton/FancyButton';



const menuVariants = {
  open: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  closed: { 
    opacity: 0, 
    y: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

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
  'h-20 md:h-28',
]);


const navLogo = cva([
  'text-2xl',
  'hover:opacity-80 transition-opacity',
]);


const navLinks = cva([
  'fixed top-0 left-0 h-screen',
  'w-[400px]',
  'bg-slate-900/95 backdrop-blur-md',
  'border-r-2 border-white/25', 
  'border-t border-white/25', 
  'shadow-2xl',
  'z-[41]',
  'flex flex-col',
  'px-4',
  'overflow-y-auto',
]);


const mobileLink = cva([
  'block py-4', 
  'text-gray-300 hover:text-white',
  'hover:bg-white/5',
  'transition-colors duration-300',
  'text-lg', 
]);


// Add the animation variants
const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  
    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        <Link href="/" className={navLogo()}>
        <Image
  src="/assets/logo2.png"
  alt="Logo" 
  width={100}
  height={100}
/>
          </Link>
         
          
        </div>

        {/* Center - Title (hidden on mobile, visible on md and up) */}
        <div className="hidden md:block">
        <Link href="/" className={twMerge(navLogo(), "bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text")}>
        Pixellent Solutions
          </Link>
        </div>

       
        <Link 
          href="/inquiry" 
        >
                   <FancyButton text="Start Your Project" colorVariant="primary" />

        </Link>
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-7 left-[100px] p-2 z-[42]"
        aria-label="Toggle menu"
      >
        <motion.svg 
          className="h-6 w-6 text-gray-300"
          stroke="currentColor" 
          fill="none" 
          viewBox="0 0 24 24"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </motion.svg>
      </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" // Darker overlay with blur
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              variants={menuVariants}

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
              <div className="h-[79px] md:h-28 flex items-center justify-between">
                <Link href="/" className={navLogo()}>
                <Image
  src="/assets/logo2.png"
  alt="Logo" 
  width={100}
  height={100}
/>
                </Link>
               
              </div>

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