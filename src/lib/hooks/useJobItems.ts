import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants";
import { JobItem } from "../types";
import toast from "react-hot-toast";

type JobItemsApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
};

const fetchJobItems = async (
  searchText: string
): Promise<JobItemsApiResponse> => {
  const response = await fetch(API_URL + `?search=${searchText}`);

  // 4xx or 5xx
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

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
        toast.error(error.message);
      },
    }
  );

  return {
    jobItems: data?.jobItems ?? [],
    isLoading: isInitialLoading,
  } as const;
}
