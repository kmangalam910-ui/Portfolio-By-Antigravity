"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function Scene3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Rotating the mesh continuously
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff007f" />
      
      {/* Central 3D Distorted Shape */}
      <Icosahedron ref={meshRef} args={[1.5, 3]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#1a1a2e"
          envMapIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          wireframe={true}
          transparent={true}
          opacity={0.8}
          distort={0.4}
          speed={2}
        />
      </Icosahedron>
      
      {/* Outer Glow Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 2.55, 64]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
