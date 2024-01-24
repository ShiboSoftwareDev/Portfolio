import React from "react";
import StaticStars from "../components/StaticStars";

// need to change anchor tag box shadow color

export default function CardBack() {
  const [starState, setStarState] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setStarState(true)}
      onMouseLeave={() => setStarState(false)}
      className="text-primary border-primary border-2 [backface-visibility:hidden] [backdrop-filter:blur(5px)] w-[100%] h-[100%] bg-secondary bg-opacity-5 absolute overflow-hidden rounded-lg [transform:rotateY(180deg)]"
    >
      {starState ? <StaticStars count={30} indexZ={-1} /> : null}
      <div className="login-box absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] w-[70%]">
        <h2 className="mb-8">Message me</h2>
        <form>
          <div className="user-box relative">
            <input
              id="email"
              className="peer w-full py-2 mb-8 border-b-2 border-secondary outline-none bg-transparent autofill:duration-[5000s]"
              onClick={(e) => e.stopPropagation()}
              type="email"
              autoComplete="off"
              name=""
            ></input>
            <label
              htmlFor="email"
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-secondary peer-focus:-top-[21px] peer-focus:left-0 peer-autofill:text-secondary peer-autofill:-top-[21px] peer-autofill:left-0"
            >
              Email
            </label>
          </div>
          <div className="user-box relative">
            <input
              id="name"
              className="peer w-full py-2 mb-8 border-b-2 border-secondary outline-none bg-transparent autofill:duration-[5000s]"
              onClick={(e) => e.stopPropagation()}
              type="text"
              autoComplete="off"
              name=""
            ></input>
            <label
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-secondary peer-focus:-top-[21px] peer-focus:left-0 peer-autofill:text-secondary peer-autofill:-top-[21px] peer-autofill:left-0"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="user-box relative">
            <textarea
              id="message"
              className="peer w-full py-2 mb-8 border-b-2 border-secondary outline-none bg-transparent"
              rows={5}
              onClick={(e) => e.stopPropagation()}
              type="text"
              autoComplete="off"
              name=""
            ></textarea>
            <label
              className="absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-secondary peer-focus:-top-[30px] peer-focus:left-0 peer-autofill:text-secondary peer-autofill:-top-[21px] peer-autofill:left-0"
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <a
            className="relative inline-block py-3 px-5 overflow-hidden duration-500 mt-10 tracking-[4px] drop-shadow-[0_0_50px_var(--primary-shadow)] hover:text-white hover:bg-primary hover:rounded-[5px] hover:shadow-[0_0_25px_var(--primary-shadow),0_0_5px_var(--primary-shadow)]"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            href="#"
          >
            <span className="absolute block animate-slider1 top-0 left-[-100%] w-full h-[2px] bg-blueGradient"></span>
            <span className="absolute block animate-slider2 right-0 top-[-100%] w-[2px] h-full bg-blueGradient"></span>
            <span className="absolute block animate-slider3 bottom-0 right-[-100%] w-full h-[2px] bg-blueGradient"></span>
            <span className="absolute block animate-slider4 left-0 bottom-[-100%] h-full w-[2px] bg-blueGradient"></span>
            SEND
          </a>
        </form>
      </div>
      <img
        className="drop-shadow-[0_0_10px_var(--secondary-shadow)] absolute bottom-0 left-[42.5%] w-[15%] [transform:scaleX(-1)]"
        src=".\src\assets\images\3dRotate.png"
        alt="3dRotate"
      ></img>
    </div>
  );
}
