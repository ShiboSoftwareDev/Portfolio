import Project from "../components/Project";

export default function ProjectsPage() {
  let array = [1, 2, 3, 4];
  return (
    <section
      id="projectsPage"
      className="[&>*]:z-10 bg-gray-800 text-center w-full h-auto text-primary"
    >
      <div className="container w-[60%] my-0 mx-auto">
        <ul id="cards" className="list-none pl-0 grid grid-cols-1 [&>*]:z-10">
          {array.map((element) => (
            <Project key={element} index={element} />
          ))}
        </ul>
      </div>
      <div className="w-full h-20"></div>
    </section>
  );
}
