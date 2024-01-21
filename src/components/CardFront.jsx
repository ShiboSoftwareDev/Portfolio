import React from "react";
import StaticStars from "../components/StaticStars";

export default function CardFront() {
  const [starState, setStarState] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setStarState(true)}
      onMouseLeave={() => setStarState(false)}
      className="text-blue-500 border-blue-500 border-2 [backface-visibility:hidden] [backdrop-filter:blur(5px)] w-[100%] h-[100%] bg-purple-700 bg-opacity-5 absolute overflow-hidden rounded-lg"
    >
      {starState ? <StaticStars count={30} indexZ={-1} /> : null}
      <h1 className="absolute w-[100%]">You can fine me on:</h1>
      <div className="w-[100%] h-[100%] grid content-center">
        <a
          className="w-[15%] mb-14 aspect-[1/1] bg-purple-700 bg-opacity-5 drop-shadow-[0_0_10px_rgba(126,34,206,1)] rounded-3xl justify-self-center"
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
          className="w-[15%] mb-14 aspect-[1/1] bg-purple-700 bg-opacity-5 drop-shadow-[0_0_10px_rgba(126,34,206,1)] rounded-3xl justify-self-center"
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
          className="w-[15%] mb-14 aspect-[1/1] bg-purple-700 bg-opacity-5 drop-shadow-[0_0_10px_rgba(126,34,206,1)] rounded-3xl justify-self-center"
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
      </div>
    </div>
  );
}
