import React from 'react';
import "../css-components/App.css";
import "../css-components/Services.css";
import { Header } from './Header';


export const ServicesPage = () => {
    const boolean = true;
    return(
        <>
        <Header boolean={boolean}/>
        <div className='services'>

        <h1 className="title">Какви услуги предлагаме</h1>
        <div className="card-container">
        <div className="content-section">
          <div className="card">
            <img className="quality" src="./photos/DJI_0147.jpg" />
            <h2>Комплекси</h2>
            <p>Предлагаме снимков и видео материал на вашият движим или недвижим имот</p>
          </div>
          <div className="card">
            <img src="./photos/DJI_0147.jpg" />
            <h2>Сватби</h2>
            <p>
              Ние ще дойдем и ще снимаме ваше събитие
            </p>
          </div>

          <div className="card">
            <img className="quality" src="./photos/DJI_0147.jpg" />
            <h2>Хотели</h2>
            <p>Предлагаме снимков и видео материал на вашият недвижим имот</p>
          </div>

          <div className="content-section second">
            <div className="card">
              <img src="./photos/DJI_0147.jpg" />
              <h2>Видеообработка</h2>
              <p>
                Ние предлагаме видеообработка на поредица от видеа и снимки в
                сюжетна линия
              </p>
            </div>
            <div className="card">
              <img src="./photos/DJI_0147.jpg" />
              <h2>360 градусова панорама</h2>
              <p>Ние предлагаме 360 градусова реалност в снимка </p>
            </div>
            <div className="card">
              <img src="./photos/DJI_0147.jpg" />
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
}