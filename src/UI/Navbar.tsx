import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { HoverCardDemo } from "./HoverCard";
import { AuthModal } from "@/features/Authentication/AuthModal";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
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
        <a
          className="relative block font-poppins transition-all duration-300 hover:scale-x-110"
          href="#about"
        >
          About
          <span className="linkHover absolute left-0 top-[25px] h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full" />
        </a>
      </li>

      {/* Arts */}
      <li className="relative">
        <a
          className="relative block font-poppins transition-all duration-300 hover:scale-x-110"
          href="#arts"
        >
          Arts
          <span className="linkHover absolute left-0 top-[25px] h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full" />
        </a>
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
      <AuthModal>
        <button className="rounded-md border border-black bg-black px-3 py-2 font-poppins font-semibold text-white transition-all duration-300 hover:scale-x-110">
          Join us
        </button>
      </AuthModal>

      {/* Cart */}
      <li>
        <NavLink className="font-poppins" to="/cart">
          Cart
        </NavLink>
      </li>
    </ul>
  );
}
