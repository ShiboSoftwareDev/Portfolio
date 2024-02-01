export default function StraightPath({ variation }) {
  let position = "";
  //   variation 1: right line
  //   variation 2: left line
  //   variation 3: center line
  switch (variation) {
    case 2:
      position = "[transform:scaleX(-1)]";
      break;
    case 3:
      position = "left-[calc(-50%+0.25%)]";
      break;
  }
  return (
    <div className="w-[60%] h-auto">
      <div className={`w-[100%] aspect-square ${position} relative`}>
        <div className="absolute bg-none w-[100%] [aspect-ratio:1/1.01] border-r-4 border-white"></div>
      </div>
    </div>
  );
}
