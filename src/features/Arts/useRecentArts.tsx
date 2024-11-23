import { useQuery } from "@tanstack/react-query";
import { getRecentArts } from "../../services/apiArts";

export function useRecentArts() {
  const { data: arts, isLoading } = useQuery({
    queryKey: ["recentArts"],
    queryFn: getRecentArts,
  });

  return { arts, isLoading };
}
