import UpdatePassword from "@/features/Authentication/UpdatePassword";
import UpdateUserInfo from "@/features/Authentication/UpdateUserInfo";

export default function PersonalInfo() {
  return (
    <div className="mb-[20px] mt-4 space-y-6 lg:mt-[60px]">
      <UpdateUserInfo />
      <UpdatePassword />
    </div>
  );
}
