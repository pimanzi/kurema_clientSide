import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  return (
    <Select
      onValueChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
    >
      <SelectTrigger className="w-fit bg-white text-black focus:border-transparent focus:ring focus:ring-[#ffcb05] focus-visible:outline-none">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select category</SelectLabel>
          <SelectItem className="hover:!bg-[#ffcb05]" value="painting">
            Painting
          </SelectItem>
          <SelectItem className="hover:!bg-[#ffcb05]" value="sculpture">
            Sculpture
          </SelectItem>

          <SelectItem className="hover:!bg-[#ffcb05]" value="fabric">
            Fabric
          </SelectItem>
          <SelectItem className="hover:!bg-[#ffcb05]" value="photography">
            Photography
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
