"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function usePointerTarget() {
  const target = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      target.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      target.current.y = -(
        (event.clientY / window.innerHeight) * 2 - 1
      );
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return target;
}
