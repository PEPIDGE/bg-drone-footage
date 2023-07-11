import React, { useState } from "react";
import "../css-components/HomePage.css";
import { Link } from "react-router-dom";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
export const HomePage = () => {
  const boolean = false;

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

            <Link className="number more" to={"/services"}>
              Научи повече тук
            </Link>
          </div>
        </div>
      </div>

      <div class="card-container">
        <div class="content-section">
          <div class="card">
            <img src="./photos/DJI_0147.jpg" />
            <h2>Card One</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
          <div class="card">
            <img src="./photos/DJI_0147.jpg" />
            <h2>Card One</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
          <div class="card">
            <img src="./photos/DJI_0147.jpg" />
            <h2>Card One</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </>
  );
};
