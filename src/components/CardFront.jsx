import React from "react";
import StaticStars from "../components/StaticStars";

// change opacity of anchors

export default function CardFront() {
  const [starState, setStarState] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setStarState(true)}
      onMouseLeave={() => setStarState(false)}
      className="text-primary border-primary border-2 [backface-visibility:hidden] [backdrop-filter:blur(5px)] w-[100%] h-[100%] bg-secondary bg-opacity-5 absolute overflow-hidden rounded-lg"
    >
      {starState ? <StaticStars count={30} indexZ={-1} /> : null}
      <h1 className="absolute w-[100%]">You can fine me on:</h1>
      <div className="w-[100%] h-[100%] grid content-center">
        <a
          className="w-[15%] mb-14 aspect-[1/1] bg-white drop-shadow-[0_0_10px_var(--secondary-shadow)] rounded-3xl justify-self-center"
          onClick={(event) => event.stopPropagation()}
          href="https://github.com/ShiboSoftwareDev"
          target="blank"
        >
          <img
            className="w-[100%] h-[100%]"
            src="./src/assets/images/github.svg"
            alt="github"
          ></img>
        </a>
        <a
          className="w-[15%] mb-14 aspect-[1/1] bg-white drop-shadow-[0_0_10px_var(--secondary-shadow)] rounded-3xl justify-self-center"
          onClick={(event) => event.stopPropagation()}
          href="https://x.com/elonmusk?s=20"
          target="blank"
        >
          <img
            className="w-[100%] h-[100%]"
            src="./src/assets/images/twitter.svg"
            alt="twitter"
          ></img>
        </a>
        <a
          className="w-[15%] mb-14 aspect-[1/1] bg-white drop-shadow-[0_0_10px_var(--secondary-shadow)] rounded-3xl justify-self-center"
          onClick={(event) => event.stopPropagation()}
          href="https://www.linkedin.com/in/ahmed-shebani-3563142a6/"
          target="blank"
        >
          <img
            className="w-[100%] h-[100%]"
            src="./src/assets/images/linkedin.svg"
            alt="linkedin"
          ></img>
        </a>
        <img
          className="drop-shadow-[0_0_10px_var(--secondary-shadow)] absolute bottom-0 left-[42.5%] w-[15%]"
          src=".\src\assets\images\3dRotate.png"
          alt="3dRotate"
        ></img>
      </div>
    </div>
  );
}
