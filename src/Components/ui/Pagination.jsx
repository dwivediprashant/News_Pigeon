export default function Pagination({
  totalResults,
  pageNo,
  handlePrevPageChange,
  handleNextPageChange,
}) {
  return (
    <nav
      aria-label="Page navigation example"
      style={{ maxWidth: "max-content" }}
    >
      <ul className="pagination">
        <li className="page-item">
          <button
            className="text-dark page-link text-nowrap"
            onClick={handlePrevPageChange}
            disabled={pageNo <= 1}
          >
            <i className="fa-solid fa-angles-left"></i> Previous
          </button>
        </li>
        <li className="page-item">
          <button
            className="text-dark page-link text-nowrap"
            onClick={handleNextPageChange}
            disabled={pageNo >= Math.ceil(totalResults / 9)}
          >
            Next <i className="fa-solid fa-angles-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}
