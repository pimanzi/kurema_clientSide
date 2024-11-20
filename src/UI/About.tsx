import { FaComments, FaPalette } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="px-[12vw] pb-[100px] pt-[80px]">
      <h2 className="mb-9 text-center font-playfair text-4xl font-extrabold">
        Why To Choose Us
      </h2>
      <div className="flex items-center gap-3 pt-8">
        <div className="flex w-[500px] flex-col items-center px-3">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaPalette size={80} />
          </div>
          <h3 className="mb-4 mt-4 font-playfair text-xl font-bold">
            Exclusive Art Collection
          </h3>
          <p className="text-center font-poppins">
            Discover unique, high-quality artwork from talented artists across
            the globe, handpicked for your enjoyment.
          </p>
        </div>
        <div className="flex w-[500px] flex-col items-center px-3">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaComments size={80} />
          </div>

          <h3 className="mb-4 mt-4 font-playfair text-xl font-bold">
            Customer-Centric Experience
          </h3>
          <p className="text-center font-poppins">
            Share your feedback and ratings to help guide fellow art lovers and
            support artists in their creative journey.
          </p>
        </div>
        <div className="flex w-[500px] flex-col items-center px-3">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaSackDollar size={80} />
          </div>
          <h3 className="mb-4 mt-4 font-playfair text-xl font-bold">
            Affordable Pricing
          </h3>
          <p className="text-center font-poppins">
            Enjoy competitive prices and special deals, making stunning artwork
            accessible for every budget.
          </p>
        </div>
      </div>
    </section>
  );
}
