import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function MolecularCloud() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const particles = useMemo(() => {
    const points = [];
    const numParticles = 80;

    // Create a flowing ribbon-like structure
    for (let i = 0; i < numParticles; i++) {
      const t = i / numParticles;
      const angle = t * Math.PI * 4;

      // Main ribbon path
      const x = Math.sin(angle) * 2 + Math.cos(angle * 2) * 0.5;
      const y = (t - 0.5) * 5;
      const z = Math.cos(angle) * 2 + Math.sin(angle * 2) * 0.5;

      // Gradient from teal to emerald
      const hue = 160 + t * 40;
      const color = `hsl(${hue}, 70%, 50%)`;

      points.push({
        position: [x, y, z],
        color,
        scale: 0.18 + Math.sin(t * Math.PI * 2) * 0.06,
      });

      // Add smaller surrounding particles for depth
      if (i % 3 === 0) {
        const offset = 0.4;
        points.push({
          position: [x + offset, y + offset * 0.5, z],
          color,
          scale: 0.08,
        });
        points.push({
          position: [x - offset, y - offset * 0.5, z + offset],
          color,
          scale: 0.08,
        });
      }
    }
    return points;
  }, []);

  return (
    <group ref={group}>
      {particles.map((p, idx) => (
        <mesh key={idx} position={p.position}>
          <sphereGeometry args={[p.scale, 12, 12]} />
          <meshStandardMaterial
            color={p.color}
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ProteinDensity() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #ecfdf5 100%)",
      borderRadius: "12px",
    }}>
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, -3, -3]} intensity={0.4} />
        <MolecularCloud />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
