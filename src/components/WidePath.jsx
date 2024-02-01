export default function WidePath({ variation }) {
  // variation 1: right to left
  // variation 2: left to right
  let position = variation === 2 ? "[transform:scaleX(-1)]" : "";
  return (
    <div className="w-[60%] h-auto">
      <div className={`w-[100%] aspect-square ${position} relative`}>
        <div className="absolute top-[calc(-50%+2px)] left-[0] bg-none w-full aspect-square border-4 border-white rounded-full [clip-path:polygon(50%_49%,100%_49%,100%_100%,50%_100%)]"></div>
        <div className="absolute top-[calc(50%-2px)] left-[0] bg-none w-full aspect-square border-4 border-white rounded-full [clip-path:polygon(50%_50%,51%_0,0_0,0_51%)]"></div>
      </div>
    </div>
  );
}
