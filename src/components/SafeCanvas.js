import { useLayoutEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";

// Patches R3F's event system to prevent null target errors during route transitions
function NullGuard() {
  const store = useThree();
  useLayoutEffect(() => {
    const { events } = store;
    const originalConnect = events.connect;
    if (originalConnect) {
      events.connect = (target) => {
        if (target) originalConnect(target);
      };
    }
  }, [store]);
  return null;
}

export default function SafeCanvas({ children, ...props }) {
  return (
    <Canvas {...props}>
      <NullGuard />
      {children}
    </Canvas>
  );
}
