'use client';

import { cva } from 'class-variance-authority';
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const servicesContainer = cva(
  'bg-gray-900 py-12'
);

const servicesWrapper = cva(
  'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
);

const servicesTitle = cva(
  'text-3xl font-extrabold text-center text-white mb-12'
);

const servicesGrid = cva(
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
);

const serviceItem = cva(
  'text-center p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700'
);

const serviceIcon = cva(
  'text-blue-400 mb-4'
);

const serviceTitle = cva(
  'text-xl font-semibold text-white mb-2'
);

const serviceDescription = cva(
  'text-gray-400'
);

export default function Services() {
  return (
    <section id="services" className={servicesContainer()}>
      <div className={servicesWrapper()}>
        <h2 className={servicesTitle()}>Our Services</h2>
        <div className={servicesGrid()}>
          <div className={serviceItem()}>
            <FaCode className={serviceIcon()} size={48} />
            <h3 className={serviceTitle()}>Web Development</h3>
            <p className={serviceDescription()}>Creating responsive and dynamic web applications using the latest technologies.</p>
          </div>
          <div className={serviceItem()}>
            <FaMobileAlt className={serviceIcon()} size={48} />
            <h3 className={serviceTitle()}>Mobile App Development</h3>
            <p className={serviceDescription()}>Building high-performance mobile applications for iOS and Android.</p>
          </div>
          <div className={serviceItem()}>
            <FaLaptopCode className={serviceIcon()} size={48} />
            <h3 className={serviceTitle()}>Custom Software Solutions</h3>
            <p className={serviceDescription()}>Developing custom software solutions tailored to your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
