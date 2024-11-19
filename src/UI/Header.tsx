import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="mb-0 flex items-center justify-evenly bg-[#ffcb05] pb-3 pt-3">
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  );
}
