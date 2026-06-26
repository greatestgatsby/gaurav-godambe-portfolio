import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

function ForecastSurface({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(14, 14, 80, 80);
    geo.rotateX(-Math.PI / 2.35);
    return geo;
  }, []);

  const basePositions = useMemo(() => {
    return Float32Array.from(
      (geometry.attributes.position as THREE.BufferAttribute).array
    );
  }, [geometry]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;

    for (let i = 0; i < arr.length; i += 3) {
      const x = basePositions[i];
      const z = basePositions[i + 2];
      const y =
        Math.sin(x * 0.45 + t * 0.55) * 0.55 +
        Math.cos(z * 0.5 + t * 0.4) * 0.5 +
        Math.sin((x + z) * 0.28 + t * 0.3) * 0.35;
      arr[i + 1] = y;
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();

    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (pointer.current.x * 0.25 - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x +=
        (-pointer.current.y * 0.12 - groupRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial color={"#14B8A6"} wireframe transparent opacity={0.42} />
      </mesh>
    </group>
  );
}

function Scene({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <>
      <ForecastSurface pointer={pointer} />
      <EffectComposer>
        <Bloom intensity={0.9} luminanceThreshold={0.1} luminanceSmoothing={0.4} mipmapBlur />
        <Vignette eskil={false} offset={0.25} darkness={0.95} />
      </EffectComposer>
    </>
  );
}

export default function Hero3D() {
  const pointer = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    if (!reduce && !small) setEnabled(true);

    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) {
    return (
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 120%, rgba(20,184,166,0.22) 0%, rgba(20,184,166,0.05) 40%, rgba(10,11,13,0) 70%), #0A0B0D",
        }}
      />
    );
  }

  return (
    <div aria-hidden className="absolute inset-0">
      <Canvas camera={{ position: [0, 4.2, 9], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <Scene pointer={pointer} />
        </Suspense>
      </Canvas>
    </div>
  );
}
