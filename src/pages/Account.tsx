import Profile from "@/UI/Profile";

export default function Account() {
  return (
    <div className="grid grid-cols-[15vw_auto] px-[20vw]">
      <div className="bg-blue-500">
        <ul>
          <li>Personal Info</li>
          <li>Manage your Arts</li>
          <li>Log Out</li>
        </ul>
      </div>
      <div>
        <Profile></Profile>
      </div>
    </div>
  );
}
