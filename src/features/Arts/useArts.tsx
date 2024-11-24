import { useQuery } from "@tanstack/react-query";
import { getArts } from "../../services/apiArts";

export function useArts() {
  const {
    data: arts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["arts"],
    queryFn: getArts,
  });

  return { arts, isLoading, refetch };
}
