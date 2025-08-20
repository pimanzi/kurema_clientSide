import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="bg-[#202020] px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-[8vh] lg:px-[18vw]"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-5 lg:flex-1">
          <img
            className="mx-auto w-[150px] sm:w-[180px] md:w-[200px] lg:mx-0"
            src="/Images/logoFooter.png"
            alt="footerlogo"
          />
          {/* socials */}
          <p className="text-center font-poppins text-sm font-light text-white sm:text-base lg:text-left">
            {t("footerCall")}
            <br />
            <span className="text-[#ffcb05]">{t("footerCall2")}</span>
          </p>
          <div className="flex items-center justify-center gap-5 lg:justify-start">
            <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-[#ffcb05] transition-colors duration-300 hover:bg-[#fcde51] sm:h-[40px] sm:w-[40px]">
              <FaLinkedinIn className="text-lg sm:text-xl md:text-2xl" />
            </div>
            <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-[#ffcb05] transition-colors duration-300 hover:bg-[#fcde51] sm:h-[40px] sm:w-[40px]">
              <RiInstagramLine className="text-lg sm:text-xl md:text-2xl" />
            </div>
          </div>
        </div>

        {/* company links */}
        <div className="text-center lg:flex-1 lg:text-left">
          <h3 className="mb-4 font-poppins text-lg font-semibold text-[#ffcb05] sm:mb-7 sm:text-xl">
            {t("footerCompany")}
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            <li className="text-sm font-light text-white transition-all duration-300 hover:text-[#ffcb05] hover:underline sm:text-base">
              <NavLink to="/faq">{t("footerFaq")}</NavLink>
            </li>
            <li className="cursor-pointer text-sm font-light text-white transition-all duration-300 hover:text-[#ffcb05] hover:underline sm:text-base">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                {t("footerAbout")}
              </Link>
            </li>
            <li className="text-sm font-light text-white transition-all duration-300 hover:text-[#ffcb05] hover:underline sm:text-base">
              <NavLink to="/catalog">{t("footerCatalogue")}</NavLink>
            </li>
          </ul>
        </div>

        {/* Get in touch */}
        <div className="text-center lg:flex-1 lg:text-left">
          <h3 className="mb-4 font-poppins text-lg font-semibold text-[#ffcb05] sm:mb-7 sm:text-xl">
            {t("getInTouch")}
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-full bg-[#ffcb05] sm:h-[25px] sm:w-[25px]">
                <FaPhoneAlt className="text-xs sm:text-sm" />
              </div>
              <a
                href="tel:+250790101642"
                className="text-sm font-light text-white transition-colors duration-300 hover:text-[#ffcb05] sm:text-base"
              >
                +250 790101642
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-full bg-[#ffcb05] sm:h-[25px] sm:w-[25px]">
                <MdEmail className="text-xs sm:text-sm" />
              </div>
              <a
                className="break-all text-sm font-light text-white transition-colors duration-300 hover:text-[#ffcb05] sm:text-base"
                href="mailto:imanzikabisa@gmail.com"
              >
                kurema Hub {t("emailInput")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-4 mt-8 border-gray-600 sm:mb-[10px] sm:mt-12 md:mt-[100px]" />
      <p className="text-center text-xs font-light text-white sm:text-sm">
        &copy; {year}. {t("allRightsReserved")}
      </p>
    </footer>
  );
}
