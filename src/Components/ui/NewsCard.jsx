import InfiniteScroll from "react-infinite-scroll-component";
import "./newscard.css";

import Spinner from "./Spinner";

export default function NewsCard({ articles, loadMore, hasMore }) {
  return (
    <>
      <div className="newscard">
        <InfiniteScroll
          className="infinite-scroll"
          dataLength={articles.length}
          hasMore={hasMore}
          next={loadMore}
          loader={<Spinner />}
          endMessage={
            <div className="d-block w-100 text-center m-5">
              <button
                className="btn btn-sm btn-dark"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Go to top <i class="fa-solid fa-arrow-up"></i>
              </button>
            </div>
          }
        >
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
                    <span className="position-absolute top-0 start-0 badge bg-danger">
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
                  <div className="card-body card-body-below">
                    <p className="card-text ms-3">
                      <small className="text-body-secondary">
                        <i className="fa-solid fa-user"></i>
                        {article.author ? article.author : "Unknown"}
                        &nbsp;&nbsp;
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
        </InfiniteScroll>
      </div>
    </>
  );
}
