import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Pet({ url, exerciseState, intensity="calm", position=[1,0,0], scale=0.5 }) {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);
  const ref = useRef();

  useEffect(() => {
    if(!actions) return;
    Object.values(actions).forEach(a => a.stop());

    if(["Idle","Warmup","CoolDown"].includes(exerciseState) && actions.Idle) actions.Idle.play();
    else if(["Squat","PushUp"].includes(exerciseState)) {
      if(intensity==="hyper" && actions.Hype) actions.Hype.play();
      else if(actions.Cheer) actions.Cheer.play();
    }
  }, [exerciseState, intensity, actions]);

  return <primitive ref={ref} object={scene} position={position} scale={scale} />;
}
