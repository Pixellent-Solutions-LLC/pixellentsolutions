'use client';

import { cva } from 'class-variance-authority';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const footerContainer = cva(
  'bg-gray-800 text-white py-8'
);

const footerWrapper = cva(
  'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
);

const footerGrid = cva(
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
);

const footerColumn = cva(
  'flex flex-col items-center md:items-start'
);

const footerTitle = cva(
  'text-lg font-semibold mb-4'
);

const footerLink = cva(
  'mb-2 text-gray-400 hover:text-white'
);

const socialIcons = cva(
  'flex space-x-4 mt-4'
);

export default function Footer() {
  return (
    <footer className={footerContainer()}>
      <div className={footerWrapper()}>
        <div className={footerGrid()}>
          <div className={footerColumn()}>
            <h4 className={footerTitle()}>About Us</h4>
            <p className="text-gray-400 text-center md:text-left">Pixellent Solutions LLC is dedicated to providing top-notch web and mobile solutions to our clients.</p>
          </div>
          <div className={footerColumn()}>
            <h4 className={footerTitle()}>Quick Links</h4>
            <a href="/" className={footerLink()}>Home</a>
            <a href="/services" className={footerLink()}>Services</a>
            <a href="/portfolio" className={footerLink()}>Portfolio</a>
            <a href="/contact" className={footerLink()}>Contact</a>
          </div>
          <div className={footerColumn()}>
            <h4 className={footerTitle()}>Follow Us</h4>
            <div className={socialIcons()}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 Pixellent Solutions LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
