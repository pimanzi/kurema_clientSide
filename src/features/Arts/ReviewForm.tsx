import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { TextareaUi } from "../../UI/TextArea";

interface ReviewFormData {
  name: string;
  email: string;
  review: string;
}

export function AddReview() {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>();

  const onSubmit = (data: ReviewFormData) => {
    console.log("Review Submitted:", data);
    // Handle review submission here (e.g., API call)
    reset();
  };

  return (
    <div className="space-y-4 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-semibold">Leave a Review</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Review Field */}
        <div>
          <Controller
            name="review"
            rules={{ required: "review is required" }}
            control={control}
            render={({ field }) => (
              <TextareaUi
                {...field}
                value={field.value}
                disabled={false}
                placeholder="Enter artwork review"
              ></TextareaUi>
            )}
          />
          {errors.review && (
            <span className="text-xs text-red-500">
              {errors.review.message}
            </span>
          )}
        </div>

        {/* Submit Button */}

        <button
          type="submit"
          className="w-full rounded-md bg-[#ffcb05] py-2 text-sm font-medium text-black hover:bg-[#fcde51]"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
