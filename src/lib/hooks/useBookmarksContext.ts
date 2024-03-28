import { useContext } from "react";
import { BookmarksContext } from "../../contexts/BookmarksContextProvider";

export function useBookmarksContext() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error(
      "useBookmarksContext must be used within a BookmarksContextProvider"
    );
  }

  return context;
}
