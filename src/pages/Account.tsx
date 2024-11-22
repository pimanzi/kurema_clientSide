import Profile from "@/UI/Profile";

export default function Account() {
  return (
    <div className="grid h-[100vh] grid-cols-[15vw_auto] px-[20vw]">
      <div className="bg-blue-500">First Column</div>
      <div>
        <Profile></Profile>
      </div>
    </div>
  );
}
