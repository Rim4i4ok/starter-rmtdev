import { Toaster } from "react-hot-toast";
import Background from "./components/Background";
import BookmarksButton from "./components/BookmarksButton";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header, { HeaderTop } from "./components/Header";
import JobItemContent from "./components/JobItemContent";
import JobListSearch from "./components/JobListSearch";
import Logo from "./components/Logo";
import PaginationControls from "./components/PaginationControls/PaginationControls";
import ResultsCount from "./components/ResultsCount";
import SearchForm from "./components/SearchForm";
import Sidebar, { SidebarTop } from "./components/Sidebar";
import SortingControls from "./components/SortingControls/SortingControls";

function App() {
  console.log("render");
  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>

          <JobListSearch />

          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
