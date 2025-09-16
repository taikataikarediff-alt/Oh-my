import React from "react";

const exercises = ["Idle","Warmup","Squat","PushUp","CoolDown"];

export default function ExerciseManager({ exerciseState, setExerciseState }) {
  return (
    <div style={{ position:"absolute", bottom:100, left:20 }}>
      {exercises.map(ex=>(
        <button key={ex} onClick={()=>setExerciseState(ex)}>{ex}</button>
      ))}
    </div>
  );
}
