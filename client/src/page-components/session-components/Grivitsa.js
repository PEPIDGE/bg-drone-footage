import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const Grivitsa = () => {
  return (
    <>
      <Helmet>
        <title>Хотел Гривица</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от басейна и хотела в Гривица, Плевен."
        ></meta>
        <meta property="og:title" content="Хотел Гривица" />
        <meta property="og:description" content="Това е кратка статия за снимките от басейна и хотела в Гривица, Плевен." />
        <meta property="og:image" content="https://i.postimg.cc/FzpffWFb/motocross-Thumbnail.jpg" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/grivitsa" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Хотел Гривица" />
        <meta name="twitter:description" content="Това е кратка статия за снимките от басейна и хотела в Гривица, Плевен." />
        <meta name="twitter:image" content="https://i.postimg.cc/FzpffWFb/motocross-Thumbnail.jpg" />
        <meta name="twitter:card" content="https://i.postimg.cc/FzpffWFb/motocross-Thumbnail.jpg" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/grivitsa" />

        <link rel="canonical" href="/sessions/grivitsa"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Хотел Гривица</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
            <h2 className="sessions">
              Кратко клипче, което направихме на Хотел Гривица.
            </h2>
            <div className="yt-video-container">
              <iframe
                id="yt-video"
                src="https://www.youtube.com/embed/wpVdOJUo9Vo"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <Link
              className="contact-link"
              to="https://www.google.com/maps/place/Park+Hotel+%22Grivitsa%22/@43.4136987,24.6904997,15z/data=!4m2!3m1!1s0x0:0x95468122002670d5?sa=X&ved=2ahUKEwi-9riovsiAAxVlQPEDHSeLCzIQ_BJ6BAhZEAA&ved=2ahUKEwi-9riovsiAAxVlQPEDHSeLCzIQ_BJ6BAhfEAc"
              target="_blank"
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Парк Хотел Гривица, Гривица</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="border-container border-container-2">
            <article>
              <h2>Кратка информация за хотел Гривица</h2>
              <ul>
                <li>
                  <p>
                    Хотелът се намира само на четири км от центъра на гр.
                    Плевен. Стечение на времето Парк Хотел Гривица се наложи като едно от
                    предпочитаните места за почивка и парти. 
                  </p>
                </li>
                <li>
                  <p>
                  За различни свои
                    мероприятия или партита фирми като: Кока-Кола Плевен,
                    Мото-Pfohe, Визаж, Интерсаунд и много други им се довериха.
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Снимки, които направихме на хотел Гривица.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/YSmrxRVq/DJI-0341.jpg"
              title="басейн Гривица"
              alt="басейн Гривица"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/4yF40CYL/DJI-0342.png"
              title="басейн Гривица"
              alt="басейн Гривица"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/Dyj7kR3w/DJI-0345.jpg"
              title="басейн Гривица"
              alt="басейн Гривица"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/Y9Dj5LVz/DJI-0343.jpg"
              title="басейн Гривица"
              alt="басейн Гривица"
              loading="lazy"
            />
          </Link>{" "}
        </div>
      </div>
    </>
  );
};
