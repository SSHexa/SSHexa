import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Shield() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const shieldData = useMemo(() => {
    const points = [];

    // Create shield outline
    const shieldPoints = 40;
    for (let i = 0; i < shieldPoints; i++) {
      const t = i / shieldPoints;
      const angle = t * Math.PI * 2;

      // Shield shape - wider at top, pointed at bottom
      let radius;
      if (angle < Math.PI) {
        radius = 2 + Math.sin(angle) * 0.3;
      } else {
        radius = 2 - (angle - Math.PI) / Math.PI * 1.5;
      }

      const x = Math.sin(angle) * radius * 0.8;
      const y = Math.cos(angle) * radius;

      points.push({
        position: [x, y, 0],
        color: "#3b82f6",
        scale: 0.12,
      });
    }

    // Inner shield glow
    for (let i = 0; i < 25; i++) {
      const t = i / 25;
      const angle = t * Math.PI * 2;
      let radius = 1.3;
      if (angle > Math.PI) {
        radius = 1.3 - (angle - Math.PI) / Math.PI * 0.8;
      }

      const x = Math.sin(angle) * radius * 0.8;
      const y = Math.cos(angle) * radius;

      points.push({
        position: [x, y, 0.2],
        color: "#60a5fa",
        scale: 0.1,
      });
    }

    // Lock icon in center
    // Lock body
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 5; col++) {
        points.push({
          position: [(col - 2) * 0.2, row * 0.2 - 0.3, 0.4],
          color: "#1e40af",
          scale: 0.08,
        });
      }
    }

    // Lock shackle (arc)
    for (let i = 0; i < 12; i++) {
      const angle = (i / 11) * Math.PI;
      const x = Math.cos(angle) * 0.35;
      const y = Math.sin(angle) * 0.4 + 0.5;

      points.push({
        position: [x, y, 0.4],
        color: "#1e40af",
        scale: 0.07,
      });
    }

    // Decorative outer particles
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 2.8 + Math.sin(i * 3) * 0.2;

      points.push({
        position: [
          Math.sin(angle) * radius * 0.8,
          Math.cos(angle) * radius * 0.9,
          Math.sin(i) * 0.3
        ],
        color: "#93c5fd",
        scale: 0.05,
      });
    }

    return points;
  }, []);

  return (
    <group ref={group}>
      {shieldData.map((p, idx) => (
        <mesh key={idx} position={p.position}>
          <sphereGeometry args={[p.scale, 12, 12]} />
          <meshStandardMaterial
            color={p.color}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function SecurityVisual() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #eff6ff 100%)",
      borderRadius: "12px",
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, -3, 3]} intensity={0.3} />
        <Shield />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
