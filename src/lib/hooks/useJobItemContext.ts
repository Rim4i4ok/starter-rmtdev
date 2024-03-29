import { useContext } from "react";
import { JobItemContext } from "../../contexts/JobItemContextProvider";

export function useJobItemContext() {
  const context = useContext(JobItemContext);
  if (!context) {
    throw new Error(
      "useJobItemContext must be used within a JobItemContextProvider"
    );
  }

  return context;
}
