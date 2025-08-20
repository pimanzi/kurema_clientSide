import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function CatalogNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value: string) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  const choosenCategory = searchParams.get("category") || "all";
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-4 font-playfair text-lg font-bold text-gray-800">
        {t("categories") || "Categories"}
      </h3>
      <ul className="space-y-2">
        <li
          onClick={() => handleClick("all")}
          className={`block cursor-pointer rounded-md px-3 py-2 font-poppins text-sm font-medium transition-all duration-300 sm:text-base ${
            choosenCategory === "all"
              ? "cursor-not-allowed bg-[#ffcb05] text-black"
              : "text-gray-700 hover:bg-[#ffcb05] hover:text-black"
          }`}
        >
          {t("all")}
        </li>
        <li
          onClick={() => handleClick("painting")}
          className={`block cursor-pointer rounded-md px-3 py-2 font-poppins text-sm font-medium transition-all duration-300 sm:text-base ${
            choosenCategory === "painting"
              ? "cursor-not-allowed bg-[#ffcb05] text-black"
              : "text-gray-700 hover:bg-[#ffcb05] hover:text-black"
          }`}
        >
          {t("paintings")}
        </li>
        <li
          onClick={() => handleClick("sculpture")}
          className={`block cursor-pointer rounded-md px-3 py-2 font-poppins text-sm font-medium transition-all duration-300 sm:text-base ${
            choosenCategory === "sculpture"
              ? "cursor-not-allowed bg-[#ffcb05] text-black"
              : "text-gray-700 hover:bg-[#ffcb05] hover:text-black"
          }`}
        >
          {t("sculptures")}
        </li>
        <li
          onClick={() => handleClick("fabric")}
          className={`block cursor-pointer rounded-md px-3 py-2 font-poppins text-sm font-medium transition-all duration-300 sm:text-base ${
            choosenCategory === "fabric"
              ? "cursor-not-allowed bg-[#ffcb05] text-black"
              : "text-gray-700 hover:bg-[#ffcb05] hover:text-black"
          }`}
        >
          {t("fabrics")}
        </li>
        <li
          onClick={() => handleClick("photography")}
          className={`block cursor-pointer rounded-md px-3 py-2 font-poppins text-sm font-medium transition-all duration-300 sm:text-base ${
            choosenCategory === "photography"
              ? "cursor-not-allowed bg-[#ffcb05] text-black"
              : "text-gray-700 hover:bg-[#ffcb05] hover:text-black"
          }`}
        >
          {t("photographies")}
        </li>
      </ul>
    </div>
  );
}
