import { Input } from "@/components/ui/input";
import useUser from "./useUser";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FaCamera } from "react-icons/fa";
import { useUpdateAvatar } from "./useUpdateAvatar";
import { useUpdateUser } from "./useUpdateUser";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

function UpdateUserInfo() {
  const { updatingUser, isUpdatingUser } = useUpdateUser();
  const { updatingAvatar, isUpdatingAvatar } = useUpdateAvatar();
  const { user } = useUser();
  const currentFirstName = user?.user_metadata.firstName;
  const currentLastName = user?.user_metadata.lastName;
  const email = user?.email;
  const avatar = user?.user_metadata.avatar;
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState<string>(currentFirstName);
  const [lastName, setLastName] = useState<string>(currentLastName);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!firstName && !lastName) return;
    updatingUser({
      firstName: firstName,
      lastName: lastName,
    });
  }

  return (
    <form
      className="w-full max-w-2xl space-y-6 rounded-2xl bg-white p-4 shadow-md sm:p-6 lg:p-8"
      onSubmit={onSubmit}
    >
      <h3 className="font-playfair text-lg font-bold sm:text-xl">
        {t("accountPersonalInfo")}
      </h3>

      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
        <Label
          htmlFor="avatar"
          className="relative block h-[70px] w-[70px] cursor-pointer overflow-hidden rounded-full text-sm font-semibold sm:h-[80px] sm:w-[80px]"
        >
          <div className="absolute inset-0 z-10 rounded-full bg-black opacity-50"></div>

          <img
            src={avatar ? avatar : "/Images/default-user.jpg"}
            alt="avatar"
            className="z-0 h-full w-full rounded-full object-cover"
            style={{ opacity: 0.8 }}
          />

          {isUpdatingAvatar ? (
            <div className="smallSpinner absolute inset-0 z-20 m-auto"></div>
          ) : (
            <FaCamera
              size={20}
              color="white"
              className="absolute inset-0 z-20 m-auto font-bold"
            />
          )}

          <input
            type="file"
            accept="image/*"
            id="avatar"
            className="hidden"
            disabled={isUpdatingAvatar}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                updatingAvatar({ avatar: file });
              } else {
                toast.error(t("personalInfoImageAlert"));
              }
            }}
          />
        </Label>

        <div className="mt-4 flex-1 space-y-4 sm:mt-0">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-sm font-semibold">
              {t("emailInput")}
            </Label>
            <Input value={email} disabled id="email" className="w-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="firstName" className="text-sm font-semibold">
            {t("firstNameInput")}
          </Label>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="lastName" className="text-sm font-semibold">
            {t("lastNameInput")}
          </Label>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            className="w-full"
          />
        </div>
      </div>

      <div className="pt-4">
        <Button
          disabled={isUpdatingUser}
          type="submit"
          className="w-full rounded-full bg-[#ffcb05] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#fcde51] focus:outline-none focus:ring-2 focus:ring-[#ffcb05] focus:ring-offset-2 sm:w-auto sm:px-8"
        >
          {t("saveChanges")}
        </Button>
      </div>
    </form>
  );
}

export default UpdateUserInfo;
