import { useEffect, useState } from "react";
import { API_URL } from "./constants";

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(API_URL + `?search=${searchText}`);
      const data = await response.json();

      setIsLoading(false);
      setJobItems(data.jobItems);
    };

    fetchData();
  }, [searchText]);

  return { jobItemsSliced, isLoading };
}
