import { createContext, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <NavbarContext.Provider
      value={{ selectedPage, setSelectedPage, setIsMenuToggled, isMenuToggled }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarProvider };

export default NavbarContext;
