import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import StaticStars from "../components/StaticStars";

// need to change anchor tag box shadow color

export default function CardBack() {
  const [starState, setStarState] = React.useState(false);
  const [nameState, setNameState] = React.useState("");
  const [emailState, setEmailState] = React.useState("");
  const [messageState, setMessageState] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x4baxt9",
        "template_2aoc6kp",
        form.current,
        "Jk6oS_ur4kolYSl5n"
      )
      .then(
        () => {
          setEmailState("");
          setNameState("");
          setMessageState("");
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        },
        () => {
          setEmailState("");
          setNameState("");
          setFailure(true);
          setTimeout(() => {
            setFailure(false);
          }, 4000);
        }
      );
  };

  return (
    <div
      onMouseEnter={() => setStarState(true)}
      onMouseLeave={() => setStarState(false)}
      className="text-primary border-primary border-2 [backface-visibility:hidden] [backdrop-filter:blur(5px)] w-[100%] h-[100%] bg-secondary bg-opacity-5 absolute overflow-hidden rounded-lg [transform:rotateY(180deg)]"
    >
      {starState ? <StaticStars count={30} indexZ={-1} /> : null}
      <div className="login-box absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] w-[70%]">
        <h2 className="mb-8">Message me</h2>
        <form ref={form} onSubmit={sendEmail} method="POST">
          <div className="user-box relative">
            <input
              id="email"
              value={emailState}
              className="peer w-full py-2 mb-8 border-b-2 border-secondary outline-none bg-transparent autofill:duration-[5000s]"
              onChange={(e) => setEmailState(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              type="email"
              name="user_email"
            ></input>
            <label
              htmlFor="email"
              className={`absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-secondary peer-focus:-top-[21px] peer-focus:left-0 peer-autofill:text-secondary peer-autofill:-top-[21px] peer-autofill:left-0 ${
                emailState !== "" ? "left-0 -top-[21px] text-secondary" : ""
              }`}
            >
              Email
            </label>
          </div>
          <div className="user-box relative">
            <input
              id="name"
              value={nameState}
              className="peer w-full py-2 mb-8 border-b-2 border-secondary outline-none bg-transparent autofill:duration-[5000s]"
              onChange={(e) => setNameState(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              type="text"
              name="user_name"
            ></input>
            <label
              className={`absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-secondary peer-focus:-top-[21px] peer-focus:left-0 peer-autofill:text-secondary peer-autofill:-top-[21px] peer-autofill:left-0 ${
                nameState !== "" ? "left-0 -top-[21px] text-secondary" : ""
              }`}
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="user-box relative">
            <textarea
              id="message"
              value={messageState}
              className="peer w-full py-2 mb-8 border-b-2 border-secondary outline-none bg-transparent"
              rows={5}
              onChange={(e) => setMessageState(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              name="message"
            ></textarea>
            <label
              className={`absolute top-0 left-0 py-[10px] duration-500 pointer-events-none peer-focus:text-secondary peer-focus:-top-[30px] peer-focus:left-0 ${
                messageState !== "" ? "left-0 -top-[30px] text-secondary" : ""
              }`}
              htmlFor="message"
            >
              Message
            </label>
            {success ? (
              <h2 className="text-green-500 absolute w-full">Message Sent!</h2>
            ) : null}
            {failure ? (
              <h2 className="text-red-700 absolute w-full">
                An error occurred!
              </h2>
            ) : null}
          </div>
          <button
            type="submit"
            value="Send"
            className="relative cursor-pointer inline-block py-3 px-5 overflow-hidden duration-500 mt-10 tracking-[4px] drop-shadow-[0_0_50px_var(--primary-shadow)] hover:text-white hover:bg-primary hover:rounded-[5px] hover:shadow-[0_0_25px_var(--primary-shadow),0_0_5px_var(--primary-shadow)]"
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
          </button>
          <input type="submit" value="Send"></input>
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
