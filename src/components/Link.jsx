import { useContext } from "react";
import NavbarContext from "../context/NavbarProvider";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page }) => {
  const { selectedPage, setSelectedPage } = useContext(NavbarContext);

  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
