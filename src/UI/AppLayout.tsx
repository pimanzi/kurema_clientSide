import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div>
      <Header></Header>;
      <main className="mt-0">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
