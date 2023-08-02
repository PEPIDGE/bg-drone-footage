import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export const Panorama = () => {
  

  return (
    <>
      <Helmet>
        <title>Плевенска Панорама</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от Плевенската Панорама Епопея"
        ></meta>
        <link rel="canonical" href="/panorama"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Плевенска Панорама</h1>
        <div className="border-container">
          <h2 className="sessions">
            Кратко клипче, което направихме за Плевенската панорама.{" "}
          </h2>
          <div className="yt-video-container">
            <iframe
              id="yt-video"
              src="https://www.youtube.com/embed/Fazjb9AYN3I"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        <Link className="contact-link" to="https://www.google.com/maps/place/Pleven+Panorama/@43.3987978,24.6065138,15z/data=!4m6!3m5!1s0x40abf352ef5640d5:0x57adadd2b9862173!8m2!3d43.3987978!4d24.6065138!16zL20vMDR4eTdy?entry=ttu" target="_blank">
        <div className="contact-template">
          <div className="contact-icon">
          <FaMapMarker className="icon" />
          </div>

          <div className="contact-details address-wrap" >
            <h2 className="label-address">Адрес</h2>
            <p className="address">Скобелев парк, Плевен</p>
          </div>
        </div>
        </Link>
        </div>
        <h1 className="title title-sessions title-sessions-2">
          Това са част от снимките, които направихме за вила Гингерландия.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img src="/photos/panorama1.png" alt="Image 1" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="/photos/panorama2.png" alt="Image 2" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="/photos/panorama3.jpg" alt="Image 2" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="/photos/DJI_0254.jpg" alt="Image 2" />
          </Link>
        </div>
      </div>
    </>
  );
};
