import React, { useEffect, useRef } from "react";

const PureCanvas = ({ contextRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      contextRef(canvasRef.current.getContext("2d"));
    }
  }, [contextRef]);

  return <canvas width="300" height="300" ref={canvasRef} />;
};

export default PureCanvas;
