import React from "react";
export default function HomeImages({ pop }) {
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
  const [chosenIcon, setChosenIcon] = React.useState(
    Math.floor(Math.random() * imagesArray.length)
  );
  React.useEffect(() => {
    const loop = setInterval(() => {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * imagesArray.length);
      } while (randomNum === chosenIcon);
      setChosenIcon(randomNum);
    }, 3000);
    return () => clearInterval(loop);
  });
  const imagesElement = imagesArray.map((name, index, array) => {
    let customAction = pop
      ? "animate-customPulse"
      : index === chosenIcon
      ? "animate-customAction"
      : "opacity-0";
    const style =
      index % 2
        ? {
            left: `${Math.round(90 / array.length) * (index + 1)}%`,
            top: "25%",
          }
        : {
            left: `${Math.round(90 / array.length) * (index + 1)}%`,
            top: "75%",
          };
    return (
      <img
        key={index}
        src={`./src/assets/images/icons/${name}.svg`}
        alt={`${name} icon`}
        className={`absolute drop-shadow-[0_0_10px_var(--secondary-shadow)] ${customAction}`}
        style={style}
      />
    );
  });

  return <> {imagesElement}</>;
}
