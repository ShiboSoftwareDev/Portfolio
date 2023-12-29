export default function AboutPage() {
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
  const imagesElement = imagesArray.map((name, index, array) => {
    console.log(Math.round(100 / array.length) * index);
    const style =
      index % 2
        ? {
            left: `${Math.round(100 / array.length) * index}%`,
            top: "25%",
          }
        : {
            left: `${Math.round(100 / array.length) * index}%`,
            top: "75%",
          };
    return (
      <img
        key={index}
        src={`./src/assets/icons/${name}.svg`}
        alt={`${name} icon`}
        className="absolute drop-shadow-[0_0_10px_rgba(171,32,253,1)] animate-customPulse delay-100"
        style={style}
      />
    );
  });
  return (
    <section className="relative border-2 border-blue-800 flex items-center justify-center w-full aspect-[1/1] bg-gray-800">
      <h1
        id="aboutPage"
        className="text-blue-500 drop-shadow-[0_0_10px_rgba(171,32,253,1)]"
      >
        My name is Ahmed Shebani, I am a junior web developer
      </h1>
      {imagesElement}
    </section>
  );
}
