import { useState, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import { HoverCardDemo } from "./HoverCard";
import { scroller, Link as ScrollerLink } from "react-scroll";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  onLinkClick?: () => void;
}

export default function Navbar({ onLinkClick }: NavbarProps) {
  const { t } = useTranslation();
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
    // Close mobile menu after navigation
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const handleCatalogNavigation = () => {
    setIsHovered(false); // Close hover card immediately
    navigate("/catalog");
    // Close mobile menu after navigation
    if (onLinkClick) {
      onLinkClick();
    }
  };

  // Ensure the page scrolls to top when navigating directly to any page (e.g., catalog)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Track changes in location

  return (
    <ul className="flex flex-col items-center gap-6 xl:flex-row xl:items-center">
      {/* Home */}
      <li className="relative w-full xl:w-auto">
        <ScrollerLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => handleNavigation("about")}
          className="block cursor-pointer rounded px-2 py-3 font-poppins transition-all duration-300 hover:bg-black hover:text-[#ffcb05] xl:rounded-none xl:px-0 xl:py-0 xl:hover:scale-x-110 xl:hover:bg-transparent xl:hover:text-black"
        >
          {t("navHome")}
          <span className="linkHover absolute left-0 top-[25px] hidden h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full xl:block" />
        </ScrollerLink>
      </li>

      {/* About */}
      <li className="relative w-full xl:w-auto">
        <ScrollerLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => handleNavigation("about")}
          className="block cursor-pointer rounded px-2 py-3 font-poppins transition-all duration-300 hover:bg-black hover:text-[#ffcb05] xl:rounded-none xl:px-0 xl:py-0 xl:hover:scale-x-110 xl:hover:bg-transparent xl:hover:text-black"
        >
          {t("footerAbout")}
          <span className="linkHover absolute left-0 top-[25px] hidden h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full xl:block" />
        </ScrollerLink>
      </li>

      {/* Arts */}
      <li className="relative w-full xl:w-auto">
        <ScrollerLink
          to="arts"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => handleNavigation("arts")}
          className="relative block rounded px-2 py-3 font-poppins transition-all duration-300 hover:bg-black hover:text-[#ffcb05] xl:rounded-none xl:px-0 xl:py-0 xl:hover:scale-x-110 xl:hover:bg-transparent xl:hover:text-black"
          href="#arts"
        >
          {t("navArts")}
          <span className="linkHover absolute left-0 top-[25px] hidden h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full xl:block" />
        </ScrollerLink>
      </li>

      {/* Catalog */}
      <li className="relative w-full xl:w-auto">
        {/* Desktop version with HoverCard */}
        <div className="hidden xl:block">
          <HoverCardDemo>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                onClick={handleCatalogNavigation}
                className="relative flex cursor-pointer items-center font-poppins transition-all duration-300 hover:scale-x-110"
              >
                {t("footerCatalogue")}
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
              </div>
            </div>
          </HoverCardDemo>
        </div>

        {/* Mobile version without HoverCard */}
        <div className="xl:hidden">
          <div
            onClick={handleCatalogNavigation}
            className="relative flex cursor-pointer items-center rounded px-2 py-3 font-poppins transition-all duration-300 hover:bg-black hover:text-[#ffcb05]"
          >
            {t("footerCatalogue")}
          </div>
        </div>
      </li>

      {/* Contact */}
      <li className="relative w-full xl:w-auto">
        <ScrollerLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => handleNavigation("contact")}
          className="relative block rounded px-2 py-3 font-poppins transition-all duration-300 hover:bg-black hover:text-[#ffcb05] xl:rounded-none xl:px-0 xl:py-0 xl:hover:scale-x-110 xl:hover:bg-transparent xl:hover:text-black"
          href="#arts"
        >
          {t("navContact")}
          <span className="linkHover absolute left-0 top-[25px] hidden h-[2px] w-0 origin-left bg-black transition-all duration-300 group-hover:w-full xl:block" />
        </ScrollerLink>
      </li>

      {/* Join Us */}

      {/* Cart */}
    </ul>
  );
}
