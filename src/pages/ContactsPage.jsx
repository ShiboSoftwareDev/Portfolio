import React from "react";

export default function ContactsPage() {
  //Animate some shapes that translate or pop into the card when hovered over

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
        id="flip-card-container"
        onClick={flip}
        className="bg-transparent w-[500px] h-[700px] [perspective:2000px] z-10"
      >
        <div
          id="flip-card-inner"
          className={`relative w-[100%] h-[100%] text-center [transition:transform_0.8s] [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div
            id="flip-card-front"
            className="text-blue-500 border-blue-500 border-2 [backface-visibility:hidden] [backdrop-filter:blur(5px)] w-[100%] h-[100%] bg-violet-700 bg-opacity-5 absolute overflow-hidden rounded-lg"
          >
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
          <div
            id="flip-card-back"
            className="text-blue-500 border-blue-500 border-2 [backface-visibility:hidden] [backdrop-filter:blur(5px)] w-[100%] h-[100%] bg-violet-700 bg-opacity-5 absolute overflow-hidden rounded-lg [transform:rotateY(180deg)]"
          >
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
