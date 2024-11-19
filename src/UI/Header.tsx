import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-40 mb-0 flex items-center justify-evenly bg-[#ffcb05] pb-3 pt-3">
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  );
}
