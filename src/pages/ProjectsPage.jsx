import Project from "../components/Project";
import projectsData from "../assets/imports";

export default function ProjectsPage() {
  let projectsArray = projectsData.map((element, index) => {
    return (
      <Project
        key={index}
        index={index}
        title={element.title}
        mainText={element.mainText}
        hoverText={element.hoverText}
        link={element.link}
      />
    );
  });
  return (
    <section
      id="projectsPage"
      className="[&>*]:z-10 bg-gray-800 text-center w-full h-auto text-primary"
    >
      <div className="container w-[60%] my-0 mx-auto">
        <ul id="cards" className="list-none pl-0 grid grid-cols-1 [&>*]:z-10">
          {projectsArray}
        </ul>
      </div>
      <div className="w-full h-20"></div>
    </section>
  );
}
