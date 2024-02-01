import WidePath from "../components/WidePath";
import NarrowPath from "../components/NarrowPath";
import StraightPath from "../components/StraightPath";
import Planet from "../components/Planet";

export default function AboutPage() {
  const blogs = {
    1: {
      title: "Started college",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    2: {
      title: "Started learning web development",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    3: {
      title: "Made my first website",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    4: {
      title: "Some other stuff",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
  };
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
        <Planet
          positionArray={positionArray}
          order={index}
          blog={blogs[element]}
        />
      </div>
    );
  });
  return (
    <section
      id="aboutPage"
      className="[&>*]:z-10 bg-gray-800 w-full overflow-hidden h-auto pb-[15%] flex flex-col items-center justify-center"
    >
      <div className="w-[20%] flex items-center justify-center aspect-square text-primary drop-shadow-[0_0_10px_var(--secondary-shadow)]">
        <h1>My coding journey:</h1>
      </div>
      {planets}
    </section>
  );
}
