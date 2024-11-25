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
    <div className="flex justify-end pr-3">
      <Select onValueChange={handleClick}>
        <SelectTrigger className="focus:ring-whitefocus-visible:outline-none w-fit bg-black text-white focus:border-transparent focus:ring">
          <SelectValue placeholder={t("sortPlaceholder2")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("sortLabel2")}</SelectLabel>
            <SelectItem className="hover:!bg-[#ffcb05]" value="date-asc">
              {t("oldestFirst")}
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="date-desc">
              {t("newestFirst")}
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="price-asc">
              {t("priceLow")}
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="price-desc">
              {t("priceHigh")}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
