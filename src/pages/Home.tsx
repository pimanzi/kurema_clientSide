import HomeArts from "@/features/Arts/HomeArts";
import HomeRecentArts from "@/features/Arts/HomeRecentArts";
import About from "@/UI/About";
import LandingCarousel from "@/UI/LandingCarousel";

export default function Home() {
  return (
    <>
      {" "}
      <section id="home">
        <LandingCarousel></LandingCarousel>
      </section>
      <About></About>
      <section id="arts">
        <HomeArts></HomeArts>
        <HomeRecentArts></HomeRecentArts>
      </section>
    </>
  );
}
