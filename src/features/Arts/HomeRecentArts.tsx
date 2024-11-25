import { formatCurrency } from "@/utils/helpers";
import { useRecentArts } from "./useRecentArts";
import { Card, CardContent } from "@/components/ui/card";
import { GrCart } from "react-icons/gr";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
          slidesToShow: 3, // Show 3 slides on smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on mobile
        },
      },
    ],
  };

  return (
    <div className="mb-[200px] mt-[100px] h-[500px] px-[19vw]">
      <h2 className="mb-[90px] text-center font-playfair text-4xl font-extrabold">
        {t("latestArtworks")}
      </h2>
      <Slider {...settings}>
        {artsShow?.map((art, index) => (
          <div key={index} className="item">
            <div className="group relative h-full">
              <Card
                className="mx-2 h-full transform transition-all duration-300"
                onClick={() => navigate(`/art/${art.id}`)}
              >
                <CardContent className="flex flex-col p-0">
                  <div className="relative">
                    <img
                      src={art.image}
                      alt={art.name}
                      className="h-[400px] w-full rounded object-cover transition-all duration-300"
                    />

                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <button className="flex items-center gap-2 rounded-full bg-[#ffcb05] px-4 py-2 font-poppins text-base font-medium text-black hover:bg-[#fcde51;]">
                        <GrCart /> {t("addCart")}
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 p-2 text-center">
                    <p className="font-poppins text-base font-medium">
                      {art.name}
                    </p>
                    <p className="mt-1 font-poppins text-sm text-gray-600">
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
  );
};

export default HomeRecentArts;
