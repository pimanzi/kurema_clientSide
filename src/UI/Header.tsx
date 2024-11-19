import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex items-center justify-evenly bg-[#ffcb05] py-3">
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  );
}
