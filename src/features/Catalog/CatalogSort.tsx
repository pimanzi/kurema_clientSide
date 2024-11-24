import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

export default function CatalogSort() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex justify-end pr-3">
      <Select onValueChange={handleClick}>
        <SelectTrigger className="focus:ring-whitefocus-visible:outline-none w-fit bg-black text-white focus:border-transparent focus:ring">
          <SelectValue placeholder="Sort options" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort the arts</SelectLabel>
            <SelectItem className="hover:!bg-[#ffcb05]" value="date-asc">
              Oldest first
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="date-desc">
              Newest first{" "}
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="price-asc">
              Price (low first)
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="price-desc">
              Price (high first)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
