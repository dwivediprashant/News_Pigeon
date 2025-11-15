import DropdownTab from "../ui/DropdownTab";
import "./Navbar.css";
export default function Navbar({
  category,
  country,
  language,
  handleCategoryChange,
  handleCountryChange,
  handleLanguageChange,
}) {
  return (
    <nav className="navbar  navbar-expand-md">
      <div className="container">
        <span className="navbar-brand d-flex align-items-center justify-content-center">
          <img
            src="../../../logo.svg"
            alt="Logo"
            className="d-inline-block align-text-top logo-img"
          />
          <span className="text-light">News Pigeon</span>
        </span>
        <div className="d-flex justify-content-between bg-succes">
          <DropdownTab
            category={category}
            country={country}
            language={language}
            handleCategoryChange={handleCategoryChange}
            handleCountryChange={handleCountryChange}
            handleLanguageChange={handleLanguageChange}
          />
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end  mx-4"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link " href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
