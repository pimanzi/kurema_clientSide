import useUser from "../Authentication/useUser.tsx";
import ArtsActions from "./ArtsActions.tsx";
import ArtsShow from "./ArtsShow.tsx";
import { CreateArt } from "./CreateArt.tsx";
import { useArts } from "./useArts.tsx";

export default function ManageArts() {
  const { user } = useUser();
  const userId = user?.id;
  const { arts } = useArts();

  // Filter arts based on the logged-in user
  const artsShow = arts?.filter(
    (art) => art.authUsers && art.authUsers.authUserId === userId,
  );

  // Get userId from the first art if available
  const id = artsShow && artsShow.length > 0 ? artsShow[0].userId : null;

  if (!artsShow || artsShow.length === 0) {
    return (
      <div className="flex h-[40vh] items-center justify-center gap-4">
        <p>
          You haven’t added any art yet. Click 'New Art' to showcase your
          talent!
        </p>
        <CreateArt id={id} />
      </div>
    );
  }

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
      <ArtsActions id={id} />
      <ArtsShow />
    </div>
  );
}
