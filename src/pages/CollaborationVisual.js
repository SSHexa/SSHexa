import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SafeCanvas from "../components/SafeCanvas";

function NetworkNodes() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  const networkData = useMemo(() => {
    const elements = [];

    // Define main nodes (team members)
    const mainNodes = [
      { pos: [0, 0, 0], color: "#0ea5e9", scale: 0.35 },
      { pos: [2, 1, 0.5], color: "#8b5cf6", scale: 0.28 },
      { pos: [-2, 1, -0.5], color: "#10b981", scale: 0.28 },
      { pos: [1.5, -1.5, 0.3], color: "#f59e0b", scale: 0.28 },
      { pos: [-1.5, -1.5, -0.3], color: "#ec4899", scale: 0.28 },
      { pos: [0, 2, -0.5], color: "#06b6d4", scale: 0.25 },
    ];

    // Add main nodes
    mainNodes.forEach((node) => {
      elements.push({
        position: node.pos,
        color: node.color,
        scale: node.scale,
        type: "node",
      });

      // Add glow ring around each node
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const ringRadius = node.scale + 0.15;
        elements.push({
          position: [
            node.pos[0] + Math.cos(angle) * ringRadius,
            node.pos[1] + Math.sin(angle) * ringRadius,
            node.pos[2]
          ],
          color: node.color,
          scale: 0.04,
          type: "particle",
        });
      }
    });

    // Create connections between nodes (as dotted lines)
    const connections = [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 5], [2, 5], [1, 3], [2, 4]
    ];

    connections.forEach(([from, to]) => {
      const start = mainNodes[from].pos;
      const end = mainNodes[to].pos;
      const steps = 6;

      for (let i = 1; i < steps; i++) {
        const t = i / steps;
        elements.push({
          position: [
            start[0] + (end[0] - start[0]) * t,
            start[1] + (end[1] - start[1]) * t,
            start[2] + (end[2] - start[2]) * t,
          ],
          color: "#94a3b8",
          scale: 0.04,
          type: "connection",
        });
      }
    });

    // Floating data particles
    for (let i = 0; i < 15; i++) {
      const angle = (i / 15) * Math.PI * 2;
      const radius = 3.2 + Math.sin(i * 2) * 0.3;

      elements.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.8,
          Math.sin(i) * 0.5
        ],
        color: "#cbd5e1",
        scale: 0.05,
        type: "particle",
      });
    }

    return elements;
  }, []);

  return (
    <group ref={group}>
      {networkData.map((el, idx) => (
        <mesh key={idx} position={el.position}>
          <sphereGeometry args={[el.scale, el.type === "node" ? 16 : 8, el.type === "node" ? 16 : 8]} />
          <meshStandardMaterial
            color={el.color}
            metalness={el.type === "node" ? 0.4 : 0.2}
            roughness={el.type === "node" ? 0.2 : 0.5}
            emissive={el.type === "node" ? el.color : undefined}
            emissiveIntensity={el.type === "node" ? 0.15 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function CollaborationVisual() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #f0fdfa 100%)",
      borderRadius: "12px",
    }}>
      <SafeCanvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, -3, 3]} intensity={0.3} />
        <NetworkNodes />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.35} />
      </SafeCanvas>
    </div>
  );
}
