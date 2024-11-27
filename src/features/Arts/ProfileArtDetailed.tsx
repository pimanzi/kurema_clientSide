import { useParams } from "react-router-dom";
import { useArts } from "./useArts";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils/helpers";
import { useReviews } from "../Reviews/useReviews";
import Stars from "@/UI/Stars";
import ReviewShow from "./ReviewShow";
import { useTranslation } from "react-i18next";
import DeleteButton from "./DeleteButton";
import { UpdatePersonalArt } from "./UpdateProfileArt";

export function ProfileArtDetailed() {
  const { t } = useTranslation();
  const { reviews } = useReviews();
  const { id } = useParams();
  const { arts } = useArts();
  const artShow = arts?.find((art) => art.id === Number(id));

  const artReviews =
    reviews?.filter((review) => review.artId === Number(id)) || [];
  const rateAverage = artReviews?.length
    ? artReviews.reduce((acc, elem) => acc + elem.rate, 0) / artReviews.length
    : 0;

  console.log(rateAverage);
  return (
    <div className="mb-[70px] mt-[90px] grid grid-cols-[500px_1fr] gap-[20px]">
      {/* Left Column: Image */}
      <Card className="h-[500px]">
        <CardContent className="h-full p-0">
          <img
            src={artShow?.image}
            alt={artShow?.name || "Artwork"}
            className="h-full w-full rounded object-cover"
          />
        </CardContent>
      </Card>

      {/* Right Column: Details */}
      <div className="flex flex-col space-y-6">
        {/* Art Name and Rating */}
        <div>
          <h2 className="font-playfair text-3xl font-bold">
            {artShow?.name || "Untitled"}
          </h2>
          <div className="mt-2 flex items-center space-x-2">
            {/* Render dynamic stars with the average rating */}
            <Stars
              rating={rateAverage} // Use the calculated average rating
              color="#ffcb05"
              size={24}
            />
            <span className="text-gray-600">
              ({rateAverage.toFixed(1)} / 5)
            </span>
          </div>
        </div>

        {/* Art Details */}
        <div className="space-y-4">
          <p className="text-base text-gray-600">
            {artShow?.description || "No description available."}
          </p>
          <p className="text-lg font-medium">
            {t("artPrice")}{" "}
            <span className="font-bold text-[#ffcb05]">
              {artShow?.price ? formatCurrency(artShow.price) : "N/A"}
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <DeleteButton id={Number(id)}></DeleteButton>
          <UpdatePersonalArt id={Number(id)}></UpdatePersonalArt>
        </div>
        <ReviewShow reviews={artReviews}></ReviewShow>
      </div>
    </div>
  );
}
