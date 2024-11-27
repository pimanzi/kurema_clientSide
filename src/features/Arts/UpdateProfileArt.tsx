import { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { useArts } from "./useArts";
import useUser from "../Authentication/useUser";
import { useAuthUsers } from "../Authentication/useAuthUsers";
import { useUpdateArt } from "./useUpdateArt";

export interface FormData {
  name: string;
  description: string;
  image: FileList;
  price: number;
  category: string;
}

export function UpdatePersonalArt({ id }: { id: number }) {
  const { user } = useUser();
  const userId = user?.id;
  const { authUsers } = useAuthUsers();
  const { updateArts, isEditing } = useUpdateArt();

  const authUser = authUsers?.find((user) => user.authUserId === userId);
  const authUserId = authUser?.id;
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const { arts } = useArts();
  const selectedArt = arts?.find((art) => art.id === id);

  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: selectedArt?.name || "",
      description: selectedArt?.description || "",
      image: undefined,
      price: selectedArt?.price || 0,
      category: selectedArt?.category || "",
    },
  });
  useEffect(() => {
    if (open && selectedArt) {
      reset({
        name: selectedArt.name || "",
        description: selectedArt.description || "",
        image: undefined,
        price: selectedArt.price || 0,
        category: selectedArt.category || "",
      });
    }
  }, [open, selectedArt, reset]);

  const imageFile = watch("image")?.[0];

  const onSubmit = (data: FormData) => {
    updateArts(
      {
        id: id,
        newCol: {
          image: data.image?.[0] || selectedArt?.image,
          name: data.name,
          description: data.description,

          category: data.category,
          userId: authUserId,
          price: data.price,
        },
      },
      {
        onSuccess: () => {
          setOpen(false);
          onClear();
        },
      },
    );
  };

  function onClear() {
    reset({
      name: selectedArt?.name || "",
      description: selectedArt?.description || "",
      image: undefined,
      price: selectedArt?.price || 0,
      category: selectedArt?.category || "",
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-gray-800 hover:bg-gray-200">
          {t("updateArt")}
        </button>
      </DialogTrigger>
      <DialogContent className="w-[450px] rounded border border-gray-300 bg-white p-6">
        <DialogHeader>
          <DialogTitle>{t("updateArtwork")}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {t("updateArtworkDescription")}
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input */}
          <div>
            <Input
              id="name"
              placeholder={t("newArtInputNameField")}
              type="text"
              disabled={isEditing}
              {...register("name")}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Description Input */}
          <div>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextareaUi
                  {...field}
                  value={field.value}
                  disabled={isEditing}
                  placeholder={t("newArtInputDescriptionField")}
                ></TextareaUi>
              )}
            />
            {errors.description && (
              <span className="text-xs text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>
          {/* Image Input */}
          <div>
            <div className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 hover:cursor-pointer focus:border-[#ffcb05] focus:outline-none">
              <label htmlFor="image" className="text-gray-500">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="image"
                  {...register("image")}
                  disabled={isEditing}
                />
                <span>{imageFile?.name || t("newArtInputImage")}</span>
              </label>
            </div>
          </div>
          {/* Price Input */}
          <div>
            <Input
              id="price"
              placeholder={t("newArtInputPrice")}
              type="number"
              step="0.01"
              disabled={isEditing}
              {...register("price")}
            />
            {errors.price && (
              <span className="text-xs text-red-500">
                {errors.price.message}
              </span>
            )}
          </div>
          {/* Category Input */}
          <div>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <SelectForm
                  {...field}
                  onChange={field.onChange}
                  disabled={isEditing}
                />
              )}
            />
          </div>
          <DialogFooter className="flex gap-2">
            <button
              disabled={isEditing}
              onClick={onClear}
              type="reset"
              className="rounded border border-gray-300 bg-transparent px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Clear
            </button>
            <button
              disabled={isEditing}
              type="submit"
              className="flex items-center gap-1 rounded-md bg-[#ffcb05] px-4 py-2 font-poppins text-base font-medium text-black hover:bg-[#fcde51;] disabled:bg-[#fcde51]"
            >
              Save Changes
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
