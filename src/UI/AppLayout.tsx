import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="w-[100vw] overflow-hidden">
      <Header></Header>;
      <main className="mt-0 px-[12vw]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
