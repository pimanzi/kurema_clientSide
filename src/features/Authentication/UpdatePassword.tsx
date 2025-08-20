import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import { useTranslation } from "react-i18next";

interface PasswordUpdate {
  password: string;
  confirmPassword: string;
}
function UpdatePassword() {
  const { t } = useTranslation();
  const { updatingUser, isUpdatingUser } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<PasswordUpdate>();

  function onSubmit(data: PasswordUpdate) {
    updatingUser(
      {
        password: data.password,
      },
      {
        onSettled: () => {
          reset();
        },
      },
    );
  }

  const passwordField = watch("password");
  return (
    <form
      className="w-full max-w-2xl space-y-6 rounded-2xl bg-white p-4 shadow-md sm:p-6 lg:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="font-playfair text-lg font-bold sm:text-xl">
        {t("setPasswordTitle")}
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="password" className="text-sm font-semibold">
            {t("newPasswordField")}
          </Label>
          <Input
            id="password"
            type="password"
            className="w-full"
            {...register("password", {
              required: t("passwordInputAlert"),
            })}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="confirmPassword" className="text-sm font-semibold">
            {t("confirmPasswordInput")}
          </Label>
          <Input
            type="password"
            id="confirmPassword"
            className="w-full"
            {...register("confirmPassword", {
              required: t("confirmPasswordInputAlert"),
              validate: (value) =>
                value === passwordField || t("passwordsMatchAlert"),
            })}
          />
          {errors.confirmPassword && (
            <span className="text-xs text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>

      <div className="pt-4">
        <Button
          disabled={isUpdatingUser}
          className="w-full rounded-full bg-[#ffcb05] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#fcde51] focus:outline-none focus:ring-2 focus:ring-[#ffcb05] focus:ring-offset-2 sm:w-auto sm:px-8"
        >
          {t("saveChanges")}
        </Button>
      </div>
    </form>
  );
}

export default UpdatePassword;
