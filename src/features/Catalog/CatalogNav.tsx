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
    <ul className="space-y-4">
      <li
        onClick={() => handleClick("all")}
        className={
          choosenCategory === "all"
            ? "block bg-[#ffcb05] px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-not-allowed"
            : "block px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-pointer hover:bg-[#ffcb05]"
        }
      >
        {t("all")}
      </li>
      <li
        onClick={() => handleClick("painting")}
        className={
          choosenCategory === "painting"
            ? "block bg-[#ffcb05] px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-not-allowed"
            : "block px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-pointer hover:bg-[#ffcb05]"
        }
      >
        {t("paintings")}
      </li>
      <li
        onClick={() => handleClick("sculpture")}
        className={
          choosenCategory === "sculpture"
            ? "block bg-[#ffcb05] px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-not-allowed"
            : "block px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-pointer hover:bg-[#ffcb05]"
        }
      >
        {t("sculptures")}
      </li>
      <li
        onClick={() => handleClick("fabric")}
        className={
          choosenCategory === "fabric"
            ? "block bg-[#ffcb05] px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-not-allowed"
            : "block px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-pointer hover:bg-[#ffcb05]"
        }
      >
        {t("fabrics")}
      </li>
      <li
        onClick={() => handleClick("photography")}
        className={
          choosenCategory === "photography"
            ? "block bg-[#ffcb05] px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-not-allowed"
            : "block px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:cursor-pointer hover:bg-[#ffcb05]"
        }
      >
        {t("photographies")}
      </li>
    </ul>
  );
}
