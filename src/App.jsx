import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import { Route, Routes } from "react-router-dom";
import Feature from "./Pages/Feature";
import About from "./Pages/About";
function App() {
  const [progress, setProgess] = useState(0);
  const setProgessBar = (val) => {
    setProgess(val);
  };
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
        setProgessBar(30);
        if (pageNo === 1) {
          setArticles(res.data.articles);
          setProgessBar(100);
        } else {
          setArticles((prev) => [...prev, ...res.data.articles]);
          setProgessBar(100);
        }
        setTotalResults(res.data.totalResults);
        if (res.data.articles.length === 0) {
          setProgessBar(100);
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } catch (error) {
        console.log(error.message);
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
    setPageNo((prev) => prev + 1);
  };

  //------------------------------------
  return (
    <div className="main">
      <LoadingBar
        color="red"
        progress={progress}
        onLoaderFinished={() => setProgessBar(100)}
        waitingTime={5000}
        height={3}
      ></LoadingBar>
      <Navbar
        category={category}
        country={country}
        language={language}
        handleCategoryChange={handleCategoryChange}
        handleCountryChange={handleCountryChange}
        handleLanguageChange={handleLanguageChange}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="title-pagination">
                <h2 className="m-3 text-primary">
                  News Pigeon - Top headlines from{" "}
                  <span className="text-danger">{category}</span> category
                </h2>
              </div>

              {articles.length === 0 ? (
                <div className="error-msg">
                  <img
                    src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
                    alt=""
                  />
                </div>
              ) : (
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
              )}
            </>
          }
        />
        <Route exact path="/features" element={<Feature />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
