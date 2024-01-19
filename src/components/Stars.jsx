export default function Stars() {
  let starCount = 30; // max 30
  function StarElements() {
    let arr = [];
    for (let i = 0; i < starCount; i++) {
      const left = Math.floor(Math.random() * 90) + 1;
      const top = (i / starCount) * 100 + 2;
      const style = { top: `${top}%`, left: `${left}%` };
      // const time = (i + 1) * 100
      // setTimeout(()=>{
      //   /* change array classname to have animation */
      // },time)
      arr.push(
        <img
          src="./src/assets/icons/Star.svg"
          key={i}
          style={style}
          className="absolute opacity-0 animate-spinSlow w-10 h-10 z-[1] drop-shadow-[0_0_10px_rgba(171,32,253,1)]"
        ></img>
      );
    }
    return arr;
  }
  return (
    <>
      <StarElements />
    </>
  );
}
