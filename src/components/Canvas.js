import React, { useEffect, useRef, useCallback } from "react";
import PureCanvas from "./PureCanvas";

const Canvas = ({ angle }) => {
  const ctxRef = useRef(null);
  const widthRef = useRef(0);
  const heightRef = useRef(0);

  const saveContext = useCallback((ctx) => {
    ctxRef.current = ctx;
    widthRef.current = ctx.canvas.width;
    heightRef.current = ctx.canvas.height;
  }, []);

  useEffect(() => {
    if (ctxRef.current) {
      const ctx = ctxRef.current;
      const width = widthRef.current;
      const height = heightRef.current;

      ctx.save();
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.translate(width / 2, height / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.fillStyle = "#4397AC";
      ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
      ctx.restore();
    }
  }, [angle]);

  return <PureCanvas contextRef={saveContext} />;
};

export default Canvas;
