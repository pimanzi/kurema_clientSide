import { deleteArt } from "../../services/apiArts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useArts } from "./useArts";
export function useDeleteArt() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { refetch } = useArts();
  const { isPending: isDeleting, mutate: deleteArts } = useMutation({
    mutationFn: (id: number) => deleteArt(id),
    onSuccess: () => {
      // Invalidate the query to refetch data
      queryClient.invalidateQueries({ queryKey: ["arts"] });

      // Call refetch directly to ensure the arts are reloaded
      refetch();

      toast.success(t("toastSuccessDeleteTask"));
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteArts };
}
