import useLogout from "@/features/Authentication/useLogoutUser";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function AccountNav() {
  const { logout, isLoggingOut } = useLogout();
  const { t } = useTranslation();
  return (
    <ul className="space-y-3 lg:space-y-4">
      <li>
        <NavLink
          to="/account/personalInfo"
          className={({ isActive }) =>
            isActive
              ? "block rounded-md bg-[#ffcb05] px-3 py-3 font-poppins text-sm font-medium sm:text-base lg:px-2 lg:py-2"
              : "block rounded-md px-3 py-3 font-poppins text-sm font-medium transition-all duration-300 hover:bg-[#ffcb05] sm:text-base lg:px-2 lg:py-2"
          }
        >
          {t("accountPersonalInfo")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/account/manageArts"
          className={({ isActive }) =>
            isActive
              ? "block rounded-md bg-[#ffcb05] px-3 py-3 font-poppins text-sm font-medium sm:text-base lg:px-2 lg:py-2"
              : "block rounded-md px-3 py-3 font-poppins text-sm font-medium transition-all duration-300 hover:bg-[#ffcb05] sm:text-base lg:px-2 lg:py-2"
          }
        >
          {t("accountManageArts")}
        </NavLink>
      </li>

      <li>
        <button
          className="block w-full rounded-md px-3 py-3 text-left font-poppins text-sm font-medium text-red-500 transition-all duration-300 hover:bg-red-100 sm:text-base lg:px-2 lg:py-2"
          onClick={() => logout()}
          disabled={isLoggingOut}
        >
          {t("logout")}
        </button>
      </li>
    </ul>
  );
}
