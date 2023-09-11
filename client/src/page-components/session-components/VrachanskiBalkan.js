import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const VrachanskiBalkan = () => {
  return (
    <>
      <Helmet>
        <title>Врачански Балкан</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от Врачанския балкан"
        ></meta>
        <meta name="keywords" content="Дрон Услуги Врачанския балкан Снимки Drone services swimming pool"/>

        <meta property="og:title" content="Врачанския балкан" />
        <meta property="og:description" content="Това е кратка статия за снимките от Врачанския балкан" />
        <meta property="og:image" content="https://i.postimg.cc/N0qwvDvL/image.png" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/vrachanski-balkan" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Врачански Балкан" />
        <meta name="twitter:description" content="Това е кратка статия за снимките от Врачанския балкан" />
        <meta name="twitter:image" content="https://i.postimg.cc/N0qwvDvL/image.png" />
        <meta name="twitter:card" content="https://i.postimg.cc/N0qwvDvL/image.png" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/vrachanski-balkan" />

        <link rel="canonical" href="/sessions/vrachanski-balkan"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Врачански балкан</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
            <h2 className="sessions">
              Кратко клипче, което направихме на Врачанския балкан".{" "}
            </h2>
            <div className="yt-video-container">
              <iframe
                id="yt-video"
                src="https://www.youtube.com/embed/cL7bGNcYoAI"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <Link
              className="contact-link"
              to="https://www.google.com/maps/place/Vratsa+Balkan/@43.156718,23.5125094,15z/data=!4m2!3m1!1s0x0:0x114ef8f23db4c604?sa=X&ved=2ahUKEwimgJiKvqOBAxW1RfEDHebTD40Q_BJ6BAhAEAA&ved=2ahUKEwimgJiKvqOBAxW1RfEDHebTD40Q_BJ6BAhTEAg"
              target="_blank"
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Врачански балкан</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="border-container border-container-2">
            <article>
              <h2>Кратка информация за Врачанския балкан</h2>
              <ul>
                <li>
                  <p>
                  Намира се във Врачанската планина (част от Западна Стара планина) и включва по-голямата 
                  част от Врачанската планина,
                   разположена между Предбалкана и основната старопланинска верига,
                   както и територията на няколко села и на град Враца, от който получава името си.
                  </p>
                </li>
                <li>
                  <p>
                  Голяма част от територията на парка е с карбонатни скали от триаски и юрски варовици, напукани по всички възможни посоки. Има около 500 пещери и пропасти. 
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Снимки, които направихме на Врачанския Балкан.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/2S2qXpfC/VrachanskiBalkan_-_frame_at_2m147s.jpg"
              title="Врачански Балкан"
              alt="Врачански Балкан"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/sf86LXrg/DJI-0402.jpg"
              title="Врачански Балкан"
              alt="Врачански Балкан"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/Fz5Z9TVC/Vrachanski-Balkan-frame-at-1m30s.jpg"
              title="Врачански Балкан"
              alt="Врачански Балкан"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/k4ts30Kt/Vrachanski-Balkan-frame-at-1m6s.jpg"
              title="Врачански Балкан"
              alt="Врачански Балкан"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
