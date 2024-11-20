import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { HoverCardDemo } from "./HoverCard";
import { AuthModal } from "@/features/Authentication/AuthModal";
import { scroller, Link as ScrollerLink } from "react-scroll";

export default function Navbar() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleNavigation = (section: string) => {
    if (location.pathname === "/home") {
      // Scroll to the section if on the /home page
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -50, // Adjust for headers
      });
    } else {
      // Navigate to /home and scroll to the section
      navigate(`/home#${section}`);
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -50, // Adjust for headers
        });
      }, 100); // Delay for navigation completion
    }
  };
  return (
    <ul className="flex items-center gap-6">
      {/* Home */}
      <li className="relative">
        <NavLink
          className="relative block transition-all duration-300 hover:scale-x-110"
          to="/home"
        >
          Home
          <span className="linkHover absolute left-0 top-[25px] h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full" />
        </NavLink>
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
        <a
          className="relative block font-poppins transition-all duration-300 hover:scale-x-110"
          href="#contact"
        >
          Contact
          <span className="linkHover absolute left-0 top-[25px] h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full" />
        </a>
      </li>

      {/* Join Us */}

      {/* Cart */}
      <li>
        <NavLink className="font-poppins" to="/cart">
          Cart
        </NavLink>
      </li>

      <AuthModal>
        <button className="rounded-md border border-black bg-black px-3 py-2 font-poppins font-semibold text-white transition-all duration-300 hover:scale-x-110">
          Join us
        </button>
      </AuthModal>
    </ul>
  );
}
