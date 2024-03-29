import { createContext, useState } from "react";
import { useDebounce } from "../lib/hooks";

type SearchTextContextProviderProps = {
  children: React.ReactNode;
};

type TSearchTextContext = {
  searchText: string;
  debouncedSearchText: string;
  handleChangeSearchText: (newSearchText: string) => void;
};

export const SearchTextContext = createContext<TSearchTextContext | null>(null);

export function SearchTextContextProvider({
  children,
}: SearchTextContextProviderProps) {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);

  const handleChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  return (
    <SearchTextContext.Provider
      value={{ searchText, debouncedSearchText, handleChangeSearchText }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
