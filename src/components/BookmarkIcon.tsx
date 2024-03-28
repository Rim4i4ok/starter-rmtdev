import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../lib/hooks";

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();

  return (
    <button
      className="bookmark-btn"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();

        handleToggleBookmark(id);
      }}
    >
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) && "filled"}`}
      />
    </button>
  );
}
