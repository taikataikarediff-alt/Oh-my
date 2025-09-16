import { useEffect } from "react";
import useSound from "use-sound";
import calmTrack from "../audio/calm.mp3";
import hypeTrack from "../audio/hype.mp3";

export default function Music({ exerciseState }) {
  const [playCalm, { stop: stopCalm }] = useSound(calmTrack, { loop:true, volume:0.5 });
  const [playHype, { stop: stopHype }] = useSound(hypeTrack, { loop:true, volume:0.5 });

  useEffect(()=>{
    if(["Idle","Warmup","CoolDown"].includes(exerciseState)) {
      stopHype?.();
      playCalm();
    } else {
      stopCalm?.();
      playHype();
    }
  },[exerciseState]);

  return null;
}
