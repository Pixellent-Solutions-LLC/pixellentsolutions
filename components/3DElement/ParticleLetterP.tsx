'use client';

import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import fontData from '../../fonts/helvetiker_regular.typeface.json';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

function ParticleLetterP() {
  const points = useRef<THREE.Points>(null);
  const progress = useRef(0);

  // Initialize geometry with useMemo
  const geometry = useMemo(() => new THREE.BufferGeometry(), []);

  useEffect(() => {
    // Parse the font data using FontLoader
    const font = new FontLoader().parse(fontData);

    // Generate shapes for the letter 'P'
    const shapes = font.generateShapes('P', 1);

    // Extract points from the shapes
    let targetPositions = [];
    shapes.forEach((shape) => {
      const shapePoints = shape.getSpacedPoints(100); // Increase for more particles
      shapePoints.forEach((p) => {
        targetPositions.push(p.x, p.y, 0);
      });
    });

    const count = targetPositions.length / 3;

    // Generate random initial positions
    const initialPositions = new Float32Array(targetPositions.length);
    for (let i = 0; i < count; i++) {
      initialPositions[i * 3] = (Math.random() - 0.5) * 10;
      initialPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      initialPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    // Create buffer attributes
    geometry.setAttribute('position', new THREE.BufferAttribute(initialPositions, 3));
    geometry.setAttribute('initialPosition', new THREE.BufferAttribute(initialPositions, 3));
    geometry.setAttribute(
      'targetPosition',
      new THREE.BufferAttribute(new Float32Array(targetPositions), 3)
    );
  }, [geometry]);

  useFrame((state, delta) => {
    if (progress.current < 1) {
      progress.current += delta * 0.5; // Adjust speed as needed
      if (progress.current > 1) progress.current = 1;

      const positions = geometry.attributes.position.array;
      const initialPositions = geometry.attributes.initialPosition.array;
      const targetPositions = geometry.attributes.targetPosition.array;

      for (let i = 0; i < positions.length; i++) {
        positions[i] = THREE.MathUtils.lerp(
          initialPositions[i],
          targetPositions[i],
          progress.current
        );
      }
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        color="#8B5CF6"
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}

export default function LetterPAnimation() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
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
        <ParticleLetterP />
      </Canvas>
    </div>
  );
}
