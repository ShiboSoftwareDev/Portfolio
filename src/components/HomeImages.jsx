import React from "react";

export default function HomeImages() {
  const imagesArray = [
    "git",
    "vite",
    "vscode",
    "github",
    "tailwind",
    "react",
    "javascript",
    "html",
    "css",
    "node",
  ];
  // if i get the same state twice the element will not re render
  const [chosenIcon, setChosenIcon] = React.useState(
    Math.floor(Math.random() * (imagesArray.length - 1))
  );
  React.useEffect(() => {
    setInterval(() => {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * (imagesArray.length - 1));
      } while (randomNum === chosenIcon);
      setChosenIcon(randomNum);
    }, 3000);
  });
  const imagesElement = imagesArray.map((name, index, array) => {
    let customAction =
      index === chosenIcon ? "animate-customAction" : "opacity-0";
    const style =
      index % 2
        ? {
            left: `${Math.round(100 / array.length) * (index + 1)}%`,
            top: "25%",
          }
        : {
            left: `${Math.round(100 / array.length) * (index + 1)}%`,
            top: "75%",
          };
    return (
      <img
        key={index}
        src={`./src/assets/icons/${name}.svg`}
        alt={`${name} icon`}
        className={`absolute drop-shadow-[0_0_10px_rgba(171,32,253,1)] ${customAction}`}
        style={style}
      />
    );
  });

  return <> {imagesElement}</>;
}
