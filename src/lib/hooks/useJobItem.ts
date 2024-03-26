import { useEffect, useState } from "react";
import { API_URL } from "../constants";

export function useJobItem(id: number | null) {
  const [jobItem, setJobItem] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setJobItem(data.jobItem);
    };

    fetchData();
  }, [id]);

  return jobItem;
}
