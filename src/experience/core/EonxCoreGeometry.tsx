"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { useEonxCoreMaterial } from "./EonxCoreMaterial";

// Transforms 2D SVG viewBox (140 x 70) coordinates into normalized 3D coordinates
function mapSvgTo3D(x: number, y: number, z = 0): THREE.Vector3 {
  const scale = 45;
  return new THREE.Vector3((x - 70) / scale, -(y - 35) / scale, z);
}

export function EonxCoreGeometry() {
  const material = useEonxCoreMaterial();

  const geometries = useMemo(() => {
    const tubeRadius = 0.032;
    const radialSegments = 8;
    const tubularSegments = 48;

    // 1. Center Torus Ring (cx: 70, cy: 35, r: 15.5)
    const centerTorus = new THREE.TorusGeometry(15.5 / 45, tubeRadius, radialSegments, tubularSegments);

    // 2. Top Outer Arch: M 22 34 C 36 13, 80 10, 110 24
    const topCurve = new THREE.CubicBezierCurve3(
      mapSvgTo3D(22, 34, 0.02),
      mapSvgTo3D(36, 13, 0.03),
      mapSvgTo3D(80, 10, 0.03),
      mapSvgTo3D(110, 24, 0.02),
    );
    const topArch = new THREE.TubeGeometry(topCurve, tubularSegments, tubeRadius, radialSegments, false);

    // 3. Bottom Outer Arch: M 118 36 C 104 57, 60 60, 30 46
    const bottomCurve = new THREE.CubicBezierCurve3(
      mapSvgTo3D(118, 36, -0.02),
      mapSvgTo3D(104, 57, -0.03),
      mapSvgTo3D(60, 60, -0.03),
      mapSvgTo3D(30, 46, -0.02),
    );
    const bottomArch = new THREE.TubeGeometry(bottomCurve, tubularSegments, tubeRadius, radialSegments, false);

    // 4. Left Wing & Center Bar: M 42 21 L 12 35 L 56 35
    const leftPath = new THREE.CurvePath<THREE.Vector3>();
    leftPath.add(new THREE.LineCurve3(mapSvgTo3D(42, 21, 0.01), mapSvgTo3D(12, 35, 0.01)));
    leftPath.add(new THREE.LineCurve3(mapSvgTo3D(12, 35, 0.01), mapSvgTo3D(56, 35, 0.01)));
    const leftWing = new THREE.TubeGeometry(leftPath, 32, tubeRadius, radialSegments, false);

    // 5. Right Wing & Shelf: M 98 49 L 128 35 L 84 35
    const rightPath = new THREE.CurvePath<THREE.Vector3>();
    rightPath.add(new THREE.LineCurve3(mapSvgTo3D(98, 49, -0.01), mapSvgTo3D(128, 35, -0.01)));
    rightPath.add(new THREE.LineCurve3(mapSvgTo3D(128, 35, -0.01), mapSvgTo3D(84, 35, -0.01)));
    const rightWing = new THREE.TubeGeometry(rightPath, 32, tubeRadius, radialSegments, false);

    // 6. Diagonal "e" Slash: M 56 35 L 83.5 26
    const slashPath = new THREE.LineCurve3(mapSvgTo3D(56, 35, 0.02), mapSvgTo3D(83.5, 26, 0.02));
    const slash = new THREE.TubeGeometry(slashPath, 16, tubeRadius, radialSegments, false);

    // 7. Central Radiant Core Nucleus
    const coreSphere = new THREE.IcosahedronGeometry(0.16, 2);

    return {
      centerTorus,
      topArch,
      bottomArch,
      leftWing,
      rightWing,
      slash,
      coreSphere,
    };
  }, []);

  return (
    <group name="eonx-core-logo">
      <mesh geometry={geometries.centerTorus} material={material} />
      <mesh geometry={geometries.topArch} material={material} />
      <mesh geometry={geometries.bottomArch} material={material} />
      <mesh geometry={geometries.leftWing} material={material} />
      <mesh geometry={geometries.rightWing} material={material} />
      <mesh geometry={geometries.slash} material={material} />
      <mesh geometry={geometries.coreSphere} material={material} />
    </group>
  );
}
