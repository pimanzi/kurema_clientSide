import { useTranslation } from "react-i18next";
import { FaComments, FaPalette } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative px-4 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-[8vw] md:pb-[100px] md:pt-[80px] lg:px-[12vw]"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(241, 245, 249, 0.95)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute left-1/4 top-20 h-32 w-32 animate-pulse rounded-full border border-[#ffcb05]"></div>
        <div className="absolute bottom-20 right-1/4 h-24 w-24 rotate-45 border border-[#ffcb05]"></div>
        <div className="absolute left-10 top-1/2 h-16 w-16 rounded-full border border-[#ffcb05]"></div>
        <div className="absolute right-10 top-1/3 h-20 w-20 rotate-12 border border-[#ffcb05]"></div>
        <div className="absolute bottom-1/3 left-1/3 h-12 w-12 rotate-45 border border-[#ffcb05]"></div>
        <div className="absolute right-1/3 top-1/4 h-14 w-14 animate-pulse rounded-full border border-[#ffcb05]"></div>
      </div>

      <h2 className="relative mb-6 text-center font-playfair text-2xl font-extrabold sm:mb-9 sm:text-3xl md:text-4xl">
        {t("aboutTitle")}
      </h2>
      <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:gap-8 sm:pt-8 lg:flex-row lg:gap-3">
        <div className="flex w-full max-w-[400px] flex-col items-center px-3 text-center lg:w-[500px]">
          <div className="mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#ffcd05] sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px]">
            <FaPalette className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
          </div>
          <h3 className="mb-3 font-playfair text-lg font-bold sm:mb-4 sm:text-xl">
            {t("aboutReason1")}
          </h3>
          <p className="font-poppins text-sm leading-relaxed sm:text-base">
            {t("aboutDescription1")}
          </p>
        </div>
        <div className="flex w-full max-w-[400px] flex-col items-center px-3 text-center lg:w-[500px]">
          <div className="mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#ffcd05] sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px]">
            <FaComments className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
          </div>

          <h3 className="mb-3 font-playfair text-lg font-bold sm:mb-4 sm:text-xl">
            {t("aboutReason2")}
          </h3>
          <p className="font-poppins text-sm leading-relaxed sm:text-base">
            {t("aboutDescription2")}
          </p>
        </div>
        <div className="flex w-full max-w-[400px] flex-col items-center px-3 text-center lg:w-[500px]">
          <div className="mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#ffcd05] sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px]">
            <FaSackDollar className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
          </div>
          <h3 className="mb-3 font-playfair text-lg font-bold sm:mb-4 sm:text-xl">
            {t("aboutReason3")}
          </h3>
          <p className="font-poppins text-sm leading-relaxed sm:text-base">
            {t("aboutDescription3")}
          </p>
        </div>
      </div>
    </section>
  );
}
