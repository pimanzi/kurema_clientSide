import { Button } from "@/components/ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useDeleteArt } from "@/features/Arts/useDeleteArts";
import { useTranslation } from "react-i18next";

export function PopoverArt({ id }: { id: number }) {
  const { t } = useTranslation();
  const { deleteArts, isDeleting } = useDeleteArt();
  const [open, setOpen] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="mb-0 mr-2 mt-2 h-fit w-[10px] border-none py-2 transition-all duration-300 hover:bg-[#ffcb05]"
        >
          <BsThreeDotsVertical className="text-black" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-fit space-y-3 bg-white"
        side="right"
        sideOffset={4}
        align="start"
      >
        <ul>
          <li className="flex items-center gap-2 px-2 py-2 font-poppins transition-all duration-300 hover:bg-[#ffcb05]">
            <LuEye></LuEye>
            <span>{t("viewDetails")}</span>
          </li>

          <li className="flex items-center gap-2 px-2 py-2 font-poppins transition-all duration-300 hover:bg-red-200">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <button className="w-full border-none bg-[var(--color-grey-0)] px-0 py-0 text-[var(--color-text-main)] hover:bg-[var(--color-bg-main)]">
                  {" "}
                  <div className="flex w-full cursor-pointer items-center gap-2 text-[var(--color-text-main)] hover:border-none hover:bg-[var(--color-light-black)]">
                    <MdDelete />
                    <p>{t("delete")}</p>
                  </div>
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
                      setOpenDialog(false);
                      setOpen(false);
                    }}
                  >
                    {t("delete")}
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
