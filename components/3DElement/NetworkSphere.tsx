'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleNetwork({ count = 2000 }) {
  const points = useRef<THREE.Points>(null);
  const geometry = useRef<THREE.BufferGeometry>(null);

  useEffect(() => {
    if (!geometry.current) return;
    
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 1.5 * Math.random();
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    geometry.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.1;
      points.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry ref={geometry} />
      <pointsMaterial
        size={0.02}
        sizeAttenuation={true}
        color="#8B5CF6"
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}

export default function NetworkSphere() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}