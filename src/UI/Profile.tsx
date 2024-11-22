import UpdatePassword from "@/features/Authentication/UpdatePassword";
import UpdateUserInfo from "@/features/Authentication/UpdateUserInfo";

export default function Profile() {
  return (
    <div>
      <UpdateUserInfo></UpdateUserInfo>
      <UpdatePassword></UpdatePassword>
    </div>
  );
}
