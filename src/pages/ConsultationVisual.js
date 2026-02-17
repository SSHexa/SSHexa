import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SafeCanvas from "../components/SafeCanvas";

function Microscope() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  const particles = useMemo(() => {
    const points = [];

    // Create lens/circle pattern
    const rings = 5;
    const pointsPerRing = 20;

    for (let r = 1; r <= rings; r++) {
      const radius = r * 0.5;
      for (let i = 0; i < pointsPerRing; i++) {
        const angle = (i / pointsPerRing) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // Gradient from purple to cyan
        const hue = 260 - (r / rings) * 80;
        const color = `hsl(${hue}, 70%, 55%)`;

        points.push({
          position: [x, y, 0],
          color,
          scale: 0.12 - r * 0.01,
        });
      }
    }

    // Add central focus point
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      points.push({
        position: [Math.cos(angle) * 0.2, Math.sin(angle) * 0.2, 0.1],
        color: "#22d3ee",
        scale: 0.08,
      });
    }

    // Add floating sample particles
    for (let i = 0; i < 15; i++) {
      const angle = (i / 15) * Math.PI * 2;
      const radius = 2.8 + Math.sin(i * 2) * 0.3;
      points.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          Math.sin(i) * 0.5
        ],
        color: "#a78bfa",
        scale: 0.06 + Math.random() * 0.04,
      });
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
            metalness={0.4}
            roughness={0.3}
            emissive={p.color}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ConsultationVisual() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 50%, #faf5ff 100%)",
      borderRadius: "12px",
    }}>
      <SafeCanvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#a78bfa" />
        <Microscope />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </SafeCanvas>
    </div>
  );
}
