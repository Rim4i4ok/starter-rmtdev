import { useQueries } from "@tanstack/react-query";
import { fetchJobItem } from "../api";
import { handleError } from "../utils";

export function useJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    })),
  });

  const jobItems = results
    .map((item) => item.data?.jobItem)
    .filter((item) => item !== undefined);

  const isLoading = results.some((item) => item.isLoading);

  return { jobItems, isLoading };
}
