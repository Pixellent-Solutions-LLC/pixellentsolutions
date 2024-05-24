'use client';

import { cva } from 'class-variance-authority';

const contactContainer = cva(
  'bg-gray-900 py-12'
);

const contactWrapper = cva(
  'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
);

const contactTitle = cva(
  'text-3xl font-extrabold text-center text-white mb-12'
);

const contactForm = cva(
  'max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700'
);

const contactInput = cva(
  'w-full p-3 mb-4 border border-gray-700 rounded-md bg-gray-900 text-white'
);

const contactTextarea = cva(
  'w-full p-3 mb-4 border border-gray-700 rounded-md bg-gray-900 text-white h-32'
);

const contactButton = cva(
  'w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition'
);

export default function Contact() {
  return (
    <section id="contact" className={contactContainer()}>
      <div className={contactWrapper()}>
        <h2 className={contactTitle()}>Contact Us</h2>
        <form className={contactForm()}>
          <input type="text" className={contactInput()} placeholder="Name" />
          <input type="email" className={contactInput()} placeholder="Email" />
          <textarea className={contactTextarea()} placeholder="Message"></textarea>
          <button type="submit" className={contactButton()}>Send Message</button>
        </form>
      </div>
    </section>
  );
}
