import React from "react";
import "../css-components/App.css";
import "../css-components/Services.css";
import "../css-components/Sessions.css";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const SessionsPage = () => {
  const boolean = true;
  const navigate = useNavigate();

  const navigateToSession = (id) => {

    navigate(`/sessions/${id}`);
  }

  return (
    <>
    <Helmet>
      <title>Сесии</title>
      <meta name="description" content="Тази секция представя всички сесии в кратки статии, които ние Bg Drone Footage сме направили, свършената работа на всички клиенти, които са полазвали нашите услуги."></meta>
      <link rel="canonical" href="/sessions"></link>
    </Helmet>
      <Header boolean={boolean} />
      <div className="services">
        <h1 className="title title-sessions">Нашите сесии</h1>
        <div className="card-container sessions" >
          <div className="content-section " >
            <div className="card" onClick={navigateToSession.bind(null, "vila-Gingerlandiq")}>
              <img src="./photos/DJI_0050.jpg" className="quality"/>
              <h2>Вила Гингерландия</h2>
              <p>
                Ние направихме въздушни кадри на една прекрасна вила.
              </p>
            </div>
            <div className="card" onClick={navigateToSession.bind(null, "Plevenska-epopeq")}>
              <img src="./photos/DJI_0254.jpg" className="taller-image"/>
              <h2>Плевенската епопея</h2>
              <p>Направихме зашеметяващи кадри на Плевенската панорама.</p>
            </div>

            <div className="card" onClick={navigateToSession.bind(null, 3)}>
              <img src="./photos/DJI_0222.jpg" />
              <h2>Хотели</h2>
              <p>Предлагаме снимков и видео материал на вашият недвижим имот</p>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

//panorama pleven
//maika bulgariq
//motocross
//vila ivo
//grivitsa
