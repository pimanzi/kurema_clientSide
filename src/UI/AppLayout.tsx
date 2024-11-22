import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useUser from "@/features/Authentication/useUser";

export default function AppLayout() {
  const { isLoading } = useUser();
  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-[#ffffffcc;]">
        <div className="loader"></div>
      </div>
    );
  return (
    <div className="w-[100vw] overflow-hidden">
      <Header></Header>;
      <main className="mt-0">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
