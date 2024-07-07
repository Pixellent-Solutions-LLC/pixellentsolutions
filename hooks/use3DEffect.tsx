import { useEffect } from 'react';

export const use3DEffect = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const { clientX, clientY } = event;
        const offsetX = ((clientX - rect.left) / rect.width - 0.5) * 2;
        const offsetY = ((clientY - rect.top) / rect.height - 0.5) * 2;

        ref.current.style.transform = `perspective(1000px) rotateY(${offsetX * 15}deg) rotateX(${-offsetY * 15}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (ref.current) {
        ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [ref]);
};
