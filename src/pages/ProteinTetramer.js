import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function DNAHelix() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const helixData = useMemo(() => {
    const points = [];
    const segments = 60;
    const radius = 1.5;
    const height = 6;
    const turns = 2;

    for (let i = 0; i < segments; i++) {
      const t = i / segments;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;

      // First strand
      points.push({
        position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
        color: "#0ea5e9",
        scale: 0.15 + Math.sin(t * Math.PI) * 0.05,
      });

      // Second strand (offset by PI)
      points.push({
        position: [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius],
        color: "#6366f1",
        scale: 0.15 + Math.sin(t * Math.PI) * 0.05,
      });

      // Connection bars every 5 segments
      if (i % 5 === 0) {
        points.push({
          position: [0, y, 0],
          color: "#94a3b8",
          scale: 0.08,
          isBar: true,
          barRotation: angle,
        });
      }
    }
    return points;
  }, []);

  return (
    <group ref={group}>
      {helixData.map((point, idx) => (
        point.isBar ? (
          <mesh key={idx} position={[0, point.position[1], 0]} rotation={[0, point.barRotation, Math.PI / 2]}>
            <cylinderGeometry args={[0.03, 0.03, 3, 8]} />
            <meshStandardMaterial color={point.color} metalness={0.3} roughness={0.5} />
          </mesh>
        ) : (
          <mesh key={idx} position={point.position}>
            <sphereGeometry args={[point.scale, 16, 16]} />
            <meshStandardMaterial color={point.color} metalness={0.4} roughness={0.3} />
          </mesh>
        )
      ))}
    </group>
  );
}

export default function ProteinTetramer() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)",
      borderRadius: "12px",
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <DNAHelix />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
