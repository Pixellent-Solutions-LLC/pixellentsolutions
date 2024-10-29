'use client';

import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { sectionTitle, sectionSubtitle } from '../Portfolio/Portfolio';


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

const formTextarea = cva([
  'w-full px-4 py-3 rounded-lg',
  'bg-slate-800/50',
  'border border-white/10',
  'text-white placeholder-gray-400',
  'focus:outline-none focus:border-purple-500',
  'transition duration-300',
  'h-32 resize-none',
]);

const submitButton = cva([
  'w-full py-3 px-6 rounded-lg',
  'bg-gradient-to-r from-purple-500 to-pink-500',
  'text-white font-medium',
  'hover:from-purple-600 hover:to-pink-600',
  'transition duration-300',
  'transform hover:scale-[1.02]',
]);

export default function Contact() {
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
        
        <motion.p 
          className={sectionSubtitle()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Let's discuss how we can help transform your digital presence
        </motion.p>

        <motion.div 
          className={contactGrid()}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className={contactInfo()}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className={contactInfoItem()}>
              <FiMail className={contactIcon()} />
              <div>
                <h3 className="text-white font-medium mb-1">Email Us</h3>
                <p>info@pixellentsolutions.com</p>
              </div>
            </div>
            <div className={contactInfoItem()}>
              <FiPhone className={contactIcon()} />
              <div>
                <h3 className="text-white font-medium mb-1">Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className={contactInfoItem()}>
              <FiMapPin className={contactIcon()} />
              <div>
                <h3 className="text-white font-medium mb-1">Visit Us</h3>
                <p>123 Innovation Drive<br />Tech City, TC 12345</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className={contactForm()}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className={formGroup()}>
              <label htmlFor="name" className={formLabel()}>Name</label>
              <input type="text" id="name" className={formInput()} placeholder="Your name" />
            </div>
            <div className={formGroup()}>
              <label htmlFor="email" className={formLabel()}>Email</label>
              <input type="email" id="email" className={formInput()} placeholder="your@email.com" />
            </div>
            <div className={formGroup()}>
              <label htmlFor="message" className={formLabel()}>Message</label>
              <textarea id="message" className={formTextarea()} placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className={submitButton()}>
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}