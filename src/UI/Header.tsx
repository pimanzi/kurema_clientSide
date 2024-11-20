import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-40 mb-0 flex items-center justify-between bg-[#ffcb05] px-[20vw] pb-3 pt-3">
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  );
}
