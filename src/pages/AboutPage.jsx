import React from "react";
import HomeImages from "../components/HomeImages";

export default function AboutPage() {
  const [pop, setPop] = React.useState(false);
  function toggle() {
    setTimeout(() => {
      setPop(false);
    }, 3000);
    setPop((prev) => !prev);
  }
  return (
    <section
      id="aboutPage"
      onClick={toggle}
      className="relative [&>*]:z-10 flex items-center justify-center w-full aspect-[1/1] md:aspect-[1/0.7] lg:aspect-[1/0.6] xl:aspect-[1/0.5] bg-gray-800"
    >
      <h1 className="text-primary drop-shadow-[0_0_10px_var(--secondary-shadow)]">
        My name is Ahmed Shebani, I am a junior web developer
      </h1>
      <HomeImages pop={pop} />
    </section>
  );
}
