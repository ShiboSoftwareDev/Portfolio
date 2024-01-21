export default function StaticStar({ index, starCount, indexZ }) {
  const rotation = Math.floor(Math.random() * 4);
  let position = "";
  const depth = indexZ ? "z-[-1]" : "z-[1]";
  switch (rotation) {
    case 0:
      position = "rotate-0";
      break;
    case 1:
      position = "rotate-3";
      break;
    case 2:
      position = "rotate-6";
      break;
    case 3:
      position = "rotate-12";
      break;
  }

  const left = Math.floor(Math.random() * 90) + 1;
  const top = (index / starCount) * 100 + 0.5;
  const style = { top: `${top}%`, left: `${left}%` };
  return (
    <img
      src="./src/assets/images/StaticStar.svg"
      key={index}
      style={style}
      className={`absolute ${depth} w-1 h-1 ${position}`}
    ></img>
  );
}
