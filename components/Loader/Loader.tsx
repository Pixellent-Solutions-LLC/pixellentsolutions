"use client";

import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const loaderContainer = cva('flex justify-center items-center h-screen relative overflow-hidden');
const logoPart = cva('absolute '); // Adjust the width and height according to your image size

const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [showTick, setShowTick] = useState(false);
  const [animateMiddle, setAnimateMiddle] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowTick(true);
    }, 1000); // Adjust timing as needed

    const timer2 = setTimeout(() => {
      setAnimateMiddle(true);
    }, 1500); // Adjust timing to start the middle part animation

    const timer3 = setTimeout(() => {
      onLoaded();
    }, 3000); // Total duration of the loader animation

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoaded]);

  return (
    <>
       <style jsx>{`
        @keyframes middlePartAnimation {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        .hidden-middlePart {
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }

        .animate-middlePart {
          animation: middlePartAnimation 1.5s forwards;
        }
      `}</style>
      <div className={loaderContainer()}>
        <div className={logoPart()} style={{ top: showTick ? '53%' : '-100px', left:'46.2%', transition: 'top 1s' }}>
          <Image src="/assets/bottompart.png" alt="Top Part" width={100} height={100} />
        </div>
        <div className={logoPart()} style={{ bottom: showTick ? '49%' : '-100px', transition: 'bottom 1s' }}>
          <Image src="/assets/toppart.png" alt="Bottom Part" width={150} height={150} />
        </div>
        {showTick && (
           <div
           className={`${logoPart()} ${animateMiddle ? 'animate-middlePart' : 'hidden-middlePart'}`}
           style={{
             left: '50.4%',
             transform: 'translateX(-50%)',
             
           }}
         >
            <Image src="/assets/middlepart.png" alt="Middle Part" width={180} height={180} />
          </div>
        )}
      </div>
    </>
  );
};

export default Loader;
