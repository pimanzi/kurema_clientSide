import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export function HoverCardDemo({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <ul className="w-full space-y-2">
          <li className="w-full py-3 text-center hover:bg-[#ffcb05]">
            <NavLink to="/catalog?category=painting" className="w-full">
              {t("paintings")}
            </NavLink>
          </li>
          <li className="w-full py-3 text-center hover:bg-[#ffcb05]">
            <NavLink to="/catalog?category=sculpture" className="w-full">
              {t("sculptures")}
            </NavLink>
          </li>

          <li className="w-full py-3 text-center hover:bg-[#ffcb05]">
            <NavLink to="/catalog?category=fabric" className="w-full">
              {t("fabrics")}
            </NavLink>
          </li>

          <li className="w-full py-3 text-center hover:bg-[#ffcb05]">
            <NavLink to="/catalog?category=photography" className="w-full">
              {t("photographies")}
            </NavLink>
          </li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
}
