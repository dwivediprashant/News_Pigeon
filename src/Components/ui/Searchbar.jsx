export default function Searchbar() {
  return (
    <div>
      <form class="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
        />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
