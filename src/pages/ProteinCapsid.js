import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function VirusCapsid() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  const capsidData = useMemo(() => {
    const points = [];
    const radius = 2.5;

    // Create icosahedral-like distribution for virus capsid
    // Using fibonacci sphere for even distribution
    const numPoints = 120;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numPoints; i++) {
      const inclination = Math.acos(1 - 2 * (i + 0.5) / numPoints);
      const azimuth = 2 * Math.PI * i / goldenRatio;

      const x = radius * Math.sin(inclination) * Math.cos(azimuth);
      const y = radius * Math.sin(inclination) * Math.sin(azimuth);
      const z = radius * Math.cos(inclination);

      // Color based on position - purple to orange gradient
      const colorIndex = (Math.sin(inclination * 3) + 1) / 2;
      const colors = ["#7c3aed", "#a855f7", "#f97316", "#fb923c"];
      const color = colors[Math.floor(colorIndex * (colors.length - 1))];

      // Vary size slightly for visual interest
      const scale = 0.15 + Math.sin(i * 0.5) * 0.03;

      points.push({ position: [x, y, z], color, scale });
    }

    // Add inner core structure
    const corePoints = 30;
    for (let i = 0; i < corePoints; i++) {
      const inclination = Math.acos(1 - 2 * (i + 0.5) / corePoints);
      const azimuth = 2 * Math.PI * i / goldenRatio;

      const innerRadius = 1.2;
      const x = innerRadius * Math.sin(inclination) * Math.cos(azimuth);
      const y = innerRadius * Math.sin(inclination) * Math.sin(azimuth);
      const z = innerRadius * Math.cos(inclination);

      points.push({
        position: [x, y, z],
        color: "#c4b5fd",
        scale: 0.1,
      });
    }

    return points;
  }, []);

  return (
    <group ref={group}>
      {capsidData.map((p, idx) => (
        <mesh key={idx} position={p.position}>
          <sphereGeometry args={[p.scale, 12, 12]} />
          <meshStandardMaterial
            color={p.color}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ProteinCapsid() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #faf5ff 100%)",
      borderRadius: "12px",
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -5, 5]} intensity={0.4} />
        <VirusCapsid />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
