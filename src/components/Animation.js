import React, { useState, useEffect } from "react";
import Canvas from "./Canvas";

const Animation = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let rAF;

    const updateAnimationState = () => {
      setAngle((prevAngle) => prevAngle + 1);
      rAF = requestAnimationFrame(updateAnimationState);
    };

    rAF = requestAnimationFrame(updateAnimationState);

    return () => cancelAnimationFrame(rAF);
  }, []);

  return <Canvas angle={angle} />;
};

export default Animation;
