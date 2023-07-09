import React, { useState } from "react";
import "../css-components/HomePage.css";
import { Link } from "react-router-dom";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
export const HomePage = () => {
  const [boolean, setBolean] = useState(false);

  return (
    <>
      <div className="hero">
        <Header boolean={boolean} />
        <div className="container">
          <div className="main-text">
            <h1>
              Ние предлагаме <span className="red-text">професионално</span>{" "}
              заснемане на видеа и снимки с дрон.
            </h1>

            <Link className="number" to={"/services"}>
              Научи повече тук
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
