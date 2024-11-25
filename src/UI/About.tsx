import { useTranslation } from "react-i18next";
import { FaComments, FaPalette } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="px-[12vw] pb-[100px] pt-[80px]">
      <h2 className="mb-9 text-center font-playfair text-4xl font-extrabold">
        {t("aboutTitle")}
      </h2>
      <div className="flex items-center gap-3 pt-8">
        <div className="flex w-[500px] flex-col items-center px-3">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaPalette size={80} />
          </div>
          <h3 className="mb-4 mt-4 font-playfair text-xl font-bold">
            {t("aboutReason1")}
          </h3>
          <p className="text-center font-poppins">{t("aboutDescription1")}</p>
        </div>
        <div className="flex w-[500px] flex-col items-center px-3">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaComments size={80} />
          </div>

          <h3 className="mb-4 mt-4 font-playfair text-xl font-bold">
            {t("aboutReason2")}
          </h3>
          <p className="text-center font-poppins">{t("aboutDescription2")}</p>
        </div>
        <div className="flex w-[500px] flex-col items-center px-3">
          <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#ffcd05]">
            <FaSackDollar size={80} />
          </div>
          <h3 className="mb-4 mt-4 font-playfair text-xl font-bold">
            {t("aboutReason3")}
          </h3>
          <p className="text-center font-poppins">{t("aboutDescription3")}</p>
        </div>
      </div>
    </section>
  );
}
