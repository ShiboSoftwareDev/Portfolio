import Star from "./Star";

export default function Stars({ count }) {
  let starCount = 30; // max 30 tested
  if (typeof count === "number") {
    starCount = count;
  }
  const starsArray = [];
  for (let i = 0; i < starCount; i++) {
    starsArray.push(i);
  }
  const starsArrayCopy = [...starsArray];
  const arrayOrder = starsArray.map(() => {
    return starsArrayCopy.splice(
      Math.floor(Math.random() * starsArrayCopy.length),
      1
    )[0];
  });
  const starElements = starsArray.map((element, index) => {
    return (
      <Star
        key={index}
        index={index}
        starCount={starCount}
        arrayOrder={arrayOrder}
      />
    );
  });

  return <>{starElements}</>;
}
