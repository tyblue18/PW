"use client";

import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function RotatingPlanet() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Atmospheric glow - outer layer */}
      <Sphere ref={glowRef} args={[1.08, 32, 32]}>
        <meshBasicMaterial
          color="#6bb6ff"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Main planet sphere with distortion for surface detail */}
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#3b82f6"
          distort={0.4}
          speed={1.5}
          roughness={0.6}
          metalness={0.3}
          transparent
          opacity={0.95}
        />
      </Sphere>
      
      {/* Inner glow for depth */}
      <Sphere args={[0.98, 32, 32]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

export default function Planet3D({ size = 200 }: { size?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        style={{ width: size, height: size }} 
        className="relative rounded-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-50"
      />
    );
  }

  return (
    <div style={{ width: size, height: size }} className="relative">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#93c5fd" />
          <pointLight position={[0, 0, 5]} intensity={0.8} color="#60a5fa" />
          <RotatingPlanet />
        </Suspense>
      </Canvas>
    </div>
  );
}
