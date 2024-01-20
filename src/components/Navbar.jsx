export default function Navbar() {
  return (
    <nav className="justify-center items-center flex gap-5 text-blue-500 drop-shadow-[0_0_10px_rgba(171,32,253,1)] z-20 fixed w-full h-[7%]">
      <a href={"#aboutPage"}>About Page</a>
      <a href={"#projectsPage"}>Projects Page</a>
      <a href={"#blogPage"}>Blog Page</a>
      <a href={"#contactsPage"}>Contacts Page</a>
    </nav>
  );
}
