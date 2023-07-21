import React from "react";
import "../css-components/App.css";
import "../css-components/Services.css";
import "../css-components/Sessions.css";
import { Header } from "./Header";
import {Footer} from "./Footer";
import { useNavigate } from "react-router-dom";

export const SessionsPage = () => {
  const boolean = true;
  const navigate = useNavigate();

  const navigateToSession = (id) => {

    navigate(`/session/${id}`);
  }

  return (
    <>
      <Header boolean={boolean} />
      <div className="services">
        <h1 className="title">Нашите сесии</h1>
        <div className="card-container sessions" >
          <div className="content-section " >
            <div className="card" onClick={navigateToSession.bind(null, 1)}>
              <img src="./photos/DJI_0213.jpg" />
              <h2>Комплекси</h2>
              <p>
                Предлагаме снимков и видео материал на вашият движим или
                недвижим имот
              </p>
            </div>
            <div className="card" onClick={navigateToSession.bind(null, 2)}>
              <img src="./photos/wedding-drone.png" className="quality"/>
              <h2>Сватби</h2>
              <p>Ние ще дойдем и ще снимаме ваше събитие</p>
            </div>

            <div className="card" onClick={navigateToSession.bind(null, 3)}>
              <img src="./photos/DJI_0222.jpg" />
              <h2>Хотели</h2>
              <p>Предлагаме снимков и видео материал на вашият недвижим имот</p>
            </div>

          </div>
        </div>
      </div>
    <Footer/>

    </>
  );
};
