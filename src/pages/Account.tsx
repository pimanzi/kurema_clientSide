import AccountNav from "@/UI/AccountNav";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function Account() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-[8vw] xl:px-[12vw]">
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="font-playfair text-lg font-bold text-black">
            {t("accountMenu")}
          </h2>
          <button
            onClick={closeMobileMenu}
            className="flex items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffcb05] focus:ring-opacity-20"
            aria-label="Close mobile menu"
          >
            <HiX className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-4">
          <div onClick={closeMobileMenu}>
            <AccountNav />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr]">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-[90px] mb-[70px] mt-[90px] items-center border-r border-gray-200 pr-6">
            <AccountNav />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-[90px] space-y-5">
          {/* Mobile Menu Button */}
          <div className="mb-4 lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center gap-2 rounded-md bg-[#ffcb05] px-4 py-2 font-poppins text-sm font-medium text-black transition-colors hover:bg-[#fcde51]"
            >
              <HiMenu className="h-4 w-4" />
              {t("accountMenu")}
            </button>
          </div>

          {/* Content Area */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
