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

interface SelectFormProps {
  onChange: (value: string) => void;
  onBlur?: () => void;
  value: string;
  name: string;
  disabled?: boolean;
}

export function SelectForm({
  onChange,
  value,
  name,
  disabled,
}: SelectFormProps) {
  const { t } = useTranslation();
  return (
    <Select
      onValueChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
    >
      <SelectTrigger className="w-fit bg-white text-black focus:border-transparent focus:ring focus:ring-[#ffcb05] focus-visible:outline-none">
        <SelectValue placeholder={t("categoryTitle")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("selectCategory")}</SelectLabel>
          <SelectItem className="hover:!bg-[#ffcb05]" value="painting">
            {t("painting")}
          </SelectItem>
          <SelectItem className="hover:!bg-[#ffcb05]" value="sculpture">
            {t("sculpture")}
          </SelectItem>

          <SelectItem className="hover:!bg-[#ffcb05]" value="fabric">
            {t("fabric")}
          </SelectItem>
          <SelectItem className="hover:!bg-[#ffcb05]" value="photography">
            {t("photography")}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
