import React from "react";
import { useThree } from "@react-three/fiber";

export default function SelfieCamera() {
  const { gl } = useThree();

  const takePhoto = () => {
    const imgData = gl.domElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "avatar_selfie.png";
    link.click();
  };

  return (
    <button style={{ position:"absolute", top:20, left:20 }} onClick={takePhoto}>
      Snap Selfie
    </button>
  );
    }
