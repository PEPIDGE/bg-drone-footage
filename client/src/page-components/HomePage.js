import "../css-components/HomePage.css";
import { Link } from "react-router-dom";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  const boolean = false;

  return (
    <>
    <Helmet>
      <title>Главна страница</title>
      <meta name="description" content="Това е главната страница на нашият уебсайт, в който предлагаме услуги с дрон."></meta>
      <link rel="canonical" href="/"></link>
    </Helmet>
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
            <img src="https://i.postimg.cc/MHpg9KTb/regatta.jpg"  title="фотография" alt="фотография" loading="lazy"/>
            <h2>Фотография</h2>
            <p>
              Ние предлагаме висококачествена фотография.
            </p>
          </div>
          <div className="card">
              <img src="https://i.postimg.cc/mDyGd5SR/low-price.jpg" title="ниски цени" alt="ниски цени" loading="lazy"/>
              <h2>Ниски цени</h2>
              <p>Като нова компания, ние предламе конкурентни цени. Цената се определя след оглед на имота (може и онлайн), и може да зависи от вашите допълнителни изисквания.</p>
            </div>

          <div className="card">
            <img className="quality" src="https://i.postimg.cc/MHpg9KTb/regatta.jpg" title="Качество" alt="Качество" loading="lazy"/>
            <h2>Качество</h2>
            <p>4К HDR видеа.</p>
          </div>

          <div className="content-section second">
            <div className="card">
              <img src="https://i.postimg.cc/52rZLJXj/editing.jpg" title="Видеообработка" alt="Видеообработка" loading="lazy"/>
              <h2>Видеообработка</h2>
              <p>
                Ние предлагаме видеообработка на поредица от видеа и снимки в
                сюжетна линия.
              </p>
            </div>
            <div className="card">
            <img className="quality" src="https://i.postimg.cc/d1HyT4TQ/card-Photo.jpg" title="време във въздуха" alt="време във въздуха" loading="lazy"/>
            <h2>Времетраене</h2>
            <p>Над 120 минути във въздуха.</p>
          </div>
            <div className="card">
              <img src="https://i.postimg.cc/Gp0wbC7d/insta.png" className="taller-img"  title="снимки и видеа за социалните мрежи" alt="снимки и видеа за социалните мрежи" loading="lazy" />
              <h2>
                Вертикални видеа <br /> и снимки
              </h2>
              <p>Видеа и снимки за социалните платформи.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
