"use client";

export function EonxLights() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[3, 4, 5]}
        intensity={2}
        color="#4928C2"
      />

      <pointLight
        position={[-3, 1, 2]}
        intensity={25}
        distance={10}
        color="#5B2A62"
      />

      <pointLight
        position={[3, -2, 1]}
        intensity={12}
        distance={8}
        color="#BF40FA"
      />
    </>
  );
}
