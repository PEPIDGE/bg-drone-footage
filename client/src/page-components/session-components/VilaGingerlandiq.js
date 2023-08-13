import { Header } from "../Header";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker} from 'react-icons/fa';

export const VilaGingerlandiq = () => {
  
  return (
    <>
      <Helmet>
        <title>Вила Гингерландия</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките на вила Гингерландия."
        ></meta>
        <meta name="keywords" content="вила детски рожден ден Дрон Услуги Снимки Drone services vila real estate property"/>

        <meta property="og:title" content="Вила Гингерландия" />
        <meta property="og:description" content="Това е кратка статия за снимките на вила Гингерландия." />
        <meta property="og:image" content="https://i.postimg.cc/BnKBf9PT/DJI-0051.jpg" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/vila-Gingerlandiq" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Вила Гингерландия" />
        <meta name="twitter:description" content="Това е кратка статия за снимките на вила Гингерландия." />
        <meta name="twitter:image" content="https://i.postimg.cc/BnKBf9PT/DJI-0051.jpg" />
        <meta name="twitter:card" content="https://i.postimg.cc/BnKBf9PT/DJI-0051.jpg" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/vila-Gingerlandiq" />


        <link rel="canonical" href="https://bgdronefootage.com/sessions/vila-Gingerlandiq"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Вила Гингерландия</h1>
        <div className="border-container">
          <h2 className="sessions">
            Кратко клипче, което направихме за нашите клиенти.{" "}
          </h2>
          <div className="yt-video-container">
            <iframe
              id="yt-video"
              src="https://www.youtube.com/embed/ClHjVP7Nqb8"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        <Link className="contact-link" to="https://www.google.com/maps/place/Gingerlandiya/@43.2481034,28.0103273,15z/data=!4m6!3m5!1s0x40a4579a496b6175:0x6f2879be68727d9a!8m2!3d43.2481034!4d28.0103273!16s%2Fg%2F11sr_02wm1?entry=ttu" target="_blank">
        <div className="contact-template">
          <div className="contact-icon">
          <FaMapMarker className="icon" />
          </div>

          <div className="contact-details address-wrap" >
            <h2 className="label-address">Адрес</h2>
            <p className="address">Кръстова гора 1, Варна</p>
          </div>
        </div>
        </Link>
        </div>
        <h1 className="title title-sessions title-sessions-2">
          Снимки, които направихме за вила Гингерландия.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img src="https://i.postimg.cc/XNsRpFH2/vilaG1.png" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="https://i.postimg.cc/hvNQ2vrH/DJI-0037.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="https://i.postimg.cc/BnKBf9PT/DJI-0051.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="https://i.postimg.cc/tgD1L2kd/DJI-0065.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          </Link>
        </div>
      </div>
    </>
  );
};
