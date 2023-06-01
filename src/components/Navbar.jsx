import { useContext } from "react";
import NavbarContext from "../context/NavbarProvider";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "./Link";
import openMenuIcon from "../assets/menu-icon.svg";
import closeMenuIcon from "../assets/close-icon.svg";

const Navbar = ({ isTopOfPage }) => {
  const { setIsMenuToggled, isMenuToggled } = useContext(NavbarContext);
  const iseAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        {/* Logo */}
        <h4 className="font-playfair text-3xl font-bold">DG</h4>

        {/* Desk nav */}
        {iseAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" />
            <Link page="Skills" />
            <Link page="Projects" />
            <Link page="Testimonials" />
            <Link page="Contact" />
          </div>
        ) : (
          <div>
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img src={openMenuIcon} alt="menu-icon" />
            </button>
          </div>
        )}

        {/* Mobile menu boton */}
        {!iseAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* Close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src={closeMenuIcon} alt="menu-icon" />
              </button>
            </div>

            {/* Menu item */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link page="Home" />
              <Link page="Skills" />
              <Link page="Projects" />
              <Link page="Testimonials" />
              <Link page="Contact" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
