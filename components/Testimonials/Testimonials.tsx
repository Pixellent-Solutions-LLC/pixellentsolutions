'use client';

import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonialsContainer = cva([
  'relative py-24 bg-slate-900',
  'overflow-hidden',
]);

const testimonialsContent = cva([
  'max-w-7xl mx-auto px-4',
  'flex flex-col items-center',
]);

const sectionTitle = cva([
  'text-4xl lg:text-5xl font-bold text-center',
  'bg-clip-text text-transparent',
  'bg-gradient-to-r from-purple-400 to-pink-400',
  'mb-4',
]);

const sectionSubtitle = cva([
  'text-xl text-gray-400 text-center',
  'max-w-2xl mb-16',
]);

const testimonialsGrid = cva([
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  'gap-8 w-full',
]);

const testimonialCard = cva([
  'relative p-8 rounded-xl',
  'bg-gradient-to-b from-white/5 to-white/[0.02]',
  'border border-white/10',
  'backdrop-blur-sm',
  'group hover:border-purple-500/50',
  'transition-all duration-300',
]);

const testimonialQuote = cva([
  'text-gray-400 mb-6',
  'group-hover:text-gray-300',
  'transition-colors duration-300',
]);

const testimonialAuthor = cva([
  'flex items-center gap-4',
]);

const testimonialAvatar = cva([
  'relative w-12 h-12 rounded-full overflow-hidden',
  'border-2 border-purple-500',
]);

const testimonialInfo = cva([
  'flex flex-col',
]);

const testimonialName = cva([
  'text-white font-semibold',
]);

const testimonialRole = cva([
  'text-gray-400 text-sm',
]);

// ... other code remains the same ...

const testimonials = [
  {
    quote: "Working with Pixellent Solutions transformed our digital presence. Their innovative approach and attention to detail exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: `https://ui-avatars.com/api/?name=Sarah+Johnson&background=8B5CF6&color=fff`
  },
  {
    quote: "The team's technical expertise and commitment to delivering high-quality solutions made our project a huge success. They're truly partners in our growth.",
    author: "Michael Chen",
    role: "CTO, DataFlow Systems",
    avatar: `https://ui-avatars.com/api/?name=Michael+Chen&background=8B5CF6&color=fff`
  },
  {
    quote: "Exceptional service from start to finish. Their ability to understand our needs and translate them into powerful digital solutions sets them apart.",
    author: "Emily Rodriguez",
    role: "Director of Innovation, FutureScale",
    avatar: `https://ui-avatars.com/api/?name=Emily+Rodriguez&background=8B5CF6&color=fff`
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Testimonials() {
  return (
    <section className={testimonialsContainer()}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      
      <div className={testimonialsContent()}>
        <motion.h2 
          className={sectionTitle()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>
        
        <motion.p 
          className={sectionSubtitle()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Hear what our clients have to say about working with us
        </motion.p>

        <motion.div 
          className={testimonialsGrid()}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={testimonialCard()}
              variants={itemVariants}
            >
              <p className={testimonialQuote()}>"{testimonial.quote}"</p>
              <div className={testimonialAuthor()}>
                <div className={testimonialAvatar()}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={testimonialInfo()}>
                  <span className={testimonialName()}>{testimonial.author}</span>
                  <span className={testimonialRole()}>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}