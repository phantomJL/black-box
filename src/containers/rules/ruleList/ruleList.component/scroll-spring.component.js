import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import "./styles.css"; // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

export default function Spring() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  return (
    <div
      class="container d-flex justify-content-center"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <img style={{ position: "absolute", width: "20%" }} src="/img/bg.png" />
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
    </div>
  );
}
