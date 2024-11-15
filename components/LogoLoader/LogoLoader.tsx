import Image from 'next/image';
import { useEffect, useState } from 'react';

const LogoLoader = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 500);
    const timer2 = setTimeout(() => setAnimationStage(2), 1000);
    const timer3 = setTimeout(() => setAnimationStage(3), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="relative w-[200px] h-[200px]">
        <Image
          src="/assets/bottompart.png"
          alt="Logo bottom"
          width={200}
          height={200}
          className={`absolute transition-all duration-700 transform
            ${animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}`}
        />
        <Image
          src="/assets/middlepart.png"
          alt="Logo middle"
          width={200}
          height={200}
          className={`absolute transition-all duration-700 transform
            ${animationStage >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-[100px] opacity-0'}`}
        />
        <Image
          src="/assets/toppart.png"
          alt="Logo top"
          width={200}
          height={200}
          className={`absolute transition-all duration-700 transform
            ${animationStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-[-100px] opacity-0'}`}
        />
      </div>
    </div>
  );
};

export default LogoLoader; 