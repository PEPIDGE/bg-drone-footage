import React from "react";
import "../css-components/App.css";
import "../css-components/Services.css";
import "../css-components/Sessions.css";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


export const SessionsPage = () => {
  const boolean = true;
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    <Helmet>
      <title>Сесии</title>
      <meta name="description" content="Тази секция представя всички сесии в кратки статии, които ние Bg Drone Footage сме направили, свършената работа на всички клиенти, които са полазвали нашите услуги."></meta>
      <meta name="keywords" content="сесии свършена работа sessions природа България portfolio портфолио Дрон Услуги Снимки Drone services "/>
      
      <meta property="og:title" content="Услуги" />
        <meta property="og:description" content="Тази секция представя всички сесии от снимки в кратки статии, които ние Bg Drone Footage сме направили." />
        <meta property="og:image" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Услуги" />
        <meta name="twitter:description" content="Тази секция представя всички сесии от снимки в кратки статии, които ние Bg Drone Footage сме направили." />
        <meta name="twitter:image" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta name="twitter:card" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions" />
     
      <link rel="canonical" href="/sessions"></link>
    </Helmet>
      <Header boolean={boolean} />
      <div className="services">
        <h1 className="title title-sessions">Нашите сесии</h1>
        <div className="card-container sessions" >
          <div className="content-section " >
          <div className="card card-session">
              <img src="https://i.postimg.cc/4y50YsCT/DJI-0086.jpg" className="grivitsa" />
             <div className="text-session">
             <h2>Вила с пергола</h2>
              <p>Красиви снимки с дрон на един прекрасен имот </p>
              <div className="show-more-wrap">
                 <Link to={"pergola"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>
            <div className="card card-session">
              <img src="https://i.postimg.cc/wv6XN1f2/DJI-0050.jpg" className="quality"/>
             <div className="text-session">

              <h2>Вила Гингерландия</h2>
              <p>
                Ние направихме въздушни кадри на една прекрасна вила.
              </p>
              <div className="show-more-wrap">
                 <Link to={"vila-Gingerlandiq"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>

            <div className="card card-session">
              <img src="https://i.postimg.cc/pTJv389K/DJI-0126-3.jpg" className="quality"/>
             <div className="text-session">

              <h2>Music Glass</h2>
              <p>
                Ние снимахме едно от най-големите раздавания на кола в България. 
              </p>
              <div className="show-more-wrap">
                 <Link to={"musicGlass"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>

            <div className="card card-session">
              <img src="https://i.postimg.cc/pL5MNTBs/panorama1.png" className="quality"/>
             <div className="text-session">

              <h2>Плевенската епопея</h2>
              <p>Направихме зашеметяващи кадри на Плевенската панорама.</p>
              <div className="show-more-wrap">
                 <Link to={"plevenska-panorama"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
            </div>

            </div>
            <div className="card card-session">
              <img src="https://i.postimg.cc/x8YHSjr1/grivitsa-Thumbnail1.jpg" className="grivitsa" />
             <div className="text-session">
             <h2>Хотел Гривица</h2>
              <p>Ние снимахме хотел Гривица от въздуха.</p>
              <div className="show-more-wrap">
                 <Link to={"grivitsa"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>

            <div className="card card-session">
              <img src="https://i.postimg.cc/jjRwgGHd/DJI-0095.jpg" className="quality" />
             <div className="text-session">
             <h2>Тюленово</h2>
              <p>Ние снимахме прекрасните скали около село Тюленово.</p>
              <div className="show-more-wrap">
                 <Link to={"tylenovo"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>

            <div className="card card-session">
              <img src="https://i.postimg.cc/W1Yz8h1S/DJI-0285.jpg" className="quality" />
             <div className="text-session">
             <h2>Майка България</h2>
              <p>Ние направихме въздушни кадри над паметника "Майка България".</p>
              <div className="show-more-wrap">
                 <Link to={"maika-Bulgariq"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>


            <div className="card card-session">
              <img src="https://i.postimg.cc/FzpffWFb/motocross-Thumbnail.jpg" className="grivitsa" />
             <div className="text-session">
             <h2>Балканче Крос 2023</h2>
              <p>Ние заснехме това уникално събитие от въздуха.</p>
              <div className="show-more-wrap">
                 <Link to={"motocross"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>
            <div className="card card-session">
              <img src="https://i.postimg.cc/4dhmdmH3/akvapark-thumbnail.png" className="grivitsa" />
             <div className="text-session">
             <h2>Аквапарк Несебър</h2>
              <p>Аквапарк Несебър от погледа на дрон.</p>
              <div className="show-more-wrap">
                 <Link to={"akvapark"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
              </div>
             </div>
            </div>
            <div className="card card-session">
              <img src="https://i.postimg.cc/KcQW7MxK/3.png" className="grivitsa" />
             <div className="text-session">
             <h2>Врачански Балкан</h2>
              <p>Прекрасният Врачански Балкан заснет от дрон</p>
              <div className="show-more-wrap">
                 <Link to={"vrachanski-balkan"} onClick={handleLinkClick} className="red-button show-more">Виж още</Link>
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
// цена по договаряне : DONE
//grivitsa :DONE
//maika bulgariq : DONE
//!!! add 404 error page : done
//motocross : done
//!!! have to add show more text on the cards: DONE
//!!! add no session crated yet page