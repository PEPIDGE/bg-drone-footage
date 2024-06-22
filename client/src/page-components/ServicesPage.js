import React from "react";
import "../css-components/App.css";
import "../css-components/Services.css";
import { Header } from "./Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";




export const ServicesPage = () => {
  const boolean = true;
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Helmet>
        <title>Услуги</title>
        <meta
          name="description"
          content="Тази секция представя всички услуги, които предлагаме."
        ></meta>
      <meta name="keywords" content="имоти рожденни дни сватби концерти събития хотели комплекси социални платформи рекламни продукции Дрон Услуги Снимки Drone services "/>

        <meta property="og:title" content="Услуги" />
        <meta property="og:description" content="Тази секция представя всички услуги, които предлагаме." />
        <meta property="og:image" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta property="og:url" content="https://bgdronefootage.com/services" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Услуги" />
        <meta name="twitter:description" content="Тази секция представя всички услуги, които предлагаме." />
        <meta name="twitter:image" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta name="twitter:card" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta name="twitter:url" content="https://bgdronefootage.com/services" />

        <link rel="canonical" href="/services"></link>
      </Helmet>
      <Header boolean={boolean} />
      <div className="services">
        <h1 className="title title-sessions">Какви услуги предлагаме</h1>
        <div className="card-wrapper">
          <div className="card-container">
            <div className="content-section service">
              <div className="card">
                <Link to="/sessions/pergola" onClick={handleLinkClick} className="no-underline">
                  <img src="https://i.postimg.cc/4y50YsCT/DJI-0086.jpg"  alt="Villa" />
                  <h2>Вили</h2>
                  <p>
                    Искате да отдавате ваш недвижим имот под наем? Накъде без
                    снимков материал с дрон?
                  </p>
                </Link>
              </div>
              <div className="card">
                <Link to="#" onClick={handleLinkClick} className="no-underline">
                  <img src="https://i.postimg.cc/hG8wg7Q1/wedding-drone.png" className="quality" alt="Wedding" />
                  <h2>Сватби</h2>
                  <p>Ние ще дойдем и ще снимаме Ваше събитие.</p>
                </Link>
              </div>
              <div className="card">
                <Link to="/sessions/grivitsa" onClick={handleLinkClick} className="no-underline">
                  <img src="https://i.postimg.cc/x8YHSjr1/grivitsa-Thumbnail1.jpg" alt="Hotel" />
                  <h2>Хотели</h2>
                  <p>
                    Предлагаме снимков и видео материал за вашият недвижим имот.
                  </p>
                </Link>
              </div>
              <div className="card">
                <Link to="/sessions/akvapark" onClick={handleLinkClick} className="no-underline">
                  <img src="https://i.postimg.cc/vBMJ6vwK/production3.jpg" className="production" alt="Advertising Productions" />
                  <h2>Рекламни продукции</h2>
                  <p>
                    Можем да заснемем въздушни кадри за филми, реклами или
                    музикални видеоклипове.
                  </p>
                </Link>
              </div>
              <div className="card">
                <Link to="/sessions/akvapark" onClick={handleLinkClick} className="no-underline">
                  <img src="https://i.postimg.cc/4dhmdmH3/akvapark-thumbnail.png" className="taller-img" alt="Long Videos" />
                  <h2>Дълги видеа</h2>
                  <p>
                    Ние предлагаме дълги видеа по поръчка на различни локации в
                    България.
                  </p>
                </Link>
              </div>
              <div className="card">
                <Link to="/sessions/musicGlass" onClick={handleLinkClick} className="no-underline">
                  <img src="https://i.postimg.cc/pTJv389K/DJI-0126-3.jpg" className="taller-img" alt="Instagram Videos and Photos" />
                  <h2>
                    Инстаграм видеа <br /> и снимки
                  </h2>
                  <p>
                    Ние предлагаме видеа и снимки за социалните платформи с
                    високо качество.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
