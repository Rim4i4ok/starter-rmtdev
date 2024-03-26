import { useEffect, useState } from "react";
import Background from "./components/Background";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header, { HeaderTop } from "./components/Header";
import { API_URL } from "./lib/constants";
import Logo from "./components/Logo";
import BookmarksButton from "./components/BookmarksButton";
import SearchForm from "./components/SearchForm";
import Sidebar, { SidebarTop } from "./components/Sidebar";
import JobItemContent from "./components/JobItemContent";
import ResultsCount from "./components/ResultsCount";
import SortingControls from "./components/SortingControls";
import JobList from "./components/JobList";
import PaginationControls from "./components/PaginationControls";

function App() {
  const [searchText, setSearchText] = useState("react");
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(API_URL + `?search=${searchText}`);
      const data = await response.json();

      setIsLoading(false);
      setJobItems(data.jobItems);
    };

    fetchData();
  }, [searchText]);

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