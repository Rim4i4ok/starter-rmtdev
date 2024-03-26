import { useState } from "react";
import Background from "./components/Background";
import BookmarksButton from "./components/BookmarksButton";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header, { HeaderTop } from "./components/Header";
import JobItemContent from "./components/JobItemContent";
import JobList from "./components/JobList";
import Logo from "./components/Logo";
import PaginationControls from "./components/PaginationControls";
import ResultsCount from "./components/ResultsCount";
import SearchForm from "./components/SearchForm";
import Sidebar, { SidebarTop } from "./components/Sidebar";
import SortingControls from "./components/SortingControls";
import { useJobItems } from "./lib/hooks";

function App() {
  const [searchText, setSearchText] = useState("react");
  const { isLoading, jobItemsSliced: jobItems } = useJobItems(searchText);

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
            <ResultsCount />
            <SortingControls />
          </SidebarTop>

          <JobList jobItems={jobItems} isLoading={isLoading} />

          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>

      <Footer />
    </>
  );
}

export default App;
