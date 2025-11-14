import "./newscard.css";
import Pagination from "./Pagination";

export default function NewsCard({
  pageNo,
  totalResults,
  articles,
  handlePrevPageChange,
  handleNextPageChange,
}) {
  return (
    <>
      <div className="newscard">
        {articles.length &&
          articles.map((article, idx) => {
            return (
              <div className="card" key={idx}>
                <div>
                  <img
                    src={`${
                      article.urlToImage
                        ? article.urlToImage
                        : "../../../imgNotFound.webp"
                    }`}
                    className="card-img-top"
                    alt="img"
                  />
                  <span className="position-absolute top-0 start-0 badge rounded-pill bg-dark">
                    # {article.source.name}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {article.title
                      ? article.title
                      : "No title for more click on see in detail"}
                  </h5>
                  <p className="card-text">
                    {article.description
                      ? article.description
                      : "No description click see in detail"}
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-text ms-3">
                    <small className="text-body-secondary">
                      <i className="fa-solid fa-user"></i>
                      {article.author ? article.author : "Unknown"}&nbsp;&nbsp;
                      <i className="fa-solid fa-calendar"></i>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </small>
                  </p>
                  <a
                    href={`${article.url}`}
                    className="card-link link"
                    target="_blank"
                  >
                    See in detail
                  </a>
                </div>
              </div>
            );
          })}
      </div>
      <div className="d-flex justify-content-center my-5">
        <Pagination
          totalResults={totalResults}
          pageNo={pageNo}
          handleNextPageChange={handleNextPageChange}
          handlePrevPageChange={handlePrevPageChange}
        />
      </div>
    </>
  );
}
