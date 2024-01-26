export default function ProjectsPage() {
  return (
    <section
      id="projectsPage"
      className="[&>*]:z-10 bg-gray-800 text-center w-full h-auto text-primary"
    >
      <div className="container w-[60%] my-0 mx-auto">
        <ul id="cards" className="list-none pl-0 grid grid-cols-1 [&>*]:z-10">
          <li className="card sticky top-0" id="card1">
            <div className="card-body box-border p-8 rounded-[50px] flex flex-col justify-center items-center transition-all duration-500 shadow-[0_0_10px_var(--secondary-shadow)] [backdrop-filter:blur(10px)] bg-secondary bg-opacity-5">
              <h2 className="drop-shadow-[0_0_10px_var(--secondary-shadow)]">
                Project 1
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </p>
              </p>
            </div>
          </li>
          <li className="card sticky top-0" id="card2">
            <div className="card-body box-border p-8 rounded-[50px] flex flex-col justify-center items-center transition-all duration-500 shadow-[0_0_10px_var(--secondary-shadow)] [backdrop-filter:blur(10px)] bg-secondary bg-opacity-5">
              <h2 className="drop-shadow-[0_0_10px_var(--secondary-shadow)]">
                Project 2
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </li>
          <li className="card sticky top-0" id="card3">
            <div className="card-body box-border p-8 rounded-[50px] flex flex-col justify-center items-center transition-all duration-500 shadow-[0_0_10px_var(--secondary-shadow)] [backdrop-filter:blur(10px)] bg-secondary bg-opacity-5">
              <h2 className="drop-shadow-[0_0_10px_var(--secondary-shadow)]">
                Project 3
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </li>
          <li className="card sticky top-0" id="card4">
            <div className="card-body box-border p-8 rounded-[50px] flex flex-col justify-center items-center transition-all duration-500 shadow-[0_0_10px_var(--secondary-shadow)] [backdrop-filter:blur(10px)] bg-secondary bg-opacity-5">
              <h2 className="drop-shadow-[0_0_10px_var(--secondary-shadow)]">
                Project 4
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full h-20"></div>
    </section>
  );
}
