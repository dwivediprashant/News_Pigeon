import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-5 px-5 bg-dark text-light">
      {" "}
      <div className="row justify-content-between">
        <span
          className="d-flex align-items-center"
          style={{ width: "max-content", height: "max-content" }}
        >
          <img
            src="../../../logo.svg"
            alt="Logo"
            className="d-inline-block align-text-top logo-img"
          />
          <span className="text-light">News Pigeon</span>
        </span>{" "}
        <div className="col-6 col-md-2 mb-3">
          {" "}
          <h5 className="text-primary">Quick links</h5>{" "}
          <ul className="nav flex-column">
            {" "}
            <li className="nav-item mb-2">
              <Link
                to="/"
                className="nav-link p-0 text-light"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link
                to="/features"
                className="nav-link p-0 text-light"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Features
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link
                to="/about"
                className="nav-link p-0 text-light"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                About
              </Link>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="col-md-5 offset-md-1 mb-3">
          {" "}
          <form>
            {" "}
            <h5>Subscribe to our newsletter</h5>{" "}
            <p>Monthly digest of what's new and exciting from us.</p>{" "}
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              {" "}
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>{" "}
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Email address"
              />{" "}
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Subscribe
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        {" "}
        <p>© 2025 Company, Inc. All rights reserved.</p>{" "}
        <ul className="list-unstyled d-flex">
          {" "}
          <li className="ms-3">
            <a className="link-body-emphasis" href="#" aria-label="Instagram">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>{" "}
          <li className="ms-3">
            <a className="link-body-emphasis" href="#" aria-label="Facebook">
              <svg className="bi" width="24" height="24" aria-hidden="true">
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}
