"use client";
import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";
import {
  Floor,
  Box,
  LightBulb,
  Controls,
  Draggable,
  GltfModel,
} from "@/Components";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />

        <Stars />
        <LightBulb position={[0, 3, 0]} />
        <GltfModel
          modelPath={`/media/astra.glb`}
          scale={2}
          position={[0, 0, 0]}
        />
        {/* <Draggable>
          <Box rotateX={3} rotateY={0.2} />
        </Draggable> */}
        <Controls />
        {/* <Floor position={[0, -1, 0]} /> */}
      </Canvas>
    </div>
  );
}
