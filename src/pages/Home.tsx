import HomeArts from "@/features/Arts/HomeArts";
import HomeRecentArts from "@/features/Arts/HomeRecentArts";
import About from "@/UI/About";
import LandingCarousel from "@/UI/LandingCarousel";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <section id="home" className="w-full">
        <LandingCarousel />
      </section>
      <About />
      <section id="arts" className="w-full">
        <HomeArts />
        <HomeRecentArts />
      </section>
    </div>
  );
}
