import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateArt } from "./CreateArt";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function ArtsActions({ id }: { id: number | null | undefined }) {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center justify-end gap-3">
      <CreateArt id={id}></CreateArt>
      <Select onValueChange={handleClick}>
        <SelectTrigger className="focus:ring-whitefocus-visible:outline-none w-fit bg-black text-white focus:border-transparent focus:ring">
          <SelectValue placeholder={t("artSortPlaceholder1")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("artSortLabel1")}</SelectLabel>
            <SelectItem className="hover:!bg-[#ffcb05]" value="date-desc">
              {t("newestFirst")}
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="date-asc">
              {t("oldestFirst")}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
