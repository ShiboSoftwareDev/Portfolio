import React from "react";
import CardBack from "../components/CardBack";
import CardFront from "../components/CardFront";

export default function ContactsPage() {
  //Animate some shapes that translate or pop into the card when hovered over

  const [flipped, setFlipped] = React.useState(false);
  function flip() {
    setFlipped((prev) => !prev);
  }

  return (
    <section
      id="contactsPage"
      className="bg-gray-800 [&>*]:z-10 text-center w-full h-[900px] flex flex-col items-center"
    >
      <div
        id="flip-card-container"
        onClick={flip}
        className="bg-transparent w-[500px] h-[700px] [perspective:2000px]"
      >
        <div
          id="flip-card-inner"
          className={`relative w-[100%] h-[100%] text-center [transition:transform_0.8s] [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <CardFront />
          <CardBack />
        </div>
      </div>
    </section>
  );
}
