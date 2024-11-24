import useLogout from "@/features/Authentication/useLogoutUser";
import { NavLink } from "react-router-dom";

export default function AccountNav() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ul className="space-y-4">
      <li>
        <NavLink
          to="/account/personalInfo"
          className={({ isActive }) =>
            isActive
              ? "block bg-[#ffcb05] px-2 py-2 font-poppins text-base font-medium"
              : "block px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:bg-[#ffcb05]"
          }
        >
          Personal Info
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/account/manageArts"
          className={({ isActive }) =>
            isActive
              ? "block bg-[#ffcb05] px-2 py-2 font-poppins text-base font-medium"
              : "block px-2 py-2 font-poppins text-base font-medium transition-all duration-300 hover:bg-[#ffcb05]"
          }
        >
          Manage Your Arts
        </NavLink>
      </li>

      <button
        className="block w-full px-2 py-2 text-left font-poppins text-base font-medium text-red-500 transition-all duration-300 hover:bg-red-200"
        onClick={() => logout()}
        disabled={isLoggingOut}
      >
        Sign Out
      </button>
    </ul>
  );
}
