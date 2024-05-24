'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const navbar = cva(
  [
    'bg-white',
    'dark:bg-gray-900',
    'shadow',
  ],
  {
    variants: {
      color: {
        light: ['bg-white', 'dark:bg-gray-900'],
        dark: ['bg-gray-800', 'dark:bg-black'],
      },
    },
    defaultVariants: {
      color: 'light',
    },
  }
);

export interface NavbarProps extends VariantProps<typeof navbar> {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={twMerge(navbar({ color }), className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-white">
              Pixellent Solutions
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link> */}
            <Link href="/#services" scroll={false} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={(e) => handleSmoothScroll(e, 'services')}>
              Services
            </Link>
            <Link href="/#portfolio" scroll={false} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={(e) => handleSmoothScroll(e, 'portfolio')}>
              Portfolio
            </Link>
            <Link href="/#contact" scroll={false} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={(e) => handleSmoothScroll(e, 'contact')}>
              Contact
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link> */}
            <Link href="/#services" scroll={false} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={(e) => handleSmoothScroll(e, 'services')}>
              Services
            </Link>
            <Link href="/#portfolio" scroll={false} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={(e) => handleSmoothScroll(e, 'portfolio')}>
              Portfolio
            </Link>
            <Link href="/#contact" scroll={false} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={(e) => handleSmoothScroll(e, 'contact')}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
