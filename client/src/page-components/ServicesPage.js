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
      <meta name="description" content="Тази секция представя всички услуги, които предлагаме."></meta>
      <link rel="canonical" href="/services"></link>
    </Helmet>
      <Header boolean={boolean} />
      <div className="services">
        <h1 className="title title-sessions">Какви услуги предлагаме</h1>
        <div className="card-wrapper">
        <div className="card-container">
          <div className="content-section">
            <div className="card">
              <img src="./photos/DJI_0051.jpg" className="quality"/>
              <h2>Вили</h2>
              <p>
                Искате да отдавате ваш недвижим имот под наем? Накъде без снимков материал с дрон?
              </p>
            </div>
            <div className="card">
              <img src="./photos/wedding-drone.png" className="quality"/>
              <h2>Сватби</h2>
              <p>Ние ще дойдем и ще снимаме Ваше събитие.</p>
            </div>

            <div className="card">
              <img src="./photos/DJI_0222.jpg" />
              <h2>Хотели</h2>
              <p>Предлагаме снимков и видео материал за вашият недвижим имот.</p>
            </div>

            <div className="content-section second">
              <div className="card">
                <img src="./photos/drone.jpg" className="taller-img"/>
                <h2>Рекламни продукции</h2>
                <p>
                  Можем да заснемем въздушни кадри за филми, реклами или
                  музикални видеоклипове.
                </p>
              </div>
              <div className="card">
                <img src="./photos/360drone.jpg" />
                <h2>Дълги видеа</h2>
                <p>Ние предлагаме дълги видеа по поръчка на различни локации в природата на България.</p>
              </div>
              <div className="card">
                <img src="./photos/insta.png" className="taller-img" />
                <h2>
                  Инстаграм видеа <br /> и снимки
                </h2>
                <p>
                  Ние предлагаме видеа и снимки за социалните платформи с високо
                  качество.
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
