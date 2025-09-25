import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { TextareaUi } from "../../UI/TextArea";
import { SelectForm } from "../../UI/SelectForm";

import { useCreateArt } from "./useCreateArt";

import { IoMdAdd } from "react-icons/io";
import { useTranslation } from "react-i18next";

export interface FormData {
  name: string;
  description: string;
  image: FileList;
  price: number;
  category: string;
}

export function CreateArt({ id }: { id: number | null | undefined }) {
  const [open, setOpen] = useState(false);
  const { createArt, isCreating } = useCreateArt();
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const imageFile = watch("image")?.[0];

  const onSubmit = (data: FormData) => {
    const transformedData = {
      ...data,
      image: data.image[0],
      userId: id,
    };

    createArt(transformedData, {
      onSuccess: () => {
        setOpen(false);
        onClear();
      },
    });
  };

  function onClear() {
    reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex w-full items-center justify-center gap-1 rounded-md bg-[#ffcb05] px-3 py-2 font-poppins text-sm font-medium text-black hover:bg-[#fcde51] sm:w-auto sm:px-4 sm:text-base">
          <IoMdAdd />
          <span>{t("newArtButton")}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="mx-4 w-[calc(100vw-2rem)] max-w-[420px] rounded border border-gray-300 bg-white p-3 sm:mx-0 sm:w-[450px] sm:max-w-[500px] sm:p-6 md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="font-playfair text-lg font-bold sm:text-xl md:text-2xl">
            {t("newArtFormTitle")}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600 sm:text-base">
            {t("newArtFormCallAction")}
          </DialogDescription>
        </DialogHeader>
        <form
          className="flex flex-col gap-3 sm:gap-4 md:gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-1">
            <Input
              id="name"
              placeholder={t("newArtInputNameField")}
              type="text"
              disabled={isCreating}
              className="w-full text-sm sm:text-base"
              {...register("name", {
                required: t("newArtInputNameFieldError"),
              })}
            />
            {errors.name && (
              <span className="text-xs text-red-500 sm:text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Controller
              name="description"
              rules={{ required: t("newArtInputDescriptionFieldError") }}
              control={control}
              render={({ field }) => (
                <TextareaUi
                  {...field}
                  value={field.value}
                  disabled={isCreating}
                  placeholder={t("newArtInputDescriptionField")}
                ></TextareaUi>
              )}
            />
            {errors.description && (
              <span className="text-xs text-red-500 sm:text-sm">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <div className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 hover:cursor-pointer focus:border-[#ffcb05] focus:outline-none sm:text-base">
              <label
                htmlFor="image"
                className="w-full cursor-pointer text-gray-500"
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="image"
                  {...register("image", {
                    required: t("newArtInputImageError"),
                  })}
                  disabled={isCreating}
                />
                <span className="truncate">
                  {imageFile?.name || t("newArtInputImage")}
                </span>
              </label>
            </div>
            {errors.image && (
              <span className="text-xs text-red-500 sm:text-sm">
                {errors.image.message}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <Input
              id="price"
              placeholder={t("newArtInputPrice")}
              type="number"
              step="0.01"
              disabled={isCreating}
              className="w-full text-sm sm:text-base"
              {...register("price", { required: t("newArtInputPriceError") })}
            />
            {errors.price && (
              <span className="text-xs text-red-500 sm:text-sm">
                {errors.price.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Controller
              name="category"
              control={control}
              rules={{ required: t("newArtSelectCategoryError") }}
              render={({ field }) => (
                <SelectForm
                  {...field}
                  onChange={field.onChange}
                  disabled={isCreating}
                />
              )}
            />
            {errors.category && (
              <span className="text-xs text-red-500 sm:text-sm">
                {errors.category.message}
              </span>
            )}
          </div>
          <DialogFooter className="flex flex-col gap-2 pt-2 sm:flex-row sm:pt-4">
            <button
              disabled={isCreating}
              onClick={onClear}
              type="reset"
              className="order-2 w-full rounded border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-800 hover:bg-gray-200 sm:order-1 sm:w-auto sm:px-4 sm:text-base"
            >
              {t("newArtClearButton")}
            </button>
            <button
              disabled={isCreating}
              type="submit"
              className="order-1 flex w-full items-center justify-center gap-1 rounded-md bg-[#ffcb05] px-3 py-2 font-poppins text-sm font-medium text-black hover:bg-[#fcde51] disabled:cursor-not-allowed disabled:bg-[#fcde51] sm:order-2 sm:w-auto sm:px-4 sm:text-base"
            >
              {isCreating ? (
                <>
                  <svg
                    className="-ml-1 mr-2 h-4 w-4 animate-spin text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating...
                </>
              ) : (
                t("newArtCreateButton")
              )}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
