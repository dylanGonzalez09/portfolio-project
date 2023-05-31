import { useState, useEffect } from "react";

// Determinar si el tamanio de la pantalla toca el punto (query) o no
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("rezise", listener);

    return () => window.removeEventListener("rezise", listener);
  });

  return matches;
};

export default useMediaQuery;
