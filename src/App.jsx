import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PreviousCompanies from "./components/PreviousCompanies";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <PreviousCompanies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
