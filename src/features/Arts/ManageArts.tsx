import { useAuthUsers } from "../Authentication/useAuthUsers.tsx";
import useUser from "../Authentication/useUser.tsx";
import ArtsActions from "./ArtsActions.tsx";
import ArtsShow from "./ArtsShow.tsx";
import { CreateArt } from "./CreateArt.tsx";
import { useArts } from "./useArts.tsx";
import { useTranslation } from "react-i18next";

export default function ManageArts() {
  const { user } = useUser();
  const userId = user?.id;
  const { arts } = useArts();
  const { authUsers, isLoading: isAuthUsersLoading } = useAuthUsers();

  const authUser = authUsers?.find((user) => user.authUserId === userId);
  const id = authUser?.id;
  const artsShow = arts?.filter((art) => art.userId === id);
  const { t } = useTranslation();

  return (
    <div className="mb-16 mt-16 space-y-6 px-4 sm:mb-20 sm:mt-20 sm:space-y-8 sm:px-0 md:mb-24 md:mt-24 md:space-y-9 lg:mb-[100px] lg:mt-[80px]">
      <div className="space-y-2 sm:space-y-3">
        <h2 className="font-playfair text-2xl font-extrabold sm:text-3xl md:text-4xl">
          {t("artManager")}
        </h2>
        <p className="text-sm font-light text-[#504f4f] sm:text-base md:text-lg">
          {t("shortDescriptionManager1")}{" "}
          <span className="font-bold text-[#ffcb05]">
            {t("shortDescriptionManager2")}
          </span>
        </p>
      </div>
      {isAuthUsersLoading ? (
        <div className="flex h-screen items-center justify-center bg-white">
          <div className="loader"></div>
        </div>
      ) : artsShow?.length === 0 ? (
        <div className="flex min-h-[25vh] flex-col items-center justify-center gap-3 px-4 text-center sm:min-h-[30vh] sm:gap-4 sm:px-0">
          <p className="text-base text-gray-600 sm:text-lg">
            {t("noPersonalArts")}
          </p>
          <CreateArt id={id} />
        </div>
      ) : (
        <>
          <ArtsActions id={id} />
          <ArtsShow arts={artsShow} />
        </>
      )}
    </div>
  );
}
