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
    <div className="mb-[100px] mt-[80px] space-y-9">
      <div className="space-y-3">
        <h2 className="font-playfair text-4xl font-extrabold">
          {t("artManager")}
        </h2>
        <p className="font-lg space-x-1 font-light text-[#504f4f]">
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
        <div className="flex h-[30vh] flex-col items-center justify-center gap-4">
          <p className="text-lg text-gray-600">{t("noPersonalArts")}</p>
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
