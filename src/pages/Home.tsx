import About from "@/UI/About";
import LandingCarousel from "@/UI/LandingCarousel";

export default function Home() {
  return (
    <>
      {" "}
      <section>
        <LandingCarousel></LandingCarousel>
      </section>
      <About></About>
    </>
  );
}
