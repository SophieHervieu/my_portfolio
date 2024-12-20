import { useEffect, useState, useRef } from "react";
import { RiHomeFill } from "react-icons/ri";
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";

export const NavBar = () => {
    const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0); // Utilisation de useRef pour conserver la valeur mutable

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scroll vers le bas : cache la navbar
        setShowNav(false);
      } else {
        // Scroll vers le haut : affiche la navbar
        setShowNav(true);
      }
      lastScrollY.current = window.scrollY; // Met à jour la valeur de lastScrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <div className={`nav ${showNav ? "visible" : "hidden"}`}>
            <div className="leftSection">
                <RiHomeFill className="homeIcon"/>
                <span>Projets</span>
                <span>A propos</span>
            </div>
            <div className="rightSection">
                <PiGithubLogo className="githubIcon"/>
                <PiLinkedinLogo className="linkedinIcon"/>
                <div className="contactBtn">
                    <span>Contactez-moi !</span>
                    <GoArrowUpRight className="arrowIcon"/>
                </div>
            </div>
        </div>
    );
}