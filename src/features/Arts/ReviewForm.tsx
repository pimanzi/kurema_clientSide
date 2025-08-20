import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { TextareaUi } from "../../UI/TextArea";
import { useTranslation } from "react-i18next";
import Stars from "@/UI/Stars";
import { useState } from "react";
import { useCreateReview } from "../Reviews/useCreateReview";

interface ReviewFormData {
  names: string;
  email: string;
  comment: string;
  rate: number;
}

export function AddReview({
  id,
  setOpen,
}: {
  id: number;
  setOpen: (value: boolean) => void;
}) {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>();

  const { createReview, isCreating } = useCreateReview();
  const { t } = useTranslation();
  const [rating, setRating] = useState<number>(0);
  const onSubmit = (data: ReviewFormData) => {
    createReview(
      {
        ...data,
        rate: rating,
        artId: id,
      },
      {
        onSettled: () => {
          setOpen(false);
          reset();
        },
      },
    );
  };
  return (
    <div className="space-y-4 border-t border-gray-200 pt-4 sm:pt-6">
      <h3 className="text-base font-semibold sm:text-lg">{t("leaveReview")}</h3>
      <form
        className="flex flex-col gap-3 sm:gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name and Email Fields - Stack on mobile, side by side on larger screens */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {/* Name Field */}
          <div>
            <Input
              id="name"
              placeholder={t("commentorName")}
              className="h-10 text-sm sm:h-11 sm:text-base"
              {...register("names", { required: t("commentorNameError") })}
            />
            {errors.names && (
              <span className="text-xs text-red-500">
                {errors.names.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Input
              id="email"
              type="email"
              placeholder={t("commentorEmail")}
              className="h-10 text-sm sm:h-11 sm:text-base"
              {...register("email", {
                required: t("commentorEmailError"),
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: t("commentorEmailMessageError"),
                },
              })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Review Field */}
        <div>
          <Controller
            name="comment"
            rules={{ required: t("commentorReviewError") }}
            control={control}
            render={({ field }) => (
              <TextareaUi
                {...field}
                value={field.value}
                disabled={false}
                placeholder={t("commentorReview")}
                className="min-h-[80px] text-sm sm:min-h-[100px] sm:text-base"
              />
            )}
          />
          {errors.comment && (
            <span className="text-xs text-red-500">
              {errors.comment.message}
            </span>
          )}
        </div>

        {/* Rating Section */}
        <div className="space-y-2">
          <div className="flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <Stars
              rating={rating} // Current rating
              maxStars={5}
              color="#fcc419"
              size={18}
              showRating={true}
              onSetRatingOutside={(newRating) => setRating(newRating)} // Update the rating
            />
            {rating > 0 && (
              <p className="text-xs text-gray-600 sm:text-sm">
                {t("selectedRating")}: {rating} / 5
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          disabled={isCreating}
          type="submit"
          className="w-full rounded-md bg-[#ffcb05] py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#fcde51] disabled:opacity-50 sm:py-3 sm:text-base"
        >
          {t("submitReview")}
        </button>
      </form>
    </div>
  );
}
