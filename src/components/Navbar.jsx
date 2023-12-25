import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1 className="bg-green-900 text-red-300">helo</h1>
      <Link to={"projects"}>click me</Link>
      <Link to={"./"}>home</Link>
    </nav>
  );
}
