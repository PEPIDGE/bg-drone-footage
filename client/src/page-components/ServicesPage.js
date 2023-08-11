import React from "react";
import "../css-components/App.css";
import "../css-components/Services.css";
import { Header } from "./Header";
import { Helmet } from "react-helmet-async";

export const ServicesPage = () => {
  const boolean = true;
  return (
    <>
      <Helmet>
        <title>Услуги</title>
        <meta
          name="description"
          content="Тази секция представя всички услуги, които предлагаме."
        ></meta>

        <meta property="og:title" content="Услуги" />
        <meta property="og:description" content="Тази секция представя всички услуги, които предлагаме." />
        <meta property="og:image" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta property="og:url" content="https://bg-drone-footage.vercel.app/services" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Услуги" />
        <meta name="twitter:description" content="Тази секция представя всички услуги, които предлагаме." />
        <meta name="twitter:image" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta name="twitter:card" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta name="twitter:url" content="https://bg-drone-footage.vercel.app/services" />

        <link rel="canonical" href="/services"></link>
      </Helmet>
      <Header boolean={boolean} />
      <div className="services">
        <h1 className="title title-sessions">Какви услуги предлагаме</h1>
        <div className="card-wrapper">
          <div className="card-container">
            <div className="content-section">
              <div className="card">
                <img src="https://i.postimg.cc/wv6XN1f2/DJI-0050.jpg" className="taller-img" />
                <h2>Вили</h2>
                <p>
                  Искате да отдавате ваш недвижим имот под наем? Накъде без
                  снимков материал с дрон?
                </p>
              </div>
              <div className="card">
                <img src="https://i.postimg.cc/hG8wg7Q1/wedding-drone.png" className="quality" />
                <h2>Сватби</h2>
                <p>Ние ще дойдем и ще снимаме Ваше събитие.</p>
              </div>

              <div className="card">
                <img src="https://i.postimg.cc/fTrQgXY3/hotel.jpg" />
                <h2>Хотели</h2>
                <p>
                  Предлагаме снимков и видео материал за вашият недвижим имот.
                </p>
              </div>

              <div className="content-section second">
                <div className="card">
                  <img src="https://i.postimg.cc/vBMJ6vwK/production3.jpg" className="production" />
                  <h2>Рекламни продукции</h2>
                  <p>
                    Можем да заснемем въздушни кадри за филми, реклами или
                    музикални видеоклипове.
                  </p>
                </div>
                <div className="card">
                  <img src="https://i.postimg.cc/MHpg9KTb/regatta.jpg" />
                  <h2>Дълги видеа</h2>
                  <p>
                    Ние предлагаме дълги видеа по поръчка на различни локации в
                    България.
                  </p>
                </div>
                <div className="card">
                  <img src="https://i.postimg.cc/Gp0wbC7d/insta.png" className="taller-img" />
                  <h2>
                    Инстаграм видеа <br /> и снимки
                  </h2>
                  <p>
                    Ние предлагаме видеа и снимки за социалните платформи с
                    високо качество.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
