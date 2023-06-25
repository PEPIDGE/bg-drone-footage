import { Link } from "react-router-dom";
import "../../css/bootstrap.min.css";
import "../../App.css";

import React, { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <nav
          className={
            isScrolled
              ? "navbar bg-dark shadow fixed-top navbar-expand-lg navbar-dark p-md-3 scrolled"
              : "navbar fixed-top navbar-expand-lg navbar-dark p-md-3"
          }
        >
          <div className="container">
            <Link
              className={
                isScrolled
                  ? "navbar-brand scrolled webzone-text"
                  : "navbar-brand webzone-text"
              }
              to="/"
            >
              <span>Web Zone</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mx-auto" />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content text-center">
          <h1 className={isScrolled ? "text-gray" : "text-white"}>LOREM</h1>
        </div>
      </div>

      <script src="js/bootstrap.bundle.min.js"></script>
    </>
  );
};
