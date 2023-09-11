import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const Akvapark = () => {
  return (
    <>
      <Helmet>
        <title>Майка България</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от Аквапарк Несебър"
        ></meta>
        <meta name="keywords" content="Паметник Дрон Услуги Аквапарк Несебър Снимки Drone services swimming pool"/>

        <meta property="og:title" content="Аквапарк Несебър" />
        <meta property="og:description" content="Това е кратка статия за снимките от Аквапарк Несебър" />
        <meta property="og:image" content="https://i.postimg.cc/4dhmdmH3/akvapark-thumbnail.png" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/akvapark" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Майка България" />
        <meta name="twitter:description" content="Това е кратка статия за снимките от Аквапарк Несебър" />
        <meta name="twitter:image" content="https://i.postimg.cc/4dhmdmH3/akvapark-thumbnail.png" />
        <meta name="twitter:card" content="https://i.postimg.cc/4dhmdmH3/akvapark-thumbnail.png" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/akvapark" />

        <link rel="canonical" href="/sessions/akvapark"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Аквапарк Несебър</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
            <h2 className="sessions">
              Кратко клипче, което направихме на аквапарк Несебър".{" "}
            </h2>
            <div className="yt-video-container">
              <iframe
                id="yt-video"
                src="https://www.youtube.com/embed/jJNDDr_BXvI"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <Link
              className="contact-link"
              to="https://www.google.com/maps/place/Aquapark+Nessebar+%7C+%D0%90%D0%BA%D0%B2%D0%B0%D0%BF%D0%B0%D1%80%D0%BA+%D0%9D%D0%B5%D1%81%D0%B5%D0%B1%D1%8A%D1%80/@42.6562608,27.6843238,15z/data=!4m2!3m1!1s0x0:0xaeaadbb8ff757a3f?sa=X&ved=2ahUKEwiE6NTuq6OBAxXM_qQKHf-2D5gQ_BJ6BAhTEAA&ved=2ahUKEwiE6NTuq6OBAxXM_qQKHf-2D5gQ_BJ6BAhWEAg"
              target="_blank"
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Аквапарк Несебър</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="border-container border-container-2">
            <article>
              <h2>Кратка информация за аквапарк Несебър</h2>
              <ul>
                <li>
                  <p>
                  Искаме да ви информираме, че този клип е създаден изцяло от нас като хоби и не съдържа никаква комерсиална реклама или партньорски връзки.
                  </p>
                </li>
                <li>
                  <p>
                    Аквапарк Несебър се състои от 10 милиона литра вода, 60 различни атракции и площ от 55000 квадратни метра площ. 
                  </p>
                </li>
                <li>
                  <p>
                  В сърцето на Аквапарк Несебър се намира сцената – истински пиратски кораб. Там можете да се насладите на ежедневна шоу-програма, докато отпивате от освежаващо питие на Водния бар. 
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Снимки, които направихме на аквапарк Несебър.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/fbPVDxLF/DJI-0511-frame-at-0m3s.jpg"
              title="аквапарк Несебър"
              alt="аквапарк Несебър"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/Vk67h8bR/AKVAPARK-d-RONE-frame-at-0m33s.jpg" 
              title="аквапарк Несебър"
              alt="аквапарк Несебър"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/ZKj7jR0n/AKVAPARK-d-RONE-frame-at-1m20s.jpg"
              title="аквапарк Несебър"
              alt="аквапарк Несебър"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/zfvysdJK/DJI-0500-frame-at-0m3s.jpg"
              title="аквапарк Несебър"
              alt="аквапарк Несебър"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
