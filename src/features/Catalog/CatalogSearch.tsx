import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiSearch } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function CatalogSearch() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
  );

  // Debounce search to avoid too many URL updates
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue) {
        searchParams.set("search", searchValue);
      } else {
        searchParams.delete("search");
      }
      setSearchParams(searchParams);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, searchParams, setSearchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative w-full max-w-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <HiSearch className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder={t("searchArtworks") || "Search artworks..."}
        value={searchValue}
        onChange={handleSearchChange}
        className="rounded-md border border-gray-300 py-2 pl-10 pr-4 transition-colors focus:border-[#ffcb05] focus:ring-2 focus:ring-[#ffcb05]"
      />
    </div>
  );
}
