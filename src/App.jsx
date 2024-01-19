import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";
import Stars from "./components/Stars";

function App() {
  return (
    <main className="relative border-2 border-black">
      <Navbar />
      <Stars />
      <AboutPage />
      <ProjectsPage />
      <BlogPage />
      <ContactsPage />
    </main>
  );
}

export default App;
