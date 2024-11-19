import { FaComments, FaPalette } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

export default function About() {
  return (
    <section className="pt-[80px]">
      <h2 className="text-center font-playfair text-4xl font-extrabold">
        Why To Choose Us
      </h2>
      <div className="flex pt-8">
        <div className="flex flex-col items-center">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaPalette size={80} />
          </div>
          <h3>Exclusive Art Collection</h3>
          <p>
            Discover unique, high-quality artwork from talented artists across
            the globe, handpicked for your enjoyment.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaComments size={80} />
          </div>

          <h3>Customer-Centric Experience</h3>
          <p>
            Share your feedback and ratings to help guide fellow art lovers and
            support artists in their creative journey.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaSackDollar size={80} />
          </div>
          <h3>Affordable Pricing</h3>
          <p>
            Enjoy competitive prices and special deals, making stunning artwork
            accessible for every budget.
          </p>
        </div>
      </div>
    </section>
  );
}
