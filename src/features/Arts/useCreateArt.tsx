import { Art } from "@/interfaces";
import { insertArt } from "../../services/apiArts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useArts } from "./useArts";

export function useCreateArt() {
  const { refetch } = useArts();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const { mutate: createArt, isPending: isCreating } = useMutation({
    mutationFn: (art: Art) => insertArt(art),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["arts", "recentArts"] });
      refetch();
      toast.success(t("toastSuccessArtCreation"));
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createArt };
}
