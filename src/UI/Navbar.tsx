import { useState, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HoverCardDemo } from "./HoverCard";
import { scroller, Link as ScrollerLink } from "react-scroll";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to track pathname
  const [isHovered, setIsHovered] = useState(false);

  // Scroll to the top of the page on route change
  const handleNavigation = (section: string) => {
    if (location.pathname === "/home") {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    } else {
      // Scroll to the top of the page first
      window.scrollTo(0, 0); // This will scroll to the top
      navigate(`/home#${section}`);
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -50,
        });
      }, 100);
    }
  };

  // Ensure the page scrolls to top when navigating directly to any page (e.g., catalog)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Track changes in location

  return (
    <ul className="flex items-center gap-6">
      {/* Home */}
      <li className="relative">
        <ScrollerLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => handleNavigation("about")}
          className="block cursor-pointer font-poppins transition-all duration-300 hover:scale-x-110"
        >
          Home
          <span className="linkHover absolute left-0 top-[25px] h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full" />
        </ScrollerLink>
      </li>

      {/* About */}
      <li className="relative">
        <ScrollerLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => handleNavigation("about")}
          className="block cursor-pointer font-poppins transition-all duration-300 hover:scale-x-110"
        >
          About
          <span className="linkHover absolute left-0 top-[25px] h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full" />
        </ScrollerLink>
      </li>

      {/* Arts */}
      <li className="relative">
        <ScrollerLink
          to="arts"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => handleNavigation("arts")}
          className="relative block font-poppins transition-all duration-300 hover:scale-x-110"
          href="#arts"
        >
          Arts
          <span className="linkHover absolute left-0 top-[25px] h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full" />
        </ScrollerLink>
      </li>

      {/* Catalog */}
      <HoverCardDemo>
        <li
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink
            className="relative flex items-center font-poppins transition-all duration-300 hover:scale-x-110"
            to="/catalog"
          >
            Catalog
            {isHovered ? (
              <RiArrowDropUpLine
                className="ml[-4px]"
                size={25}
              ></RiArrowDropUpLine>
            ) : (
              <RiArrowDropDownLine
                className="ml[-4px]"
                size={25}
              ></RiArrowDropDownLine>
            )}
          </NavLink>
        </li>
      </HoverCardDemo>

      {/* Contact */}
      <li className="relative">
        <ScrollerLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => handleNavigation("contact")}
          className="relative block font-poppins transition-all duration-300 hover:scale-x-110"
          href="#arts"
        >
          Contact
          <span className="linkHover absolute left-0 top-[25px] h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full" />
        </ScrollerLink>
      </li>

      {/* Join Us */}

      {/* Cart */}
      <li>
        <NavLink className="font-poppins" to="/cart">
          Cart
        </NavLink>
      </li>
    </ul>
  );
}
