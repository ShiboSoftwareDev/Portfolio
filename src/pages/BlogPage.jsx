import WidePath from "../components/WidePath";
import NarrowPath from "../components/NarrowPath";
import StraightPath from "../components/StraightPath";
import Planet from "../components/Planet";

export default function BlogPage() {
  const blogs = { 1: {}, 2: {}, 3: {}, 4: {} };
  const blogsArray = Object.keys(blogs);
  const positionArray = [];
  blogsArray.forEach(() => {
    positionArray.push(Math.ceil(Math.random() * 3));
  });
  const planets = Object.keys(blogs).map((element, index) => {
    let pathElement = <></>;
    if (index === 0 || positionArray[index - 1] === 2) {
      if (positionArray[index] === 2) {
        pathElement = <StraightPath variation={3} />;
      } else if (positionArray[index] === 3) {
        pathElement = <NarrowPath variation={4} />;
      } else {
        pathElement = <NarrowPath variation={3} />;
      }
    } else if (positionArray[index - 1] === 1) {
      if (positionArray[index] === 1) {
        pathElement = <StraightPath variation={2} />;
      } else if (positionArray[index] === 2) {
        pathElement = <NarrowPath variation={2} />;
      } else {
        pathElement = <WidePath variation={2} />;
      }
    } else {
      if (positionArray[index] === 1) {
        pathElement = <WidePath variation={1} />;
      } else if (positionArray[index] === 2) {
        pathElement = <NarrowPath variation={1} />;
      } else {
        pathElement = <StraightPath variation={1} />;
      }
    }
    return (
      <div
        className="w-full h-full relative flex flex-col items-center justify-center"
        key={index}
      >
        {pathElement}
        <Planet positionArray={positionArray} order={index} />
      </div>
    );
  });
  return (
    <section
      id="blogPage"
      className="[&>*]:z-10 bg-gray-800 w-full overflow-hidden h-auto pb-[15%] flex flex-col items-center justify-center"
    >
      <div className="w-[25%] aspect-square border-2 border-white"></div>
      {planets}
    </section>
  );
}
