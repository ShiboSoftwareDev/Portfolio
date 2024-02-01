export default function NarrowPath({ variation }) {
  // variation 1: 2 to 3
  // variation 2: 2 to 1
  // variation 3: 1 to 2
  // variation 4: 3 to 2
  let position = "";
  switch (variation) {
    case 2:
      position = "[transform:scaleX(-1)]";
      break;
    case 3:
      position = "left-[calc(-50%)]";
      break;
    case 4:
      position = "[transform:scaleX(-1)] left-[calc(50%-0%)]";
      break;
  }
  return (
    <div className="w-[60%] h-auto">
      <div className={`w-[100%] aspect-square ${position} relative`}>
        <div className="absolute top-[calc(-50%+2px)] left-[50%] bg-none w-[50%] h-full border-4 border-white rounded-full [clip-path:polygon(50%_49%,100%_49%,100%_100%,50%_100%)]"></div>
        <div className="absolute top-[calc(50%-2px)] left-[50%] bg-none w-[50%] h-full border-4 border-white rounded-full [clip-path:polygon(50%_50%,51%_0,0_0,0_51%)]"></div>
      </div>
    </div>
  );
}
