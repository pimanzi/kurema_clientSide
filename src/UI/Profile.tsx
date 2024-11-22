import UpdatePassword from "@/features/Authentication/UpdatePassword";
import UpdateUserInfo from "@/features/Authentication/UpdateUserInfo";

export default function Profile() {
  return (
    <div className="mb-[20px] mt-[60px]">
      <UpdateUserInfo></UpdateUserInfo>
      <UpdatePassword></UpdatePassword>
    </div>
  );
}
