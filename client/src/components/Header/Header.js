import { Link } from "react-router-dom";
import "../../css/bootstrap.min.css";
import "../../css-components/App.css";

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
                  ? "navbar-brand scrolled webzone-text nav-item"
                  : "navbar-brand webzone-text nav-item"
              }
              to="/"
            >
              <span>Галерия</span>
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
                  <Link className="nav-link" to="/">
                    Снимки на природа
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                   Снимки на имоти
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Контакти
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Цени
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </header>

      

      <script src="js/bootstrap.bundle.min.js"></script>
    </>
  );
};
