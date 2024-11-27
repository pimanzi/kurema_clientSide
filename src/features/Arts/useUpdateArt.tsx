import { Art } from "@/interfaces";
import { updateArt } from "@/services/apiArts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useUpdateArt() {
  const queryClient = useQueryClient();

  const { mutate: updateArts, isPending: isEditing } = useMutation({
    mutationFn: ({ id, newCol }: { id: number; newCol: Art }) =>
      updateArt(id, newCol),
    onSuccess: () => {
      toast.success("Art successfully updated");
      queryClient.invalidateQueries({ queryKey: ["arts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateArts };
}
