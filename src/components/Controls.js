import React from "react";

export default function Controls({ setEnvironment, setExerciseState, setPetMood }) {
  return (
    <div style={{ position: "absolute", bottom: 20, left: 20 }}>
      <button onClick={()=>setEnvironment("mountains")}>Mountains</button>
      <button onClick={()=>setEnvironment("volcano")}>Volcano</button>
      <button onClick={()=>setExerciseState("Idle")}>Idle</button>
      <button onClick={()=>setExerciseState("Warmup")}>Warmup</button>
      <button onClick={()=>setExerciseState("Squat")}>Squat</button>
      <button onClick={()=>setExerciseState("PushUp")}>PushUp</button>
      <button onClick={()=>setExerciseState("CoolDown")}>CoolDown</button>
      <button onClick={()=>setPetMood("calm")}>Pet Calm</button>
      <button onClick={()=>setPetMood("hyper")}>Pet Hyper</button>
    </div>
  );
  }
  
