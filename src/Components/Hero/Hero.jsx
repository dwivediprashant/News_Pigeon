import NewsCard from "../ui/NewsCard";
import "./hero.css";
export default function Hero({
  NEWS_API,
  category,
  country,
  language,
  pageNo,
  setPageNo,
  totalResults,
  articles,
  setArticles,
  loadMore,
  hasMore,
}) {
  return (
    <div className="hero">
      <NewsCard
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
    </div>
  );
}
