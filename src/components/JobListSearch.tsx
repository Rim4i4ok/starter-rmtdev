import { useJobItemContext } from "../lib/hooks";
import JobList from "./JobList";

function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemContext();

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
}

export default JobListSearch;
