import { Header } from "../Header";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const Motocross = () => {
  return (
    <>
      <Helmet>
        <title>Балканче мотокрос 2023</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от Балканче мотокрос 2023, село Голяма Желязна."
        ></meta>
        <meta name="keywords" content="Мотокрос Дрон Услуги Снимки Drone services Motocross Balkanche Балканче"/>

        <meta property="og:title" content="Балканче мотокрос 2023" />
        <meta property="og:description" content="Това е кратка статия за снимките от Балканче мотокрос 2023, село Голяма Желязна." />
        <meta property="og:image" content="https://i.postimg.cc/FzpffWFb/motocross-Thumbnail.jpg" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/motocross" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Балканче мотокрос 2023" />
        <meta name="twitter:description" content="Това е кратка статия за снимките от Балканче мотокрос 2023, село Голяма Желязна." />
        <meta name="twitter:image" content="https://i.postimg.cc/FzpffWFb/motocross-Thumbnail.jpg" />
        <meta name="twitter:card" content="https://i.postimg.cc/FzpffWFb/motocross-Thumbnail.jpg" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/motocross" />

        <link rel="canonical" href="/sessions/motocross"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Балканче мотокрос 2023</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
            <h2 className="sessions">
              Кратко клипче, което направихме за Балканче крос 2023.
            </h2>
            <div className="yt-video-container">
              <iframe
                id="yt-video"
                src="https://www.youtube.com/embed/-M-5JcC385I"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <Link
              className="contact-link"
              to="https://www.google.com/maps/place/5670+Golyama+Zhelyazna/@42.9834716,24.4706296,15z/data=!3m1!4b1!4m6!3m5!1s0x40abd21c417536c9:0xa00a014cd0df9a0!8m2!3d42.9773364!4d24.4643547!16s%2Fm%2F012kc622?entry=ttu"
              target="_blank"
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Село Голяма Желязна</p>
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
                    "Балканче Крос" се организира за 20-та поредна година, като
                    Индиан България е един от основните спонсори на събитието. В
                    подкрепа на мотоциклетната историята и националната ни
                    гордост! За моторите, с които "проходихме"! 🇧🇬
                  </p>
                </li>
                <li>
                  <p>
                    Турът продължава из цяла България и завършва в Индиан на
                    29.07.2023г.
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Снимки, които направихме за Балканче Крос.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/YqwWLGvW/DJI-0274.jpg"
              title="мотокрос"
              alt="мотокрос"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/tJqQgDMH/motocross-CROP.png"
              title="мотокрос"
              alt="мотокрос"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/JzS490hB/balkan1.jpg"
              title="мотокрос"
              alt="мотокрос"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/rp3TDP40/balkan2.jpg"
              title="мотокрос"
              alt="мотокрос"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/VNML1wSZ/ezero-Balkan3.jpg"
              title="мотокрос"
              alt="мотокрос"
              loading="lazy"
            />
          </Link>{" "}
        </div>
      </div>
    </>
  );
};
