import { formatCurrency } from "@/utils/helpers";
import { useRecentArts } from "./useRecentArts";
import { Card, CardContent } from "@/components/ui/card";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInfo } from "react-icons/fa";

const HomeRecentArts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { arts } = useRecentArts();
  const artsShow = arts?.slice(0, 9); // Get the first 9 items

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      className="relative mt-12 w-full py-16 sm:mt-16 sm:py-20 md:mt-[100px] md:py-24 lg:py-32"
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

      <h2 className="relative mb-12 text-center font-playfair text-2xl font-extrabold sm:mb-16 sm:text-3xl md:mb-[90px] md:text-4xl">
        {t("latestArtworks")}
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12 lg:px-[8vw]">
        <Slider {...settings}>
          {artsShow?.map((art, index) => (
            <div key={index} className="item px-1 sm:px-2">
              <div className="group relative h-full">
                <Card
                  className="h-full transform cursor-pointer transition-all duration-300"
                  onClick={() => navigate(`/art/${art.id}`)}
                >
                  <CardContent className="flex flex-col p-0">
                    <div className="relative">
                      <img
                        src={art.image}
                        alt={art.name}
                        className="h-[250px] w-full rounded object-cover transition-all duration-300 sm:h-[300px] md:h-[350px] lg:h-[400px]"
                      />

                      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button className="flex items-center gap-2 rounded-full bg-[#ffcb05] px-3 py-2 font-poppins text-sm font-medium text-black transition-colors hover:bg-[#fcde51] sm:px-4 sm:text-base">
                          <FaInfo />
                          <span className="hidden sm:inline">
                            Artwork Details
                          </span>
                          <span className="sm:hidden">Details</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 p-2 text-center">
                      <p className="line-clamp-1 font-poppins text-sm font-medium sm:text-base">
                        {art.name}
                      </p>
                      <p className="mt-1 font-poppins text-xs text-gray-600 sm:text-sm">
                        {formatCurrency(art.price)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeRecentArts;
