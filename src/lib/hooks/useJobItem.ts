import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants";
import { JobItemExpanded } from "../types";

type JobItemApiResponse = {
  public: boolean;
  jobItem: JobItemExpanded;
};

const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();

  return data;
};

export function useJobItem(id: number | null) {
  const { data, isInitialLoading } = useQuery(
    ["job-item", id],
    () => (id ? fetchJobItem(id) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: () => {},
    }
  );

  const jobItem = data?.jobItem;
  return [jobItem, isInitialLoading] as const;
}
