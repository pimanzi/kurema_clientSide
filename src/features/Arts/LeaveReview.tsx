import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AddReview } from "./ReviewForm";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function LeaveReview({ id }: { id: number }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full rounded border border-gray-300 bg-transparent px-4 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200 sm:py-3 sm:text-base">
          {t("addReview")}
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
        align="start"
        sideOffset={5}
      >
        <AddReview setOpen={setOpen} id={id} />
      </PopoverContent>
    </Popover>
  );
}
