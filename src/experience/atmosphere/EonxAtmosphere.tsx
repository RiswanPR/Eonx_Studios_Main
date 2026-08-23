"use client";

export function EonxAtmosphere() {
  return (
    <>
      <color attach="background" args={["#040607"]} />
      <fog attach="fog" args={["#040607", 8, 16]} />
    </>
  );
}
