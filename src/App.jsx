import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";
import NavbarPlaceholder from "./components/NavbarPlaceholder";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <main>
      <Navbar />
      <NavbarPlaceholder />
      <div className="w-[80%] aspect-[1/1] border-2 border-black">
        <AboutPage />
      </div>
      <ProjectsPage />
      <BlogPage />
      <ContactsPage />
    </main>
  );
}

export default App;
