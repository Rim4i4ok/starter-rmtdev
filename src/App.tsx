import { useEffect, useState } from "react";
import Background from "./components/Background";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { API_URL } from "./lib/constants";

function App() {
  const [searchText, setSearchText] = useState("react");
  const [jobItems, setJobItems] = useState([]);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      const response = await fetch(API_URL + `?search=${searchText}`);
      const data = await response.json();
      setJobItems(data.jobItems);
    };

    fetchData();
  }, [searchText]);

  return (
    <>
      <Background />

      <Header searchText={searchText} setSearchText={setSearchText} />

      <Container jobItems={jobItems} />

      <Footer />
    </>
  );
}

export default App;
