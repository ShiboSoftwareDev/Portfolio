export default function Navbar() {
  return (
    <nav className="justify-center z-20 items-center flex gap-5 text-blue-500 drop-shadow-[0_0_10px_rgba(126,34,206,1)] fixed w-full h-[7%]">
      <a href={"#aboutPage"}>About Page</a>
      <a href={"#projectsPage"}>Projects Page</a>
      <a href={"#blogPage"}>Blog Page</a>
      <a href={"#contactsPage"}>Contacts Page</a>
    </nav>
  );
}
