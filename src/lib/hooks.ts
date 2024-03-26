import { useEffect, useState } from "react";
import { API_URL } from "./constants";

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return { jobItems, isLoading };
}
