import { Direction } from "../../lib/types";
import PaginationButton from "./components/PaginationButton";

type PaginationControlsProps = {
  currentPage: number;
  onChangePage: (direction: Direction) => void;
};

export default function PaginationControls({
  currentPage,
  onChangePage,
}: PaginationControlsProps) {
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          currentPage={currentPage}
          direction="previous"
          onClick={() => onChangePage("previous")}
        />
      )}
      <PaginationButton
        currentPage={currentPage}
        direction="next"
        onClick={() => onChangePage("next")}
      />
    </section>
  );
}
