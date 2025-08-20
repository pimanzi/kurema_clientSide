import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function CatalogSort() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full justify-end sm:w-auto">
      <Select onValueChange={handleClick}>
        <SelectTrigger className="w-full min-w-[160px] bg-black text-white transition-colors focus:border-transparent focus:ring-1 focus:ring-[#ffcb05] focus-visible:outline-none sm:w-fit">
          <SelectValue placeholder={t("sortPlaceholder2") || "Sort by..."} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("sortLabel2") || "Sort Options"}</SelectLabel>
            <SelectItem
              className="hover:!bg-[#ffcb05] hover:!text-black"
              value="date-asc"
            >
              {t("oldestFirst") || "Oldest First"}
            </SelectItem>
            <SelectItem
              className="hover:!bg-[#ffcb05] hover:!text-black"
              value="date-desc"
            >
              {t("newestFirst") || "Newest First"}
            </SelectItem>
            <SelectItem
              className="hover:!bg-[#ffcb05] hover:!text-black"
              value="price-asc"
            >
              {t("priceLow") || "Price: Low to High"}
            </SelectItem>
            <SelectItem
              className="hover:!bg-[#ffcb05] hover:!text-black"
              value="price-desc"
            >
              {t("priceHigh") || "Price: High to Low"}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
