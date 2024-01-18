import React from "react";
import HomeImages from "../components/HomeImages";

export default function AboutPage() {
  const [pop, setPop] = React.useState(false);
  function toggle() {
    setTimeout(() => {
      setPop(false);
      console.log("popped");
    }, 3000);
    setPop((prev) => !prev);
  }
  return (
    <section
      onClick={toggle}
      className="relative flex items-center justify-center w-full aspect-[1/1] md:aspect-[1/0.7] lg:aspect-[1/0.6] xl:aspect-[1/0.5] bg-gray-800"
    >
      <h1
        id="aboutPage"
        className="text-blue-500 drop-shadow-[0_0_10px_rgba(171,32,253,1)]"
      >
        My name is Ahmed Shebani, I am a junior web developer
      </h1>
      <HomeImages pop={pop} />
    </section>
  );
}
