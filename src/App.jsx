import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";
import Stars from "./components/Stars";
import StaticStars from "./components/StaticStars";

function App() {
  return (
    <main className="relative ">
      <Navbar />
      <Stars />
      <StaticStars count={120} />
      <AboutPage />
      <ProjectsPage />
      <BlogPage />
      <ContactsPage />
    </main>
  );
}

export default App;
