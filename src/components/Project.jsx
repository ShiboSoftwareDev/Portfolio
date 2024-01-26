export default function Project({ index }) {
  const id = "card" + index;
  console.log(id);
  return (
    <li className="card sticky top-0" id={id}>
      <div className="card-body box-border pt-0 px-8 pb-8 rounded-[50px] flex flex-col justify-between items-center transition-all duration-500 shadow-[0_0_10px_var(--secondary-shadow)] [backdrop-filter:blur(10px)] bg-white bg-opacity-80">
        <h2 className="drop-shadow-[0_0_10px_var(--secondary-shadow)]">
          Project {index}
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </li>
  );
}
