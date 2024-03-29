import { API_URL } from "./constants";
import { JobItemExpanded } from "./types";

type JobItemApiResponse = {
  public: boolean;
  jobItem: JobItemExpanded;
};

export const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
  const response = await fetch(`${API_URL}/${id}`);

  // 4xx or 5xx
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  const data = await response.json();
  return data;
};
