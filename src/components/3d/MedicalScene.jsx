import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, OrbitControls, Float, Text3D, Center } from '@react-three/drei';

function FloatingMolecule({ position, color = "#10b981", customColors = false }) {
  const meshRef = useRef();
  
  // Enhanced animation for premium effect
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      meshRef.current.rotation.x = t * (customColors ? 0.6 : 0.5);
      meshRef.current.rotation.y = t * (customColors ? 0.4 : 0.3);
      
      // More dynamic movement for premium effect
      if (customColors) {
        meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
        meshRef.current.position.x = position[0] + Math.sin(t * 0.5 + position[1]) * 0.1;
      } else {
        meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
      }
    }
  });

  // Enhanced glow and material properties for premium effect
  const emissiveIntensity = customColors ? 0.8 : 0.5;
  const roughness = customColors ? 0.1 : 0.2;
  const metalness = customColors ? 0.9 : 0.8;
  
  return (
    <Float 
      speed={customColors ? 3 : 2} 
      rotationIntensity={customColors ? 2 : 1.5} 
      floatIntensity={customColors ? 1 : 0.7}
    >
      <group ref={meshRef} position={position}>
        {/* Center sphere with enhanced glow effect */}
        <Sphere args={[0.3, customColors ? 48 : 32, customColors ? 48 : 32]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={emissiveIntensity} 
            roughness={roughness} 
            metalness={metalness} 
          />
        </Sphere>
        
        {/* Outer spheres with enhanced materials */}
        <Sphere args={[0.15, customColors ? 24 : 16, customColors ? 24 : 16]} position={[0.8, 0, 0]}>
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff" 
            emissiveIntensity={customColors ? 0.5 : 0.3} 
            roughness={roughness} 
            metalness={metalness} 
          />
        </Sphere>
        <Sphere args={[0.15, customColors ? 24 : 16, customColors ? 24 : 16]} position={[-0.8, 0, 0]}>
          <meshStandardMaterial 
            color={customColors ? "#ec4899" : "#ef4444"} 
            emissive={customColors ? "#ec4899" : "#ef4444"} 
            emissiveIntensity={customColors ? 0.6 : 0.4} 
            roughness={roughness} 
            metalness={metalness} 
          />
        </Sphere>
        <Sphere args={[0.1, customColors ? 24 : 16, customColors ? 24 : 16]} position={[0, 0.8, 0]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6" 
            emissiveIntensity={customColors ? 0.6 : 0.4} 
            roughness={roughness} 
            metalness={metalness} 
          />
        </Sphere>
        <Sphere args={[0.1, customColors ? 24 : 16, customColors ? 24 : 16]} position={[0, -0.8, 0]}>
          <meshStandardMaterial 
            color="#f59e0b" 
            emissive="#f59e0b" 
            emissiveIntensity={customColors ? 0.6 : 0.4} 
            roughness={roughness} 
            metalness={metalness} 
          />
        </Sphere>
        
        {/* Additional connecting lines for premium effect */}
        {customColors && (
          <>
            <mesh position={[0.4, 0, 0]}>
              <boxGeometry args={[0.8, 0.03, 0.03]} />
              <meshStandardMaterial 
                color="#ffffff" 
                emissive="#ffffff"
                emissiveIntensity={0.3}
                transparent
                opacity={0.7}
              />
            </mesh>
            <mesh position={[-0.4, 0, 0]}>
              <boxGeometry args={[0.8, 0.03, 0.03]} />
              <meshStandardMaterial 
                color="#ffffff" 
                emissive="#ffffff"
                emissiveIntensity={0.3}
                transparent
                opacity={0.7}
              />
            </mesh>
            <mesh position={[0, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
              <boxGeometry args={[0.8, 0.03, 0.03]} />
              <meshStandardMaterial 
                color="#ffffff" 
                emissive="#ffffff"
                emissiveIntensity={0.3}
                transparent
                opacity={0.7}
              />
            </mesh>
            <mesh position={[0, -0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
              <boxGeometry args={[0.8, 0.03, 0.03]} />
              <meshStandardMaterial 
                color="#ffffff" 
                emissive="#ffffff"
                emissiveIntensity={0.3}
                transparent
                opacity={0.7}
              />
            </mesh>
          </>
        )}
      </group>
    </Float>
  );
}

function DNAHelix({ customColors = false }) {
  const helixRef = useRef();
  
  // Enhanced animation for premium effect
  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * (customColors ? 0.7 : 0.5);
      if (customColors) {
        helixRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      }
    }
  });

  // More points and detail for premium effect
  const pointCount = customColors ? 40 : 30;
  const rotations = customColors ? 8 : 6;
  const radius = customColors ? 1.8 : 1.5;
  const spacing = customColors ? 0.12 : 0.15;
  
  const helixPoints = [];
  for (let i = 0; i < pointCount; i++) {
    const angle = (i / pointCount) * Math.PI * rotations;
    const y = (i - pointCount/2) * spacing;
    helixPoints.push([Math.cos(angle) * radius, y, Math.sin(angle) * radius]);
  }

  // Enhanced material properties for premium effect
  const sphereSegments = customColors ? 24 : 16;
  const emissiveIntensity = customColors ? 0.8 : 0.5;
  const roughness = customColors ? 0.1 : 0.3;
  const metalness = customColors ? 0.9 : 0.7;
  
  // Premium color palette
  const color1 = customColors ? "#8b5cf6" : "#10b981"; // Purple : Green
  const color2 = customColors ? "#3b82f6" : "#3b82f6"; // Blue : Blue

  return (
    <group ref={helixRef} position={[3, 0, -2]}>
      {helixPoints.map((point, index) => (
        <Float 
          key={index} 
          speed={customColors ? 2 : 1.5} 
          rotationIntensity={customColors ? 0.8 : 0.5} 
          floatIntensity={customColors ? 0.4 : 0.2}
        >
          <Sphere args={[0.08, sphereSegments, sphereSegments]} position={point}>
            <meshStandardMaterial 
              color={index % 2 === 0 ? color1 : color2} 
              emissive={index % 2 === 0 ? color1 : color2}
              emissiveIntensity={emissiveIntensity}
              roughness={roughness}
              metalness={metalness}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* Enhanced connecting lines between the spheres */}
      {helixPoints.map((point, index) => {
        if (index < helixPoints.length - 1 && index % 2 === 0) {
          const nextPoint = helixPoints[index + 1];
          return (
            <group key={`line-${index}`}>
              <mesh position={[(point[0] + nextPoint[0]) / 2, (point[1] + nextPoint[1]) / 2, (point[2] + nextPoint[2]) / 2]}>
                <boxGeometry args={[customColors ? 0.04 : 0.03, 0.3, customColors ? 0.04 : 0.03]} />
                <meshStandardMaterial 
                  color="#ffffff" 
                  emissive="#ffffff"
                  emissiveIntensity={customColors ? 0.5 : 0.3}
                  transparent
                  opacity={customColors ? 0.8 : 0.7}
                />
              </mesh>
            </group>
          );
        }
        return null;
      })}
      
      {/* Additional glowing core for premium effect */}
      {customColors && (
        <pointLight 
          position={[0, 0, 0]} 
          color={color1} 
          intensity={0.5} 
          distance={3}
          decay={2}
        />
      )}
    </group>
  );
}

function MedicalCross({ customColors = false }) {
  const crossRef = useRef();
  
  useFrame((state) => {
    if (crossRef.current) {
      crossRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * (customColors ? 0.15 : 0.1);
      crossRef.current.position.y = Math.sin(state.clock.elapsedTime * (customColors ? 1.0 : 0.8)) * (customColors ? 0.4 : 0.3);
    }
  });

  // Premium color and material properties
  const crossColor = customColors ? "#f43f5e" : "#ef4444"; // Brighter red for premium
  
  return (
    <group ref={crossRef} position={[-3, 0, -1]}>
      <Box args={[0.3, 2, 0.3]}>
        <meshStandardMaterial 
          color={crossColor} 
          emissive={crossColor}
          emissiveIntensity={customColors ? 0.7 : 0.5}
          roughness={customColors ? 0.1 : 0.3}
          metalness={customColors ? 0.9 : 0.7}
        />
      </Box>
      <Box args={[2, 0.3, 0.3]}>
        <meshStandardMaterial 
          color={crossColor} 
          emissive={crossColor}
          emissiveIntensity={customColors ? 0.7 : 0.5}
          roughness={customColors ? 0.1 : 0.3}
          metalness={customColors ? 0.9 : 0.7}
        />
      </Box>
      
      {/* Additional glowing effect for premium */}
      {customColors && (
        <pointLight 
          position={[0, 0, 0]} 
          color={crossColor} 
          intensity={0.6} 
          distance={3}
          decay={2}
        />
      )}
    </group>
  );
}

function HeartBeat({ customColors = false }) {
  const heartRef = useRef();
  const lightRef = useRef();
  
  useFrame((state) => {
    if (heartRef.current) {
      const beat = Math.sin(state.clock.elapsedTime * (customColors ? 10 : 8)) * (customColors ? 0.2 : 0.15) + 1; // Enhanced beat amplitude for premium
      heartRef.current.scale.setScalar(beat);
      
      // Add slight rotation for premium effect
      if (customColors) {
        heartRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      }
    }
    
    // Pulsing light intensity for premium effect
    if (lightRef.current) {
      lightRef.current.intensity = customColors ? (2.5 + Math.sin(state.clock.elapsedTime * 10) * 0.5) : 2;
    }
  });

  // Premium color and material properties
  const heartColor = customColors ? "#f43f5e" : "#ef4444"; // Brighter red for premium
  const emissiveIntensity = customColors ? 0.9 : 0.7;
  const roughness = customColors ? 0.1 : 0.2;
  const metalness = customColors ? 0.9 : 0.8;
  
  // Enhanced geometry for premium effect
  const torusSegments = customColors ? [24, 48] : [16, 32]; // [tubularSegments, radialSegments]

  return (
    <group ref={heartRef} position={[0, 2, -3]}>
      <Torus args={[0.5, 0.2, torusSegments[0], torusSegments[1]]}>
        <meshStandardMaterial 
          color={heartColor} 
          emissive={heartColor}
          emissiveIntensity={emissiveIntensity}
          roughness={roughness}
          metalness={metalness}
        />
      </Torus>
      {/* Add a pulsing light to enhance the heartbeat effect */}
      <pointLight 
        ref={lightRef}
        color={heartColor} 
        intensity={customColors ? 2.5 : 2} 
        distance={customColors ? 4 : 3}
        decay={2}
      />
      
      {/* Additional glow effect for premium */}
      {customColors && (
        <Torus args={[0.6, 0.1, 16, 32]}>
          <meshStandardMaterial 
            color={heartColor} 
            emissive={heartColor}
            emissiveIntensity={1}
            transparent
            opacity={0.4}
          />
        </Torus>
      )}
    </group>
  );
}

export default function MedicalScene({ customColors = false }) {
  // Premium color palette for the AI Features section
  const primaryColors = customColors ? {
    molecule1: "#8b5cf6", // Vibrant purple
    molecule2: "#3b82f6", // Bright blue
    molecule3: "#ec4899", // Pink
    molecule4: "#10b981", // Emerald
    molecule5: "#f59e0b", // Amber
    light1: "#8b5cf6",    // Purple light
    light2: "#3b82f6",    // Blue light
    light3: "#ec4899",    // Pink light
  } : {
    molecule1: "#10b981", // Default green
    molecule2: "#3b82f6", // Default blue
    molecule3: "#f59e0b", // Default amber
    molecule4: "#ef4444", // Default red
    molecule5: "#8b5cf6", // Default purple
    light1: "#10b981",    // Default green light
    light2: "#3b82f6",    // Default blue light
    light3: "#ef4444",    // Default red light
  };
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: customColors ? 50 : 45 }}>
        <ambientLight intensity={customColors ? 0.6 : 0.4} />
        <pointLight position={[15, 15, 15]} intensity={customColors ? 1.2 : 0.8} />
        <pointLight position={[-15, -15, -15]} intensity={customColors ? 0.5 : 0.3} color={primaryColors.light2} />
        <pointLight position={[0, 10, 5]} intensity={customColors ? 0.8 : 0.5} color={primaryColors.light1} />
        {customColors && (
          <pointLight position={[5, -8, 3]} intensity={0.7} color={primaryColors.light3} />
        )}
        
        {/* Create a more immersive scene with more elements */}
        <FloatingMolecule position={[4, 2, -2]} color={primaryColors.molecule1} customColors={customColors} />
        <FloatingMolecule position={[-4, -2, -3]} color={primaryColors.molecule2} customColors={customColors} />
        <FloatingMolecule position={[3, -3, -4]} color={primaryColors.molecule3} customColors={customColors} />
        <FloatingMolecule position={[-3, 3, -2]} color={primaryColors.molecule4} customColors={customColors} />
        <FloatingMolecule position={[0, -4, -3]} color={primaryColors.molecule5} customColors={customColors} />
        <FloatingMolecule position={[5, 0, -5]} color={primaryColors.molecule3} customColors={customColors} />
        
        {/* Add more molecules for premium effect when customColors is true */}
        
        {/* Add more molecules for premium effect when customColors is true */}
        {customColors && (
          <>
            <FloatingMolecule position={[2, 5, -6]} color={primaryColors.molecule1} customColors={customColors} />
            <FloatingMolecule position={[-5, 4, -7]} color={primaryColors.molecule2} customColors={customColors} />
            <FloatingMolecule position={[6, -2, -8]} color={primaryColors.molecule4} customColors={customColors} />
            <FloatingMolecule position={[-2, -5, -6]} color={primaryColors.molecule5} customColors={customColors} />
          </>
        )}
        
        {/* Add more DNA helixes for a more medical feel */}
        <group position={[6, 0, -5]}>
          <DNAHelix customColors={customColors} />
        </group>
        <group position={[-6, 0, -4]}>
          <DNAHelix customColors={customColors} />
        </group>
        <group position={[-3, -5, -6]}>
          <DNAHelix customColors={customColors} />
        </group>
        
        {/* Additional DNA helixes for premium effect */}
        {customColors && (
          <>
            <group position={[8, 3, -7]}>
              <DNAHelix customColors={customColors} />
            </group>
            <group position={[-8, 3, -7]}>
              <DNAHelix customColors={customColors} />
            </group>
          </>
        )}
        
        {/* Medical symbols */}
        <group position={[4, 4, -5]}>
          <MedicalCross customColors={customColors} />
        </group>
        <group position={[-4, 4, -5]}>
          <MedicalCross customColors={customColors} />
        </group>
        
        {/* Additional medical symbols for premium effect */}
        {customColors && (
          <>
            <group position={[7, -3, -6]}>
              <MedicalCross customColors={customColors} />
            </group>
            <group position={[-7, -3, -6]}>
              <MedicalCross customColors={customColors} />
            </group>
          </>
        )}
        
        {/* Heartbeat elements */}
        <group position={[0, 4, -6]}>
          <HeartBeat customColors={customColors} />
        </group>
        <group position={[5, -4, -6]}>
          <HeartBeat customColors={customColors} />
        </group>
        
        {/* Additional heartbeat elements for premium effect */}
        {customColors && (
          <>
            <group position={[-5, -4, -6]}>
              <HeartBeat customColors={customColors} />
            </group>
            <group position={[0, -6, -7]}>
              <HeartBeat customColors={customColors} />
            </group>
          </>
        )}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={customColors ? 0.7 : 0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
