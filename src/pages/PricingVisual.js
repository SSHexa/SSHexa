import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function PricingBlocks() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const blocksData = useMemo(() => {
    const blocks = [];
    const colors = ["#f59e0b", "#10b981", "#8b5cf6"];

    // Create 3 pricing tier columns
    for (let tier = 0; tier < 3; tier++) {
      const height = (tier + 1) * 3; // Increasing heights
      const xOffset = (tier - 1) * 1.8;
      const color = colors[tier];

      // Stack blocks for each tier
      for (let level = 0; level < height; level++) {
        blocks.push({
          position: [xOffset, level * 0.4 - 1.5, 0],
          color,
          scale: [0.6, 0.35, 0.6],
          type: "box",
        });
      }

      // Top decoration
      blocks.push({
        position: [xOffset, (height * 0.4) - 1.2, 0],
        color,
        scale: 0.15,
        type: "sphere",
      });
    }

    // Floating coins/tokens around
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3 + Math.sin(i * 2) * 0.3;
      const height = Math.sin(i * 1.5) * 1.5;

      blocks.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius * 0.5
        ],
        color: "#fbbf24",
        scale: 0.1,
        type: "sphere",
      });
    }

    return blocks;
  }, []);

  return (
    <group ref={group}>
      {blocksData.map((block, idx) => (
        block.type === "box" ? (
          <mesh key={idx} position={block.position}>
            <boxGeometry args={block.scale} />
            <meshStandardMaterial
              color={block.color}
              metalness={0.3}
              roughness={0.4}
            />
          </mesh>
        ) : (
          <mesh key={idx} position={block.position}>
            <sphereGeometry args={[block.scale, 12, 12]} />
            <meshStandardMaterial
              color={block.color}
              metalness={0.5}
              roughness={0.2}
              emissive={block.color}
              emissiveIntensity={0.2}
            />
          </mesh>
        )
      ))}
    </group>
  );
}

export default function PricingVisual() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fffbeb 100%)",
      borderRadius: "12px",
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 3, -3]} intensity={0.4} />
        <PricingBlocks />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
