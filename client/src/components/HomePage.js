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
      </div>
      <div className="container">
        <div className="content text-center">
          <h1 className="black-text">
            Здравейте от екипа на BG DRONES FOOTAGE
          </h1>
          <h2 className="black-text">
            Ние предлагаме услуги с висококачествени дронове
          </h2>
        </div>
        <Gallery />
      </div>
    </>
  );
};
