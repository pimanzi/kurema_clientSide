import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="w-[100vw] overflow-hidden">
      <Header></Header>;
      <main className="mx-0 mt-0">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
