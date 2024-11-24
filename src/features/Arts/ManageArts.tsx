import { useAuthUsers } from "../Authentication/useAuthUsers.tsx";
import useUser from "../Authentication/useUser.tsx";
import ArtsActions from "./ArtsActions.tsx";
import ArtsShow from "./ArtsShow.tsx";
import { CreateArt } from "./CreateArt.tsx";
import { useArts } from "./useArts.tsx";

export default function ManageArts() {
  const { user } = useUser();
  const userId = user?.id;
  const { arts } = useArts();
  const { authUsers, isLoading: isAuthUsersLoading } = useAuthUsers();

  const authUser = authUsers?.find((user) => user.authUserId === userId);
  const id = authUser?.id;
  const artsShow = arts?.filter((art) => art.userId === id);

  return (
    <div className="mb-[100px] mt-[80px] space-y-9">
      <div className="space-y-3">
        <h2 className="font-playfair text-4xl font-extrabold">Art Manager</h2>
        <p className="font-lg font-light text-[#504f4f]">
          Your Art, Your Way,{" "}
          <span className="font-bold text-[#ffcb05]">
            Organize Your Art World
          </span>
        </p>
      </div>
      {isAuthUsersLoading ? (
        <div className="flex h-screen items-center justify-center bg-white">
          <div className="loader"></div>
        </div>
      ) : artsShow?.length === 0 ? (
        <div className="flex h-[30vh] flex-col items-center justify-center gap-4">
          <p className="text-lg text-gray-600">
            You haven’t added any art yet. Click 'New Art' to showcase your
            talent!
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
