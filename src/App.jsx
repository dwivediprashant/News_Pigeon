import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Pagination from "./Components/ui/Pagination";
import Spinner from "./Components/ui/Spinner";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [pageNo, setPageNo] = useState(1);
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");
  // NEWS_API
  const NEWS_API = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=b79c6bb0cdb7403fae6a89bbbbdb627e&pageSize=7&category=${category}&page=${pageNo}`;
  //--------------------------------------------
  let [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [articles, setArticles] = useState([]);
  const handlePrevPageChange = () => {
    setPageNo((prev) => prev - 1);
  };
  const handleNextPageChange = () => {
    setPageNo((prev) => prev + 1);
  };
  const handleLoading = (val) => {
    setLoading(val);
  };
  //-------api call------------------
  useEffect(() => {
    async function load() {
      handleLoading(true);
      const res = await axios.get(NEWS_API);
      handleLoading(false);
      console.log(res.data);
      setArticles(res.data.articles);
      setTotalResults(res.data.totalResults);
    }
    load();
  }, [pageNo, country, category, language]);
  //------------------------------------
  return (
    <div className="main">
      <Navbar
        category={category}
        country={country}
        language={language}
        setCountry={setCountry}
        setCategory={setCategory}
        setLanguage={setLanguage}
      />
      <div className="title-pagination ">
        <h2 className="m-3 text-primary">
          News Pigeon - Top headlines from{" "}
          <span className="text-danger">{category}</span> category
        </h2>
        <Pagination
          totalResults={totalResults}
          pageNo={pageNo}
          handleNextPageChange={handleNextPageChange}
          handlePrevPageChange={handlePrevPageChange}
        />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Hero
          pageNo={pageNo}
          totalResults={totalResults}
          articles={articles}
          handlePrevPageChange={handlePrevPageChange}
          handleNextPageChange={handleNextPageChange}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
