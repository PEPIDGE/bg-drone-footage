import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const Pergola = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  };
  
  return (
    <>
      <Helmet>
        <title>Вила с пергола</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от една красива вила с пергола"
        ></meta>
        <meta name="keywords" content="Хотел Дрон Услуги Пергола Вила имот real estate Кадри Снимки Drone services Pergola"/>

        <meta property="og:title" content="Вила с пергола" />
        <meta property="og:description" content="Това е кратка статия за снимките от една красива вила с пергола" />
        <meta property="og:image" content="https://i.postimg.cc/fTzvGHjp/DJI-0066.jpg" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/pergola" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Вила с пергола" />
        <meta name="twitter:description" content="Това е кратка статия за снимките от една красива вила с пергола" />
        <meta name="twitter:image" content="https://i.postimg.cc/fTzvGHjp/DJI-0066.jpg" />
        <meta name="twitter:card" content="https://i.postimg.cc/fTzvGHjp/DJI-0066.jpg" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/pergola" />

        <link rel="canonical" href="/sessions/grivitsa"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Вила с пергола</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
            <h2 className="sessions">
              Кратко клипче, което направихме на вила с пергола.
            </h2>
            <div className="yt-video-container">
              
              <iframe
                id="yt-video"
                src="https://youtube.com/embed/oyLak59jKcE?si=X3aXLXxi8C1REtIg"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <Link
              className="contact-link"
              to="#"
              
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Частен</p>
                </div>
              </div>
            </Link>
          </div>

         
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Снимки, които направихме на една прекрасна вила.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/4y50YsCT/DJI-0086.jpg"
              title="Вила с пергола"
              alt="Вила с пергола"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/SKvLCqBp/DJI-0064.jpg"
              title="Вила с пергола"
              alt="Вила с пергола"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/6qLYdgVL/DJI-0065-2.jpg"
              title="Вила с пергола"
              alt="Вила с пергола"
              loading="lazy"
            />
          </Link>{" "}
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/fTzvGHjp/DJI-0066.jpg"
              title="Вила с пергола"
              alt="Вила с пергола"
              loading="lazy"
            />
          </Link>{" "}
        </div>
      </div>
    </>
  );
};
