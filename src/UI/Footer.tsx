import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-[#202020] px-[18vw] py-[8vh]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-5">
          <img
            className="w-[200px]"
            src="/Images/logoFooter.png"
            alt="footerlogo"
          ></img>
          {/* socials */}
          <p className="font-poppins font-light text-white">
            Celebrating art, creativity, and innovation.<br></br>
            <span className="text-[#ffcb05]">
              Explore, rate, and own inspiring artwork
            </span>
          </p>
          <div className="flex items-center gap-5">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ffcb05]">
              <FaLinkedinIn size={25} />
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ffcb05]">
              <RiInstagramLine size={25} />
            </div>
          </div>
        </div>

        {/* company links */}
        <div>
          <h3 className="mb-7 font-poppins text-xl font-semibold text-[#ffcb05]">
            Company
          </h3>
          <ul className="space-y-2">
            <li className="font-light text-white transition-all duration-300 hover:underline">
              FAQ
            </li>
            <li className="font-light text-white transition-all duration-300 hover:underline">
              About Us
            </li>
            <li className="font-light text-white transition-all duration-300 hover:underline">
              Cart
            </li>
            <li className="font-light text-white transition-all duration-300 hover:underline">
              Catalogue
            </li>
          </ul>
        </div>

        {/* Get in touch */}

        <div>
          <h3 className="mb-7 font-poppins text-xl font-semibold text-[#ffcb05]">
            Get In Touch
          </h3>
          <div className="mb-2 flex items-center gap-4">
            <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#ffcb05]">
              <FaPhoneAlt size={15} />
            </div>
            <a href="tel:+250790101642" className="font-light text-white">
              +250 790101642
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#ffcb05]">
              <MdEmail size={15} />
            </div>
            <a
              className="font-light text-white"
              href="mailto:imanzikabisa@gmail.com"
            >
              kurema Hub Email
            </a>
          </div>
        </div>
      </div>
      <hr className="mb-[10px] mt-[100px] font-light text-white"></hr>
      <p className="text-center font-light text-white">
        &copy; {year}. ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
