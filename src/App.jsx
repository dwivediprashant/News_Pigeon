import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [pageNo, setPageNo] = useState(1);
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");
  const [totalResults, setTotalResults] = useState(0);
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  // NEWS_API
  const NEWS_API = import.meta.env.VITE_NEWS_API_KEY;
  const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API}&pageSize=10&category=${category}&page=${pageNo}&language=${language}`;
  //--------------------------------------------
  //-------api call------------------
  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get(NEWS_URL);
        console.log(res.data);
        if (pageNo === 1) {
          setArticles(res.data.articles);
        } else {
          setArticles((prev) => [...prev, ...res.data.articles]);
        }
        setTotalResults(res.data.totalResults);
        if (res.data.articles.length === 0) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, [pageNo, country, category, language]);
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPageNo(1);
    setArticles([]);
    setHasMore(true);
  };

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
    setPageNo(1);
    setArticles([]);
    setHasMore(true);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setPageNo(1);
    setArticles([]);
    setHasMore(true);
  };
  const loadMore = () => {
    // just bump pageNo; useEffect will fetch and append
    setPageNo((prev) => prev + 1);
  };
  //------------------------------------
  return (
    <div className="main">
      <Navbar
        category={category}
        country={country}
        language={language}
        handleCategoryChange={handleCategoryChange}
        handleCountryChange={handleCountryChange}
        handleLanguageChange={handleLanguageChange}
      />
      <div className="title-pagination ">
        <h2 className="m-3 text-primary">
          News Pigeon - Top headlines from{" "}
          <span className="text-danger">{category}</span> category
        </h2>
      </div>

      <Hero
        NEWS_API={NEWS_API}
        category={category}
        country={country}
        language={language}
        pageNo={pageNo}
        setPageNo={setPageNo}
        totalResults={totalResults}
        articles={articles}
        setArticles={setArticles}
        loadMore={loadMore}
        hasMore={hasMore}
      />

      <Footer />
    </div>
  );
}

export default App;
