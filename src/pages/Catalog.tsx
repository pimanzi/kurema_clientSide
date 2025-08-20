import CatalogArts from "@/features/Catalog/CatalogArts";
import CatalogNav from "@/features/Catalog/CatalogNav";
import CatalogSort from "@/features/Catalog/CatalogSort";
import CatalogSearch from "@/features/Catalog/CatalogSearch";
import { useState } from "react";
import { HiFilter, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function Catalog() {
  const { t } = useTranslation();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  const closeMobileFilter = () => {
    setIsMobileFilterOpen(false);
  };

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-[8vw] xl:px-[12vw]">
      {/* Mobile Filter Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          isMobileFilterOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMobileFilter}
      />

      {/* Mobile Filter Slide Panel */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Filter Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="font-playfair text-lg font-bold text-black">
            {t("filters")}
          </h2>
          <button
            onClick={closeMobileFilter}
            className="flex items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffcb05] focus:ring-opacity-20"
            aria-label="Close mobile filter"
          >
            <HiX className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Mobile Filter Content */}
        <div className="p-4">
          <div onClick={closeMobileFilter}>
            <CatalogNav />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr]">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-[90px] mb-[70px] mt-[90px] items-center border-r border-gray-200 pr-6">
            <CatalogNav />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-[90px] space-y-5">
          {/* Mobile Filter Button and Search */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <button
                onClick={toggleMobileFilter}
                className="flex items-center gap-2 rounded-md bg-[#ffcb05] px-4 py-2 font-poppins text-sm font-medium text-black transition-colors hover:bg-[#fcde51] lg:hidden"
              >
                <HiFilter className="h-4 w-4" />
                {t("filters")}
              </button>

              {/* Search Bar */}
              <div className="flex-1 sm:w-auto sm:flex-initial">
                <CatalogSearch />
              </div>
            </div>

            {/* Sort Component */}
            <CatalogSort />
          </div>

          {/* Arts Grid */}
          <CatalogArts />
        </div>
      </div>
    </div>
  );
}
