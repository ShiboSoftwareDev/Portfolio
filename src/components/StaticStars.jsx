import StaticStar from "./StaticStar";

export default function StaticStars({ count, indexZ }) {
  let starCount = 30; // max 30 tested
  if (typeof count === "number") {
    starCount = count;
  }
  const starsArray = [];
  for (let i = 0; i < starCount; i++) {
    starsArray.push(i);
  }
  const starElements = starsArray.map((element, index) => {
    return (
      <StaticStar
        key={index}
        index={index}
        starCount={starCount}
        indexZ={indexZ}
      />
    );
  });

  return <>{starElements}</>;
}
