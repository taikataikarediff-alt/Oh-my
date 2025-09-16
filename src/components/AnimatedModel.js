import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function AnimatedModel({ url, animationState="Idle", position=[0,0,0], scale=1 }) {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);
  const ref = useRef();

  useEffect(() => {
    if(!actions) return;
    Object.values(actions).forEach(a => a.stop());
    if(actions[animationState]) actions[animationState].play();
  }, [animationState, actions]);

  return <primitive ref={ref} object={scene} position={position} scale={scale} />;
                                      }
