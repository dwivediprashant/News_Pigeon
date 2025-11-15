import { Link } from "react-router-dom";
import DropdownTab from "../ui/DropdownTab";
import "./Navbar.css";
import { useState } from "react";
export default function Navbar({
  category,
  country,
  language,
  handleCategoryChange,
  handleCountryChange,
  handleLanguageChange,
}) {
  const [active, setActive] = useState("home");
  const handleSetActive = (val) => {
    setActive(val);
  };
  return (
    <nav className="navbar  navbar-expand-md sticky-top">
      <div className="container-fluid">
        <span className="navbar-brand d-flex align-items-center justify-content-center">
          <img
            src="../../../logo.svg"
            alt="Logo"
            className="d-inline-block align-text-top logo-img"
          />
          <span className="text-light">News Pigeon</span>
        </span>
        <div className="d-flex  justify-content-between ps-2 pe-2  my-3 rounded-3 bg-dark text-center">
          <DropdownTab
            category={category}
            country={country}
            language={language}
            handleCategoryChange={handleCategoryChange}
            handleCountryChange={handleCountryChange}
            handleLanguageChange={handleLanguageChange}
          />
        </div>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end  mx-4"
          id="navbarNav"
        >
          <div className="nav-options">
            <ul className="navbar-nav ">
              <li
                className="nav-item mx-2 "
                onClick={() => handleSetActive("home")}
              >
                <Link
                  to="/"
                  className={`${active === "home" ? "text-primary" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item mx-2"
                onClick={() => handleSetActive("features")}
              >
                <Link
                  to="/features"
                  className={`${active === "features" ? "text-primary" : ""}`}
                >
                  Features
                </Link>
              </li>
              <li
                className="nav-item mx-2"
                onClick={() => handleSetActive("about")}
              >
                <Link
                  to="/about"
                  className={`${active === "about" ? "text-primary" : ""}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
