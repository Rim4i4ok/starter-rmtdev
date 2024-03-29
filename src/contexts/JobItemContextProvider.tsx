import { createContext, useMemo, useState } from "react";
import { RESULTS_PER_PAGE } from "../lib/constants";
import { useSearchQuery, useSearchTextContext } from "../lib/hooks";
import { SortBy, Direction, JobItem } from "../lib/types";

type JobItemContextProviderProps = {
  children: React.ReactNode;
};

type TJobItemContext = {
  jobItems: JobItem[];
  jobItemsSortedAndSliced: JobItem[];
  isLoading: boolean;
  sortBy: SortBy;
  totalNumberOfPages: number;
  totalNumberOfResults: number;
  currentPage: number;
  handleChangePage: (direction: Direction) => void;
  handleChangeSortBy: (newSortBy: SortBy) => void;
};

export const JobItemContext = createContext<TJobItemContext | null>(null);

export function JobItemContextProvider({
  children,
}: JobItemContextProviderProps) {
  // dependencies on other contexts
  const { debouncedSearchText } = useSearchTextContext();

  // state
  const { isLoading, jobItems } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("relevant");

  console.log("JobItemContextProvider");

  // derived / computed state
  const totalNumberOfResults = jobItems.length;
  const totalNumberOfPages = Math.ceil(totalNumberOfResults / RESULTS_PER_PAGE);
  const jobItemsSorted = useMemo(
    () =>
      [...jobItems].sort((a, b) => {
        if (sortBy === "relevant") {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      }),
    [jobItems, sortBy]
  );
  const jobItemsSortedAndSliced = useMemo(
    () =>
      jobItemsSorted.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
      ),
    [jobItemsSorted, currentPage]
  );

  // event handlers / actions

  const handleChangePage = (direction: Direction) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleChangeSortBy = (newSortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  };

  return (
    <JobItemContext.Provider
      value={{
        jobItems,
        jobItemsSortedAndSliced,
        isLoading,
        sortBy,
        totalNumberOfPages,
        totalNumberOfResults,
        currentPage,
        handleChangePage,
        handleChangeSortBy,
      }}
    >
      {children}
    </JobItemContext.Provider>
  );
}
