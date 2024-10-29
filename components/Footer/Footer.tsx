'use client';

import { cva } from 'class-variance-authority';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const footerContainer = cva([
  'relative bg-slate-900/95',
  'border-t border-white/10',
  'py-16',
]);

const footerWrapper = cva([
  'max-w-7xl mx-auto px-4',
  'flex flex-col gap-12',
]);

const footerGrid = cva([
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  'gap-8 lg:gap-12',
]);

const footerColumn = cva([
  'flex flex-col',
]);

const footerTitle = cva([
  'text-xl font-semibold mb-6',
  'bg-clip-text text-transparent',
  'bg-gradient-to-r from-purple-400 to-pink-400',
]);

const footerLink = cva([
  'text-gray-400 hover:text-white',
  'transition-colors duration-300',
  'py-2',
]);

const socialIcons = cva([
  'flex gap-6 mt-4',
]);

const socialIcon = cva([
  'text-gray-400 hover:text-purple-400',
  'transition-colors duration-300',
]);



export default function Footer() {
  return (
    <footer className={footerContainer()}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent -z-10" />
      
      <div className={footerWrapper()}>
        <motion.div 
          className={`${footerGrid()} relative z-10`} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={footerColumn()}>
            <h4 className={footerTitle()}>About Us</h4>
            <p className="text-gray-400 leading-relaxed">
              Pixellent Solutions LLC is dedicated to delivering innovative digital solutions that transform businesses and drive success.
            </p>
          </div>
          
          <div className={footerColumn()}>
            <h4 className={footerTitle()}>Quick Links</h4>
            <nav className="flex flex-col">
              <Link href="/" className={footerLink()}>Home</Link>
              <Link href="/services" className={footerLink()}>Services</Link>
              <Link href="/portfolio" className={footerLink()}>Portfolio</Link>
              <Link href="/inquiry" className={footerLink()}>Project Inquiry</Link>
              <Link href="/contact" className={footerLink()}>Contact</Link>
            </nav>
          </div>
          
          <div className={footerColumn()}>
            <h4 className={footerTitle()}>Services</h4>
            <nav className="flex flex-col">
              <Link href="/services#web" className={footerLink()}>Web Development</Link>
              <Link href="/services#mobile" className={footerLink()}>Mobile Apps</Link>
              <Link href="/services#design" className={footerLink()}>UI/UX Design</Link>
              <Link href="/services#consulting" className={footerLink()}>Consulting</Link>
              <Link href="/inquiry" className={footerLink()}>Request Quote</Link>
            </nav>
          </div>
          
          <div className={footerColumn()}>
            <h4 className={footerTitle()}>Connect</h4>
            <p className="text-gray-400 mb-4">Follow us on social media</p>
            <div className={socialIcons()}>
              <Link 
                href="https://www.facebook.com/profile.php?id=61562338671967" 
                target="_blank" 
                rel="noopener noreferrer"
                className={socialIcon()}
              >
                <FaFacebook size={24} />
              </Link>
              <Link 
                href="https://instagram.com/pixellentsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className={socialIcon()}
              >
                <FaInstagram size={24} />
              </Link>
              <Link 
                href="https://linkedin.com/company/pixellentsolutions-llc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={socialIcon()}
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}