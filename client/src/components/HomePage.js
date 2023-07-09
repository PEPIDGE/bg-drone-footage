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
            <h2 className="more">
              Научи повече{" "}
              <Link className="click-here" to={"/services"}>
                тук
              </Link>
              .
            </h2>
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
};
