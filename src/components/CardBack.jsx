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
      <div className="login-box absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] w-[70%]">
        <h2 className="mb-8">Message me</h2>
        <form>
          <div className="user-box relative">
            <input
              id="email"
              className="w-full py-2 mb-8 border-b-2 outline-none bg-transparent"
              onClick={(e) => e.stopPropagation()}
              type="email"
              autoComplete="off"
              name=""
            ></input>
            <label
              htmlFor="email"
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none"
            >
              Email
            </label>
          </div>
          <div className="user-box relative">
            <input
              id="name"
              className="w-full py-2 mb-8 border-b-2 outline-none bg-transparent"
              onClick={(e) => e.stopPropagation()}
              type="text"
              autoComplete="off"
              name=""
            ></input>
            <label
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="user-box relative">
            <input
              id="message"
              className="w-full py-2 mb-8 border-b-2 outline-none bg-transparent"
              onClick={(e) => e.stopPropagation()}
              type="text"
              autoComplete="off"
              name=""
            ></input>
            <label
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none"
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <a
            className="hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            href="#"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            send
          </a>
        </form>
      </div>
    </div>
  );
}
