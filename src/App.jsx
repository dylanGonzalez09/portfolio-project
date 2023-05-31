import { NavbarProvider } from "./context/NavbarProvider";
import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState, useEffect } from "react";

function App() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      // Si el navbar esta en el top
      if(window.screenY === 0) setIsTopOfPage(true);
    }
  }, []);


  return (
    <div className="app bg-deep-blue">
      <NavbarProvider>
        <Navbar isTopOfPage={isTopOfPage}/>
      </NavbarProvider>
    </div>
  );
}

export default App;
