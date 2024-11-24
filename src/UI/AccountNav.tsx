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
      <li className="block px-2 py-2 font-poppins text-base font-medium text-red-500 transition-[background-color] duration-300 hover:bg-red-100 hover:font-semibold">
        <button onClick={() => logout()} disabled={isLoggingOut}>
          {" "}
          Log out
        </button>
      </li>
    </ul>
  );
}
