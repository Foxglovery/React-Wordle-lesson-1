import { useEffect, useRef } from "react";

const Canvas2 = (props) => {
  const { draw, ...rest } = props;
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    let count = 0;
    let AnimationID;

    const renderer = () => {
      count++;
      draw(context, count);
      AnimationID = window.requestAnimationFrame(renderer);
    };
    renderer();

    return () => window.cancelAnimationFrame(AnimationID);
  }, []);

  return <canvas ref={ref} {...rest} />;
};

export default Canvas2;
