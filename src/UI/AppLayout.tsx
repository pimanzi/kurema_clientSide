import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useUser from "@/features/Authentication/useUser";
import { useArts } from "@/features/Arts/useArts";
import { useRecentArts } from "@/features/Arts/useRecentArts";

export default function AppLayout() {
  const { isLoading } = useUser();
  const { isLoading: isLoadingArts } = useArts();
  const { isLoading: isLoadingRecentArts } = useRecentArts();
  if (isLoading || isLoadingArts || isLoadingRecentArts)
    return (
      <div className="flex h-screen items-center justify-center bg-[#ffffffcc]">
        <div className="loader"></div>
      </div>
    );
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="pt-[60px] xl:pt-[65px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
