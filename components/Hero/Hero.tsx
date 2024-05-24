'use client';

import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { Button } from '../Button/Button';

const heroContainer = cva(
  'flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center border border-gray-700 rounded-lg'
);

const heroHeadline = cva(
  'text-4xl md:text-6xl font-bold mb-4'
);

const heroSubheadline = cva(
  'text-xl md:text-2xl mb-8'
);

const heroButtons = cva(
  'flex space-x-4'
);

export default function Hero() {
  return (
    <section id="hero" className={heroContainer()}>
      <Image src="/assets/logo2.png" alt="Pixellent Solutions Logo" width={200} height={200} />
      <h1 className={heroHeadline()}>Welcome to Pixellent Solutions LLC</h1>
      <p className={heroSubheadline()}>Transforming your business with cutting-edge solutions</p>
      <div className={heroButtons()}>
        <Button href="#services" intent="primary">Get Started</Button>
        <Button href="#contact" intent="secondary">Contact Us</Button>
      </div>
    </section>
  );
}
