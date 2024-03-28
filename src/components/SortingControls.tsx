import { SortBy } from "../lib/types";

type SortingControlsProps = {
  sortBy: SortBy;
  onClick: (sortBy: SortBy) => void;
};

export default function SortingControls({
  sortBy,
  onClick,
}: SortingControlsProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button
        className={`sorting__button sorting__button--relevant ${
          sortBy === "relevant" && "sorting__button--active"
        }`}
        onClick={() => onClick("relevant")}
      >
        Relevant
      </button>

      <button
        className={`sorting__button sorting__button--recent ${
          sortBy === "recent" && "sorting__button--active"
        }`}
        onClick={() => onClick("recent")}
      >
        Recent
      </button>
    </section>
  );
}
