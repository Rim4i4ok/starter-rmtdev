import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants";

export function useJobItem(id: number | null) {
  const { data, isLoading } = useQuery(
    ["job-item", id],
    async () => {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();

      return data;
    },
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: () => {},
    }
  );

  const jobItem = data.jobItem;
  return [jobItem, isLoading] as const;
}
