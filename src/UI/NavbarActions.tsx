import { AuthModal } from "@/features/Authentication/AuthModal";
import useUser from "@/features/Authentication/useUser";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LanguageSwitch } from "./LanguageSwitch";
import { useNavigate } from "react-router-dom";

export default function NavbarActions() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useUser();
  const avatar = user?.user_metadata.avatar;

  return (
    <ul className="flex items-center gap-4">
      <LanguageSwitch></LanguageSwitch>
      {isAuthenticated ? (
        <Avatar onClick={() => navigate("/account")}>
          <AvatarImage
            src={avatar ? avatar : "Images/default-user.jpg"}
            alt="@shadcn"
          />
        </Avatar>
      ) : (
        <AuthModal>
          <button className="rounded-md border border-black bg-black px-3 py-2 font-poppins font-semibold text-white transition-all duration-300 hover:scale-x-110">
            Join us
          </button>
        </AuthModal>
      )}
    </ul>
  );
}
