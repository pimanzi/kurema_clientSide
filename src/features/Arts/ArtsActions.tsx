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

export default function ArtsActions({ id }: { id: number | null }) {
  return (
    <div className="flex items-center justify-end gap-3">
      <CreateArt id={id}></CreateArt>
      <Select>
        <SelectTrigger className="focus:ring-whitefocus-visible:outline-none w-fit bg-black text-white focus:border-transparent focus:ring">
          <SelectValue placeholder="Sort by Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sorting Options</SelectLabel>
            <SelectItem className="hover:!bg-[#ffcb05]" value="apple">
              Newest first{" "}
            </SelectItem>
            <SelectItem className="hover:!bg-[#ffcb05]" value="banana">
              Oldest first
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
