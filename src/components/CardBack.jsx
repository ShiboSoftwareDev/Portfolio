import React from "react";
import StaticStars from "../components/StaticStars";

// need to change anchor tag box shadow color

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
              className="peer w-full py-2 mb-8 border-b-2 outline-none bg-transparent autofill:duration-[5000s]"
              onClick={(e) => e.stopPropagation()}
              type="email"
              autoComplete="off"
              name=""
            ></input>
            <label
              htmlFor="email"
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-purple-700 peer-focus:-top-[21px] peer-focus:left-0 peer-autofill:text-purple-700 peer-autofill:-top-[21px] peer-autofill:left-0"
            >
              Email
            </label>
          </div>
          <div className="user-box relative">
            <input
              id="name"
              className="peer w-full py-2 mb-8 border-b-2 outline-none bg-transparent autofill:duration-[5000s]"
              onClick={(e) => e.stopPropagation()}
              type="text"
              autoComplete="off"
              name=""
            ></input>
            <label
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-purple-700 peer-focus:-top-[21px] peer-focus:left-0 peer-autofill:text-purple-700 peer-autofill:-top-[21px] peer-autofill:left-0"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="user-box relative">
            <input
              id="message"
              className="peer w-full py-2 mb-8 border-b-2 outline-none bg-transparent"
              onClick={(e) => e.stopPropagation()}
              type="text"
              autoComplete="off"
              name=""
            ></input>
            <label
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-purple-700 peer-focus:-top-[21px] peer-focus:left-0 peer-autofill:text-purple-700 peer-autofill:-top-[21px] peer-autofill:left-0"
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <a
            className="relative inline-block py-3 px-5 overflow-hidden duration-500 mt-10 tracking-[4px] drop-shadow-[0_0_50px_#3b82f6] hover:text-white hover:bg-blue-500 hover:rounded-[5px] hover:shadow-[0_0_25px_#3b82f6,0_0_5px_#3b82f6]"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            href="#"
          >
            {/* forgot about the gradient background */}
            <span className="absolute block animate-slider1 top-0 left-[-100%] w-full h-[2px] bg-blueGradient"></span>
            <span className="absolute block animate-slider2 right-0 top-[-100%] w-[2px] h-full bg-blueGradient"></span>
            <span className="absolute block animate-slider3 bottom-0 right-[-100%] w-full h-[2px] bg-blueGradient"></span>
            <span className="absolute block animate-slider4 left-0 bottom-[-100%] h-full w-[2px] bg-blueGradient"></span>
            SEND
          </a>
        </form>
      </div>
    </div>
  );
}
