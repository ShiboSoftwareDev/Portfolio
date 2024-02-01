export default function Navbar() {
  return (
    <nav className="justify-center z-20 items-center flex gap-5 text-primary drop-shadow-[0_0_10px_var(--secondary-shadow)] fixed w-full h-[7%]">
      <a href={"#homePage"}>Home Page</a>
      <a href={"#projectsPage"}>Projects Page</a>
      <a href={"#aboutPage"}>About Page</a>
      <a href={"#contactsPage"}>Contacts Page</a>
    </nav>
  );
}
