import { useParams } from "react-router-dom";
import { useArts } from "./useArts";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils/helpers";
import { LeaveReview } from "./LeaveReview";
import { useReviews } from "../Reviews/useReviews";
import Stars from "@/UI/Stars";
import ReviewShow from "./ReviewShow";
import { useTranslation } from "react-i18next";

export function ArtDetailed() {
  const { t } = useTranslation();
  const { reviews } = useReviews();
  const { id } = useParams();
  const { arts } = useArts();
  const artShow = arts?.find((art) => art.id === Number(id));
  const Author =
    artShow?.authUsers?.firstName + " " + artShow?.authUsers?.lastName;

  const email = artShow?.authUsers?.email;
  const avatar = artShow?.authUsers?.avatar;
  const artReviews =
    reviews?.filter((review) => review.artId === Number(id)) || [];
  const rateAverage = artReviews?.length
    ? artReviews.reduce((acc, elem) => acc + elem.rate, 0) / artReviews.length
    : 0;

  console.log(rateAverage);
  return (
    <div className="mx-4 mt-2 sm:mx-8 sm:mt-4 md:mx-12 md:mt-6 lg:mx-[8vw] xl:mx-[12vw] 2xl:mx-[18vw]">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Left Column: Image */}
        <Card className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CardContent className="h-full p-0">
            <img
              src={artShow?.image}
              alt={artShow?.name || "Artwork"}
              className="h-full w-full rounded object-cover"
            />
          </CardContent>
        </Card>

        {/* Right Column: Details */}
        <div className="flex flex-col space-y-4 sm:space-y-6">
          {/* Art Name and Rating */}
          <div>
            <h2 className="font-playfair text-xl font-bold sm:text-2xl md:text-3xl">
              {artShow?.name || "Untitled"}
            </h2>
            <div className="mt-2 flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
              {/* Render dynamic stars with the average rating */}
              <Stars
                rating={rateAverage} // Use the calculated average rating
                color="#ffcb05"
                size={20}
              />
              <span className="text-sm text-gray-600 sm:text-base">
                ({rateAverage.toFixed(1)} / 5)
              </span>
            </div>
          </div>

          {/* author info */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              className="h-[35px] w-[35px] rounded-full sm:h-[40px] sm:w-[40px]"
              src={avatar ? avatar : "/Images/default-user.jpg"}
              alt="author"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-gray-600 sm:text-sm">
                <span className="font-medium">{t("authorNames")}</span> {Author}
              </p>
              <p className="truncate text-xs text-gray-600 sm:text-sm">
                <span className="font-medium">{t("authorEmail")}</span> {email}
              </p>
            </div>
          </div>

          {/* Art Details */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm text-gray-600 sm:text-base">
              {artShow?.description || "No description available."}
            </p>
            <p className="text-base font-medium sm:text-lg">
              {t("artPrice")}{" "}
              <span className="font-bold text-[#ffcb05]">
                {artShow?.price ? formatCurrency(artShow.price) : "N/A"}
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3 sm:space-y-4">
            <a
              href={`mailto: ${artShow?.authUsers.email}`}
              className="flex w-full items-center justify-center gap-1 rounded-md bg-[#ffcb05] px-4 py-3 font-poppins text-sm font-medium text-black transition-colors hover:bg-[#fcde51] sm:text-base"
            >
              {t("chatWithAuthor")}
            </a>
            <LeaveReview id={Number(id)} />
          </div>
        </div>
      </div>

      {/* Reviews Section - Full Width Below */}
      <div className="mt-8 lg:mt-12">
        <ReviewShow reviews={artReviews} />
      </div>
    </div>
  );
}
