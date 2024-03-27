import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants";
import { JobItem } from "../types";

type JobItemsApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
};

const fetchJobItems = async (
  searchText: string
): Promise<JobItemsApiResponse> => {
  const response = await fetch(API_URL + `?search=${searchText}`);
  const data = await response.json();

  return data;
};

export function useJobItems(searchText: string) {
  const { data, isInitialLoading } = useQuery(
    ["job-items", searchText],
    () => fetchJobItems(searchText),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText),
      onError: (error) => {
        console.error(error);
      },
    }
  );

  return {
    jobItems: data?.jobItems ?? [],
    isLoading: isInitialLoading,
  } as const;
}
