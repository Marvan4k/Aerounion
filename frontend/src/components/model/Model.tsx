"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';

type ModelProps = {
    path: string;
};

type ModelViewProps = {
    modelPath: string;
};

function Model({ path }: ModelProps) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
}

function OscillatingModel({ path }: ModelProps) {
  const { scene } = useGLTF(path);
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();
      ref.current.rotation.y = Math.sin(time * 0.5) * 0.5;
    }
  });
  
  return <primitive ref={ref} object={scene} scale={1.5} />;
}

export default function ModelView({ modelPath } : ModelViewProps) {
  return (
    <div style={{ marginTop: '-60px', marginLeft: '20px', zIndex: 0, position: 'absolute', width: '1800px', height: '900px', background: 'transparent' }}>
      <Canvas 
        camera={{ position: [7, 5, 8], fov: 60 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense>
          <OscillatingModel path={modelPath} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={false}  
          />
        </Suspense>
      </Canvas>
    </div>
  );
}