export default function Project({ index, title, mainText, hoverText }) {
  // add more in tailwind config safelist and --cards variable

  const id = "card" + index;
  if (index === 0)
    return (
      <li
        className={`card [padding-top:calc(var(--index)*var(--cardTopPadding))] [--index:${
          index + 1
        }] sticky top-0`}
        id={id}
      >
        <div className="card-body box-border pt-0 px-8 pb-8 rounded-[50px] flex flex-col justify-center items-center transition-all duration-500 shadow-[0_0_10px_var(--secondary-shadow)] bg-transparent">
          <h2>My Projects:</h2>
        </div>
      </li>
    );
  return (
    <li
      className={`card pointer-events-none [padding-top:calc(var(--index)*var(--cardTopPadding))] [--index:${index}] sticky top-0`}
      id={id}
    >
      <div className="card-body pointer-events-auto box-border pt-0 px-8 pb-8 rounded-[50px] flex flex-col justify-center items-center gap-3 transition-all duration-500 shadow-[0_0_10px_var(--secondary-shadow)] [backdrop-filter:blur(10px)] bg-gray-800 bg-opacity-80">
        <h2 className="absolute top-0">{title}</h2>
        <p>{mainText}</p>
        <div className="group relative h-[60%] w-[60%] flex items-center justify-center">
          <p className="absolute z-10 opacity-0 transition-all drop-shadow-[0_0_5px_var(--secondary-shadow)] group-hover:shadow-black group-hover:opacity-100">
            {hoverText}
          </p>
          <img
            src={`./src/assets/images/projects/${title}.png`}
            className="overflow-hidden h-full w-full transition-all group-hover:drop-shadow-[0_0_10px_var(--secondary-shadow)] border-[1px] border-primary rounded-[50px]"
          ></img>
        </div>
      </div>
    </li>
  );
}
