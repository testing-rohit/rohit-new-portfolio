import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

const IconSphere = ({ position, color, url }: { position: [number, number, number]; color: string; url: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onClick={() => window.open(url, "_blank")}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const FloatingIcons3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-auto" style={{ zIndex: 2 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <IconSphere 
          position={[-3, 1, 0]} 
          color="#8b5cf6" 
          url="https://github.com/caffeine-rohit"
        />
        <IconSphere 
          position={[3, 1, 0]} 
          color="#22d3ee" 
          url="http://linkedin.com/in/rohit-sharma-connect"
        />
        <IconSphere 
          position={[0, -2, 0]} 
          color="#a78bfa" 
          url="mailto:caffeine.rohit@gmail.com"
        />
      </Canvas>
    </div>
  );
};

export default FloatingIcons3D;
