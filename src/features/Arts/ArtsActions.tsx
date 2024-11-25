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

export default function ArtsActions({ id }: { id: number | null | undefined }) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-end gap-3">
      <CreateArt id={id}></CreateArt>
      <Select>
        <SelectTrigger className="focus:ring-whitefocus-visible:outline-none w-fit bg-black text-white focus:border-transparent focus:ring">
          <SelectValue placeholder={t("artSortPlaceholder1")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("artSortLabel1")}</SelectLabel>
            <SelectItem className="hover:!bg-[#ffcb05]" value="apple">
              {t("newestFirst")}
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="banana">
              {t("oldestFirst")}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
