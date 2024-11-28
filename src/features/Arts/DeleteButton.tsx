import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDeleteArt } from "./useDeleteArts";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({ id }: { id: number }) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isDeleting, deleteArts } = useDeleteArt();
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <button className="flex w-full items-center justify-center gap-1 rounded-md bg-red-500 px-4 py-2 font-poppins text-base font-medium text-white hover:bg-red-300 disabled:bg-red-200">
          {t("delete")}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[var(--color-text-main)]">
            {t("deleteTitle")}
          </DialogTitle>
          <DialogDescription className="text-[var(--color-grey-500)]">
            {t("deleteDescription")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex items-center justify-end gap-2">
          <button
            onClick={() => setOpenDialog(false)}
            className="rounded border border-gray-300 bg-transparent px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            {t("cancelDelete")}
          </button>
          <button
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-400"
            disabled={isDeleting}
            onClick={() => {
              deleteArts(id);
              navigate("/account/manageArts/");
              setOpenDialog(false);
            }}
          >
            {t("delete")}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
