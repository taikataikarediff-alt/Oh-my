import React from "react";

export default function Celebration({ streak }) {
  if(streak % 7 !== 0) return null;
  return (
    <mesh>
      <sphereBufferGeometry args={[0.2,32,32]} />
      <meshStandardMaterial color="gold" emissive="yellow" />
    </mesh>
  );
    }
