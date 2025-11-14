import NewsCard from "../ui/NewsCard";
import "./hero.css";
export default function Hero({
  pageNo,
  totalResults,
  articles,
  loading,
  handleLoading,
  handlePrevPageChange,
  handleNextPageChange,
}) {
  return (
    <div className="hero">
      <NewsCard
        pageNo={pageNo}
        totalResults={totalResults}
        articles={articles}
        loading={loading}
        handleLoading={handleLoading}
        handlePrevPageChange={handlePrevPageChange}
        handleNextPageChange={handleNextPageChange}
      />
    </div>
  );
}
