export default function Navbar() {
  return (
    <nav className="justify-center items-center flex border-2 border-black gap-5 text-blue-300 fixed w-full h-[7%]">
      <a href={"#aboutPage"}>About Page</a>
      <a href={"#projectsPage"}>Projects Page</a>
      <a href={"#blogPage"}>Blog Page</a>
      <a href={"#contactsPage"}>Contacts Page</a>
    </nav>
  );
}
