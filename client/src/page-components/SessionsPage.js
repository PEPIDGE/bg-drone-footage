import React from "react";
import "../css-components/App.css";
import "../css-components/Services.css";
import "../css-components/Sessions.css";
import { Header } from "./Header";
import { Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const SessionsPage = () => {
  const boolean = true;


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
            <div className="card card-session">
              <img src="https://i.postimg.cc/wv6XN1f2/DJI-0050.jpg" className="quality"/>
             <div className="text-session">

              <h2>Вила Гингерландия</h2>
              <p>
                Ние направихме въздушни кадри на една прекрасна вила.
              </p>
              <div className="show-more-wrap">
                 <Link to={"vila-Gingerlandiq"} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>
            <div className="card card-session">
              <img src="https://i.postimg.cc/qq26Z05q/DJI-0254.jpg" className="quality"/>
             <div className="text-session">

              <h2>Плевенската епопея</h2>
              <p>Направихме зашеметяващи кадри на Плевенската панорама.</p>
              <div className="show-more-wrap">
                 <Link to={"plevenska-panorama"} className="red-button show-more">Виж още</Link>
              </div>
            </div>

            </div>

            <div className="card card-session">
              <img src="https://i.postimg.cc/jjRwgGHd/DJI-0095.jpg" className="quality" />
             <div className="text-session">
             <h2>Тюленово</h2>
              <p>Ние снимахме прекрасните скали около село Тюленово.</p>
              <div className="show-more-wrap">
                 <Link to={"tylenovo"} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

//vila ivo :DONE
//panorama pleven :DONE
//TYLENOVO :DONE
//maika bulgariq
//motocross
//grivitsa
//regatta 
//properties
//!!! have to add show more text on the cards
//!!! upgrade the gallery for mobile devices
//!!! add 404 error page
//!!! add no session crated yet page
// add an example video in the homepage
// цена по договаряне