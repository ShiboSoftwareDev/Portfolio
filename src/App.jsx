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
      <AboutPage />
      <ProjectsPage />
      <BlogPage />
      <ContactsPage />
    </main>
  );
}

export default App;
