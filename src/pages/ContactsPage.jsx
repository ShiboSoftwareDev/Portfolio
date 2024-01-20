import React from "react";

export default function ContactsPage() {
  //Im still copying styles from index.css to tailwind styles

  //and copying an idea from a favorited site

  const [flipped, setFlipped] = React.useState(false);
  function flip() {
    setFlipped((prev) => !prev);
  }

  return (
    <section
      id="contactsPage"
      className="bg-gray-800 text-center w-full h-[900px] flex flex-col items-center"
    >
      <div
        onClick={flip}
        className=" bg-transparent w-[500px] h-[700px] [perspective:2000px] z-10"
      >
        <div
          className={`flip-card-inner relative w-[100%] h-[100%] text-center [transition:transform_0.8s] [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* bg-slate-600 */}
          <div className="flip-card-front text-blue-500 border-blue-500 border-2 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [backdrop-filter:blur(5px)] w-[100%] h-[100%] bg-violet-700 bg-opacity-5 absolute ">
            <h1 className="z-10">Contacts Page 1</h1>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
          </div>
          {/* bg-slate-600 */}
          {/*  */}
          <div className="flip-card-back text-blue-500 border-blue-500 border-2 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [backdrop-filter:blur(5px)] [transform:rotateY(180deg)] w-[100%] h-[100%] bg-violet-700 bg-opacity-5">
            <h1 className="z-10">Contacts Page 2</h1>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
            <p>Non consectetur a erat nam at.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
