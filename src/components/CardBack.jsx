import React from "react";
import StaticStars from "../components/StaticStars";

export default function CardBack() {
  const [starState, setStarState] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setStarState(true)}
      onMouseLeave={() => setStarState(false)}
      className="text-blue-500 border-blue-500 border-2 [backface-visibility:hidden] [backdrop-filter:blur(5px)] w-[100%] h-[100%] bg-purple-700 bg-opacity-5 absolute overflow-hidden rounded-lg [transform:rotateY(180deg)]"
    >
      {starState ? <StaticStars count={30} indexZ={-1} /> : null}
      <h1>Form</h1>
      <p>Type your name,</p>
      <p>type your email,</p>
      <p>type your message,</p>
      <p>submit button,</p>
      <p>Send message to my email.</p>
    </div>
  );
}
