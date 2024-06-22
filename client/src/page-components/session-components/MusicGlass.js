import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const MusicGlass = () => {
  return (
    <>
      <Helmet>
        <title>Music Glass</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от раздаването на кола от Muisc Glass bg"
        ></meta>
        <meta name="keywords" content="Дрон Услуги Muisc Glass bg Снимки Drone services music-glass.com Car giveaway" />

        <meta property="og:title" content="Music Glass" />
        <meta property="og:description" content="Това е кратка статия за снимките от Muisc Glass bg" />
        <meta property="og:image" content="https://i.postimg.cc/pTJv389K/DJI-0126-3.jpg" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/musicGlass" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Music Glass" />
        <meta name="twitter:description" content="Това е кратка статия за снимките от Muisc Glass bg" />
        <meta name="twitter:image" content="https://i.postimg.cc/pTJv389K/DJI-0126-3.jpg" />
        <meta name="twitter:card" content="https://i.postimg.cc/pTJv389K/DJI-0126-3.jpg" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/musicGlass" />

        <link rel="canonical" href="/sessions/musicGlass"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Music Glass Car Giveaway</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
            <h2 className="sessions">
              Кратко клипче, което направихме за "Music Glass Bg".{" "}
            </h2>
            <div className="yt-video-container">
              <iframe
                id="yt-video"
                src="https://www.youtube.com/embed/IgLpO6cPrW4?si=qrRW8c6hxixKuJfO"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <Link
              className="contact-link"
              to="https://www.google.com/maps/place/Port+Palace+Private+Parking/@43.2466287,28.0266787,18z/data=!4m6!3m5!1s0x40a4574c1b5bc3f5:0xb906021e7508e284!8m2!3d43.2465052!4d28.0266079!16s%2Fg%2F11rwhfm0j5?entry=ttu"
              target="_blank"
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Port Palace Private Parking</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="border-container border-container-2">
            <article>
              <h2>Кратка информация за Music Glass Giveaway</h2>
              <ul>
                <li>
                  <p>
                  Как да спечелите кола, Iphone 15 или AirPods?👇
                  </p>
                </li>
                <li>
                  <p>
                  1. Тагни 3ма приятели в коментарите на пиннатият клип в <Link to={"https://www.instagram.com/music_glass_bg/"}>music_glass_bg</Link> <br /> 
                  2. Поръчай комплект за участие от <Link to={"https://music-glass.com/pages/giveaway"}>music-glass.com</Link> <br /> 
                  3. Запознай се с общите условия <br /> 
                  4. БОНУС - Последвай <Link to={"https://www.instagram.com/bg_drone_footage/"}>bg_drone_footage</Link> и <Link to={"https://www.instagram.com/music_glass_bg/"}>music_glass_bg</Link> <br /> 
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Снимки, които направихме за Music Glass.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/pTJv389K/DJI-0126-3.jpg"
              title="Music Glass"
              alt="Music Glass"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/ZnYmmR32/DJI-0124-3.jpg"
              title="Music Glass"
              alt="Music Glass"
              loading="lazy"
            />
          </Link>
          
        </div>
      </div>
    </>
  );
};
