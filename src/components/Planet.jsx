export default function Planet({ positionArray, order }) {
  // location 1: left planet
  // location 2: center planet
  // location 3: right planet
  let location = positionArray[order];
  let size = Math.floor(Math.random() * 5);
  const colorArray = [
    "bg-purpleNebula drop-shadow-[0_0_10px_var(--purple-shadow)]",
    "bg-greenNebula drop-shadow-[0_0_10px_var(--green-shadow)]",
    "bg-secondary drop-shadow-[0_0_10px_var(--secondary-shadow)]",
  ];

  const widthArray = [
    "w-[calc(15%+100%)]",
    "w-[calc(20%+100%)]",
    "w-[calc(25%+100%)]",
    "w-[calc(30%+100%)]",
    "w-[calc(35%+100%)]",
  ];

  let position = "";
  switch (location) {
    case 3:
      position = "left-[50%]";
      break;
    case 1:
      position = "left-[-50%]";
      break;
  }
  return (
    <div className="w-[60%] h-auto flex items-center justify-center">
      <div
        className={`flex relative ${position} ${
          colorArray[Math.floor(Math.random() * 3)]
        } items-center justify-center w-[25%] aspect-square border-2 border-white rounded-full`}
      >
        <div
          className={`absolute flex items-center justify-center bg-none ${
            widthArray[Math.floor(Math.random() * 5)]
          } aspect-square ${
            size >= 4 ? "border-2" : ""
          } border-white rounded-full box-content`}
        >
          <div
            className={`absolute flex items-center justify-center bg-none ${
              widthArray[Math.floor(Math.random() * 5)]
            } aspect-square ${
              size >= 3 ? "border-2" : ""
            } border-white rounded-full box-content`}
          >
            <div
              className={`absolute flex items-center justify-center bg-none ${
                widthArray[Math.floor(Math.random() * 5)]
              } aspect-square ${
                size >= 2 ? "border-2" : ""
              } border-white rounded-full box-content`}
            >
              <div
                className={`absolute bg-none ${
                  widthArray[Math.floor(Math.random() * 5)]
                } aspect-square ${
                  size >= 1 ? "border-2" : ""
                } border-white rounded-full box-content`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
