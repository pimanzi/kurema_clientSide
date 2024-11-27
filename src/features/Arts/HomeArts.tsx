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
    <div className="mb-[50px] mt-[30px] w-full">
      <h2 className="mb-[90px] text-center font-playfair text-4xl font-extrabold">
        {t("featuredArtworks")}
      </h2>
      {artsShow && artsShow.length > 0 ? (
        <Carousel className="relative w-full px-[18vw]">
          <CarouselContent className="flex gap-4">
            {artsShow.map((art, index) => (
              <CarouselItem key={index} className="flex-shrink-0 basis-1/3">
                <div className="group relative h-full">
                  <Card className="h-full transform transition-all duration-300">
                    <CardContent className="flex flex-col p-0">
                      <div
                        className="relative"
                        onClick={() => navigate(`/art/${art.id}`)}
                      >
                        <img
                          src={art.image}
                          alt={art.name}
                          className="h-[400px] w-full rounded object-cover transition-all duration-300"
                        />

                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <button className="flex items-center gap-2 rounded-full bg-[#ffcb05] px-4 py-2 font-poppins text-base font-medium text-black hover:bg-[#fcde51;]">
                            <FaInfo /> Artwork Details
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
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ffcb05] text-black hover:bg-[#fcde51;] hover:text-black"></CarouselPrevious>

          <CarouselNext className="absolute right-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ffcb05] text-black hover:bg-[#fcde51;] hover:text-black"></CarouselNext>
        </Carousel>
      ) : (
        <p>{t("homeNoArts")}</p>
      )}
      <div className="flex w-full justify-center">
        <button
          onClick={() => navigate("/catalog")}
          className="mx-auto mt-7 rounded-full bg-[#ffcb05] px-5 py-4 font-poppins text-lg font-medium text-black hover:bg-[#fcde51;]"
        >
          {t("viewMoreArts")}
        </button>
      </div>
    </div>
  );
}
