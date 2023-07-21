import "../css-components/HomePage.css";
import { Link } from "react-router-dom";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import React, { useEffect, useState } from "react";

export const HomePage = () => {
  const boolean = false;

  return (
    <>
    <div className="app">

      <div className="hero homepage">
        <Header boolean={boolean} />
        <div className="container">
          <div className="main-text">
            <h1>
              Ние предлагаме <span className="red-text">професионално</span>{" "}
              заснемане на видеа и снимки с дрон.
            </h1>

            <Link className="red-button more" to={"/services"}>
              Научи повече тук
            </Link>
          </div>
        </div>
      </div>

      <h1 className="title">Защо да изберете нас?</h1>
      <div className="card-container">
        <div className="content-section">
          <div className="card">
            <img className="quality" src="./photos/cardPhoto.jpg" />
            <h2>Качество</h2>
            <p>4К HDR видеа</p>
          </div>
          <div className="card">
            <img src="./photos/cardPhoto.jpg" />
            <h2>Фотография</h2>
            <p>
              Ние предлагаме висококачествена фотография с 48 MP сензор 8064 x
              6048 пиксела{" "}
            </p>
          </div>

          <div className="card">
            <img className="quality" src="./photos/cardPhoto.jpg" />
            <h2>Времетраене</h2>
            <p>Над 120 минути във въздуха</p>
          </div>

          <div className="content-section second">
            <div className="card">
              <img src="./photos/cardPhoto.jpg" />
              <h2>Видеообработка</h2>
              <p>
                Ние предлагаме видеообработка на поредица от видеа и снимки в
                сюжетна линия
              </p>
            </div>
            <div className="card">
              <img src="./photos/cardPhoto.jpg" />
              <h2>360 градусова панорама</h2>
              <p>Ние предлагаме 360 градусова реалност в снимка </p>
            </div>
            <div className="card">
              <img src="./photos/cardPhoto.jpg" />
              <h2>
                Вертикални видеа <br /> и снимки
              </h2>
              <p>Видеа и снимки за социалните платформи</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
