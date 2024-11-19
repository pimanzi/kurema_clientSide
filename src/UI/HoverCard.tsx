import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardDemo({ children }: { children: React.ReactNode }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <li className="py-3 text-center hover:bg-[#ffcb05]">Paintings</li>
          <li className="py-3 text-center hover:bg-[#ffcb05]">Fabrics</li>
          <li className="py-3 text-center hover:bg-[#ffcb05]">Sculpture</li>
          <li className="py-3 text-center hover:bg-[#ffcb05]">Photograph</li>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
