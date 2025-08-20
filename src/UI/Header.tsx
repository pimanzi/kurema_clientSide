import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarActions from "./NavbarActions";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 flex h-[60px] items-center justify-between px-4 shadow-md transition-all duration-300 sm:px-8 md:px-12 xl:h-[65px] xl:px-[20vw] ${
          isScrolled ? "bg-[#ffcb05]/90 backdrop-blur-sm" : "bg-[#ffcb05]"
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation - Hidden below 1440px */}
        <div className="hidden xl:flex">
          <Navbar />
        </div>

        {/* Desktop Actions - Hidden below 1440px */}
        <div className="hidden xl:flex">
          <NavbarActions />
        </div>

        {/* Mobile/Tablet Actions - Show below 1440px */}
        <div className="flex items-center gap-3 xl:hidden">
          <div className="scale-90 sm:scale-100">
            <NavbarActions />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-[#fcde51] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6 text-black" />
            ) : (
              <HiMenu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] transform bg-[#ffcb05] shadow-xl transition-transform duration-300 ease-in-out xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between border-b border-[#fcde51] p-4">
          <h2 className="font-playfair text-lg font-bold text-black">Menu</h2>
          <button
            onClick={closeMobileMenu}
            className="flex items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-[#fcde51] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            aria-label="Close mobile menu"
          >
            <HiX className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex h-full flex-col">
          {/* Navigation Links */}
          <nav className="flex-1 p-4 pt-6">
            <div onClick={closeMobileMenu}>
              <Navbar onLinkClick={closeMobileMenu} />
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="border-t border-[#fcde51] p-4">
            <p className="text-center font-poppins text-sm text-gray-700">
              © 2025 Kurema Platform
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
