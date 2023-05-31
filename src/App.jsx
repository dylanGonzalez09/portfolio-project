import { NavbarProvider } from "./context/NavbarProvider";
import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
    </div>
  );
}

export default App;
