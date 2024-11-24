import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AddReview } from "./ReviewForm";

export function LeaveReview() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-gray-800 hover:bg-gray-200">
          Add a Review
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <AddReview></AddReview>
      </PopoverContent>
    </Popover>
  );
}
