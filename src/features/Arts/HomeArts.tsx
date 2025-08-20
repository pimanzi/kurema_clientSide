import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useArts } from "./useArts";
import { formatCurrency } from "@/utils/helpers";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInfo } from "react-icons/fa";

export default function HomeArts() {
  const navigate = useNavigate();
  const { arts } = useArts();
  const artsShow = arts?.slice(0, 9);
  const { t } = useTranslation();

  return (
    <section className="mb-8 mt-6 w-full px-4 sm:mb-12 sm:mt-8 sm:px-8 md:mb-[50px] md:mt-[30px]">
      <h2 className="mb-12 text-center font-playfair text-2xl font-extrabold sm:mb-16 sm:text-3xl md:mb-[90px] md:text-4xl">
        {t("featuredArtworks")}
      </h2>
      {artsShow && artsShow.length > 0 ? (
        <Carousel className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-[18vw]">
          <CarouselContent className="flex gap-2 sm:gap-4">
            {artsShow.map((art, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative h-full">
                  <Card className="h-full transform transition-all duration-300">
                    <CardContent className="flex flex-col p-0">
                      <div
                        className="relative cursor-pointer"
                        onClick={() => navigate(`/art/${art.id}`)}
                      >
                        <img
                          src={art.image}
                          alt={art.name}
                          className="h-[250px] w-full rounded object-cover transition-all duration-300 sm:h-[300px] md:h-[350px] lg:h-[400px]"
                        />

                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <button className="flex items-center gap-2 rounded-full bg-[#ffcb05] px-3 py-2 font-poppins text-sm font-medium text-black hover:bg-[#fcde51] sm:px-4 sm:text-base">
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
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ffcb05] text-black hover:bg-[#fcde51] hover:text-black sm:left-6 sm:h-[50px] sm:w-[50px]"></CarouselPrevious>

          <CarouselNext className="absolute right-2 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ffcb05] text-black hover:bg-[#fcde51] hover:text-black sm:right-6 sm:h-[50px] sm:w-[50px]"></CarouselNext>
        </Carousel>
      ) : (
        <p className="text-center text-gray-600">{t("homeNoArts")}</p>
      )}
      <div className="flex w-full justify-center">
        <button
          onClick={() => navigate("/catalog")}
          className="mx-auto mt-4 rounded-full bg-[#ffcb05] px-4 py-3 font-poppins text-base font-medium text-black transition-colors hover:bg-[#fcde51] sm:mt-7 sm:px-5 sm:py-4 sm:text-lg"
        >
          {t("viewMoreArts")}
        </button>
      </div>
    </section>
  );
}
