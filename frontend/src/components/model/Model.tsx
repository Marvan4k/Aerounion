"use client"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

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

export default function ModelView({ modelPath } : ModelViewProps) {
  return (
    <div style={{ width: '500px', height: '500px', background: '#f0f0f0' }}>
      <Canvas camera={{ position: [4, 3, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense>
          <Model path={modelPath} />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            minDistance={2}
            maxDistance={8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}