import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { JobItemExpanded } from "../types";

export function useJobItem(id: number | null) {
  const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();

      setIsLoading(false);
      setJobItem(data.jobItem);
    };

    fetchData();
  }, [id]);

  return [jobItem, isLoading] as const;
}
