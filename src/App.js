import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import AnimatedModel from "./components/AnimatedModel";
import Pet from "./components/Pet";
import Controls from "./components/Controls";
import ExerciseManager from "./components/ExerciseManager";
import Celebration from "./components/Celebration";
import SelfieCamera from "./components/SelfieCamera";
import Music from "./components/Music";

export default function App() {
  const [exerciseState, setExerciseState] = useState("Idle");
  const [environment, setEnvironment] = useState("mountains");
  const [petMood, setPetMood] = useState("calm");
  const [streak, setStreak] = useState(0);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <Stage>
            <AnimatedModel url="/models/avatar.glb" animationState={exerciseState} />
            <Pet url="/models/pet.glb" exerciseState={exerciseState} intensity={petMood} />
            <Environment files={`/environments/${environment}.hdr`} background />
            <Celebration streak={streak} />
          </Stage>
        </Suspense>
        <OrbitControls />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} intensity={1.2} />
        </EffectComposer>
      </Canvas>

      <Controls
        setEnvironment={setEnvironment}
        setExerciseState={setExerciseState}
        setPetMood={setPetMood}
      />
      <ExerciseManager exerciseState={exerciseState} setExerciseState={setExerciseState} />
      <SelfieCamera />
      <Music exerciseState={exerciseState} />
    </>
  );
    }
    
