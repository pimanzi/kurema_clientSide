import { Review } from "@/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Stars from "@/UI/Stars";
import { formatShortDate } from "@/utils/helpers";
import { useTranslation } from "react-i18next";

export default function ReviewShow({ reviews }: { reviews: Review[] }) {
  const { t } = useTranslation();
  if (reviews.length === 0) {
    return (
      <div className="py-6 text-center">
        <h2 className="text-base font-medium text-gray-600">{t("noReview")}</h2>
      </div>
    );
  }

  return (
    <div className={reviews.length === 1 ? "relative" : "relative px-4"}>
      <h2 className="text-center text-lg font-medium">{t("reviewTitle")}</h2>
      {/* Carousel for Reviews */}
      <Carousel className="w-full">
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="p-6">
                    {/* Display the review information */}
                    <div className="flex flex-col items-start space-y-2">
                      <div className="flex items-center gap-2">
                        <img
                          className="h-[50px] w-[50px] rounded-full"
                          src="/Images/default-user.jpg"
                          alt="commentor"
                        ></img>
                        <div>
                          {" "}
                          <h3 className="text-sm font-medium">
                            {review.names}
                          </h3>
                          <p className="text-sm">{review.email}</p>
                        </div>
                      </div>
                      <div className="ml-2 flex items-center gap-2">
                        <Stars
                          rating={review.rate} // Use the calculated average rating
                          color="#ffcb05"
                          size={20}
                        />

                        <span className="text-sm text-gray-800">
                          {formatShortDate(new Date(review.created_at))}
                        </span>
                      </div>
                      <p className="ml-2 text-base text-gray-800">
                        {review.comment}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {reviews.length !== 1 && (
          <>
            <CarouselPrevious className="absolute left-[-30px] flex items-center justify-center rounded-full bg-[#ffcb05] text-black hover:bg-[#fcde51;] hover:text-black" />
            <CarouselNext className="absolute right-[-30px] flex items-center justify-center rounded-full bg-[#ffcb05] text-black hover:bg-[#fcde51;] hover:text-black" />
          </>
        )}
      </Carousel>
    </div>
  );
}
