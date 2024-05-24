'use client';

import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { useRef } from 'react';
import { use3DEffect } from '../../hooks/use3DEffect';

const portfolioContainer = cva(
  'bg-gray-900 py-12'
);

const portfolioWrapper = cva(
  'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
);

const portfolioTitle = cva(
  'text-3xl font-extrabold text-center text-white mb-12'
);

const portfolioGrid = cva(
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
);

const portfolioItem = cva(
  'text-center p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700 transition transform hover:shadow-hover relative' // Apply hover effect
);

const portfolioImage = cva(
  'w-full h-48 object-cover mb-4'
);

const portfolioName = cva(
  'text-xl font-semibold text-white mb-2'
);

const portfolioDescription = cva(
  'text-gray-400'
);

interface Project {
  name: string;
  image: string;
  description: string;
}

const PortfolioItem: React.FC<{ project: Project }> = ({ project }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  use3DEffect(itemRef);

  return (
    <div ref={itemRef} className={`${portfolioItem()} portfolio-item`}>
      <Image src={project.image} alt={project.name} className={portfolioImage()} width={400} height={200} />
      <h3 className={portfolioName()}>{project.name}</h3>
      <p className={portfolioDescription()}>{project.description}</p>
    </div>
  );
};
export default function Portfolio() {
    const projects: Project[] = [
    { name: 'Project 1', image: '/assets/project1.png', description: 'Description of project 1 showcasing the work done.' },
    { name: 'Project 2', image: '/assets/project1.png', description: 'Description of project 2 showcasing the work done.' },
    { name: 'Project 3', image: '/assets/project2.png', description: 'Description of project 3 showcasing the work done.' },
  ];

  return (
    <section id="portfolio" className={portfolioContainer()}>
    <div className={portfolioWrapper()}>
      <h2 className={portfolioTitle()}>Our Portfolio</h2>
      <div className={portfolioGrid()}>
        {projects.map((project, index) => (
          <PortfolioItem key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
  );
}
