import React from "react";

export default function Star({ index, starCount, arrayOrder }) {
  const [chosenClass, setChosenClass] = React.useState("");
  const elementOrder = arrayOrder.indexOf(index);
  React.useEffect(() => {
    setTimeout(() => {
      setChosenClass("animate-spinSlow");
    }, elementOrder * 200);
  }, [index, elementOrder]);
  const left = Math.floor(Math.random() * 90) + 1;
  const top = (index / starCount) * 100 + 2;
  const style = { top: `${top}%`, left: `${left}%` };
  return (
    <img
      src="./src/assets/images/Star.svg"
      key={index}
      style={style}
      className={`absolute z-[1] opacity-0 ${chosenClass} w-10 h-10 drop-shadow-[0_0_10px_var(--secondary-shadow)]`}
    ></img>
  );
}
