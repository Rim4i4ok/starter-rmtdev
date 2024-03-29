import { useJobItemContext } from "../../lib/hooks";
import PaginationButton from "./components/PaginationButton";

export default function PaginationControls() {
  const {
    currentPage,
    totalNumberOfPages,
    handleChangePage: onClick,
  } = useJobItemContext();
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          currentPage={currentPage}
          direction="previous"
          onClick={() => onClick("previous")}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          currentPage={currentPage}
          direction="next"
          onClick={() => onClick("next")}
        />
      )}
    </section>
  );
}
