'use client';

import { cva } from 'class-variance-authority';

const testimonialsContainer = cva(
  'bg-gray-900 py-12'
);

const testimonialsWrapper = cva(
  'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
);

const testimonialsTitle = cva(
  'text-3xl font-extrabold text-center text-white mb-12'
);

const testimonialsGrid = cva(
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
);

const testimonialItem = cva(
  'text-center p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700'
);

const testimonialContent = cva(
  'text-gray-400 mb-4'
);

const testimonialAuthor = cva(
  'text-lg font-semibold text-white'
);

export default function Testimonials() {
  return (
    <section id="testimonials" className={testimonialsContainer()}>
      <div className={testimonialsWrapper()}>
        <h2 className={testimonialsTitle()}>What Our Clients Say</h2>
        <div className={testimonialsGrid()}>
          {/* Sample testimonials */}
          <div className={testimonialItem()}>
            <p className={testimonialContent()}>“Pixellent Solutions transformed our business. Their expertise and dedication are unmatched.”</p>
            <p className={testimonialAuthor()}>— John Doe, CEO of Company X</p>
          </div>
          <div className={testimonialItem()}>
            <p className={testimonialContent()}>“The team at Pixellent Solutions delivered beyond our expectations. Highly recommend!”</p>
            <p className={testimonialAuthor()}>— Jane Smith, CTO of Company Y</p>
          </div>
          <div className={testimonialItem()}>
            <p className={testimonialContent()}>“Excellent service and support. We are very satisfied with the results.”</p>
            <p className={testimonialAuthor()}>— Emily Johnson, COO of Company Z</p>
          </div>
        </div>
      </div>
    </section>
  );
}
