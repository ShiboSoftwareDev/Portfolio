import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import Stars from "./components/Stars";
import StaticStars from "./components/StaticStars";

function App() {
  return (
    <main className="relative ">
      <Navbar />
      <Stars />
      <StaticStars count={120} />
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <ContactsPage />
    </main>
  );
}

export default App;
