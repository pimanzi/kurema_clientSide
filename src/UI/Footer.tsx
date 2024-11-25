import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";

export default function Footer() {
  const { t } = useTranslation();
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
            {t("footerCall")}
            <br></br>
            <span className="text-[#ffcb05]">{t("footerCall2")}</span>
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
            {t("footerCompany")}
          </h3>
          <ul className="space-y-2">
            <li className="font-light text-white transition-all duration-300 hover:underline">
              {t("footerFaq")}
            </li>
            <li className="font-light text-white transition-all duration-300 hover:underline">
              {t("footerAbout")}
            </li>
            <li className="font-light text-white transition-all duration-300 hover:underline">
              {t("footerCart")}
            </li>
            <li className="font-light text-white transition-all duration-300 hover:underline">
              {t("footerCatalogue")}
            </li>
          </ul>
        </div>

        {/* Get in touch */}

        <div>
          <h3 className="mb-7 font-poppins text-xl font-semibold text-[#ffcb05]">
            {t("getInTouch")}
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
              kurema Hub {t("emailInput")}
            </a>
          </div>
        </div>
      </div>
      <hr className="mb-[10px] mt-[100px] font-light text-white"></hr>
      <p className="text-center font-light text-white">
        &copy; {year}. {t("allRightsReserved")}
      </p>
    </footer>
  );
}
