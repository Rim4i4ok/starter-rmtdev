import { useState } from "react";
import Background from "./components/Background";
import BookmarksButton from "./components/BookmarksButton";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header, { HeaderTop } from "./components/Header";
import JobItemContent from "./components/JobItemContent";
import JobList from "./components/JobList";
import Logo from "./components/Logo";
import PaginationControls from "./components/PaginationControls/PaginationControls";
import ResultsCount from "./components/ResultsCount";
import SearchForm from "./components/SearchForm";
import Sidebar, { SidebarTop } from "./components/Sidebar";
import SortingControls from "./components/SortingControls";
import { useDebounce, useJobItems } from "./lib/hooks";
import { Toaster } from "react-hot-toast";
import { Direction } from "./lib/types";
import { RESULTS_PER_PAGE } from "./lib/constants";

function App() {
  // state
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 200);
  const { isLoading, jobItems } = useJobItems(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);

  // derived / computed state
  const totalNumberOfResults = jobItems.length;
  const totalNumberOfPages = Math.ceil(totalNumberOfResults / RESULTS_PER_PAGE);
  const jobItemsSliced = jobItems.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  // event handlers / actions
  const handleChangePage = (direction: Direction) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResults={totalNumberOfResults} />
            <SortingControls />
          </SidebarTop>

          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />

          <PaginationControls
            currentPage={currentPage}
            totalNumberOfPages={totalNumberOfPages}
            onChangePage={handleChangePage}
          />
        </Sidebar>
        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
