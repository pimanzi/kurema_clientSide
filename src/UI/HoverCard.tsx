import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { NavLink } from "react-router-dom";

export function HoverCardDemo({ children }: { children: React.ReactNode }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <ul className="w-full space-y-2">
          <li className="w-full py-3 text-center hover:bg-[#ffcb05]">
            <NavLink to="/catalog?category=painting" className="w-full">
              Paintings
            </NavLink>
          </li>
          <li className="w-full py-3 text-center hover:bg-[#ffcb05]">
            <NavLink to="/catalog?category=sculpture" className="w-full">
              Sculpture
            </NavLink>
          </li>

          <li className="w-full py-3 text-center hover:bg-[#ffcb05]">
            <NavLink to="/catalog?category=fabric" className="w-full">
              Fabrics
            </NavLink>
          </li>

          <li className="w-full py-3 text-center hover:bg-[#ffcb05]">
            <NavLink to="/catalog?category=photography" className="w-full">
              Photography
            </NavLink>
          </li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
}
