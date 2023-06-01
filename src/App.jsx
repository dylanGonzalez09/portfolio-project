import { NavbarProvider } from "./context/NavbarProvider";
import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState, useEffect } from "react";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Si el navbar esta en el top
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <NavbarProvider>
        <Navbar isTopOfPage={isTopOfPage} />
        <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            // Navbar lateral
            <DotGroup />
          )}
          <Landing />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Projects />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Testimonials />
        </div>
        <LineGradient />

        <div className="w-5/6 mx-auto">
          <Contact />
        </div>
        <Footer />
      </NavbarProvider>
    </div>
  );
}

export default App;
