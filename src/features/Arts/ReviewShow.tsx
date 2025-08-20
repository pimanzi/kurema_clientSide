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
      <div className="w-full py-6 text-center">
        <h2 className="text-sm font-medium text-gray-600 sm:text-base">
          {t("noReview")}
        </h2>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <h2 className="mb-4 text-center text-base font-medium sm:mb-6 sm:text-lg">
        {t("reviewTitle")}
      </h2>
      {/* Carousel for Reviews */}
      <Carousel className="mx-auto w-full max-w-full sm:max-w-[600px] lg:max-w-[700px]">
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    {/* Display the review information */}
                    <div className="flex flex-col items-start space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <img
                          className="h-[40px] w-[40px] rounded-full sm:h-[50px] sm:w-[50px]"
                          src="/Images/default-user.jpg"
                          alt="commentor"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-xs font-medium sm:text-sm">
                            {review.names}
                          </h3>
                          <p className="truncate text-xs text-gray-600 sm:text-sm">
                            {review.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 sm:ml-2 sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0">
                        <Stars
                          rating={review.rate} // Use the calculated average rating
                          color="#ffcb05"
                          size={16}
                        />
                        <span className="text-xs text-gray-600 sm:text-sm">
                          {formatShortDate(new Date(review.created_at))}
                        </span>
                      </div>
                      <p className="text-sm text-gray-800 sm:ml-2 sm:text-base">
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
            <CarouselPrevious className="absolute left-[-15px] hidden h-8 w-8 rounded-full bg-[#ffcb05] text-black hover:bg-[#fcde51] hover:text-black sm:left-[-30px] sm:flex sm:h-10 sm:w-10" />
            <CarouselNext className="absolute right-[-15px] hidden h-8 w-8 rounded-full bg-[#ffcb05] text-black hover:bg-[#fcde51] hover:text-black sm:right-[-30px] sm:flex sm:h-10 sm:w-10" />
          </>
        )}
      </Carousel>
    </div>
  );
}
