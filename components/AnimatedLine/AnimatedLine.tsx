'use client';

import { useEffect, useRef, useState } from 'react';

interface Section {
  id: string;
  offsetTop: number;
}

const sections: Section[] = [
  { id: 'hero', offsetTop: 0 },
  { id: 'services', offsetTop: 0 },
  { id: 'portfolio', offsetTop: 0 },
  { id: 'testimonials', offsetTop: 0 },
  { id: 'contact', offsetTop: 0 }
];

const AnimatedLine:React.FC =  () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [sectionOffsets, setSectionOffsets] = useState<Section[]>(sections);

  useEffect(() => {
    const updateOffsets = () => {
      const updatedSections = sections.map(section => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          offsetTop: element ? element.offsetTop : 0,
        };
      });
      setSectionOffsets(updatedSections);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (lineRef.current) {
        let lineHeight = 0;
        for (let i = 0; i < sectionOffsets.length; i++) {
          if (scrollPosition >= sectionOffsets[i]?.offsetTop ?? 0) {
            lineHeight = (i + 1) * 20; // adjust this multiplier to control the height increase per section
          }
        }
        lineRef.current.style.height = `${lineHeight}%`;
      }
    };

    updateOffsets();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateOffsets);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateOffsets);
    };
  }, [sectionOffsets]);

  return (
    <div className="fixed top-0 left-0 w-1 bg-blue-500 transition-all duration-300" ref={lineRef} />
  );
};

export default AnimatedLine;
