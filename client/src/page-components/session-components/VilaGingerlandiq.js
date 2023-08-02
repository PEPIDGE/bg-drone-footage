import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export const VilaGingerlandiq = () => {
  const navigate = useNavigate();
  const mapFunction = () => {
    navigate()
  }

  return (
    <>
      <Helmet>
        <title>Вила Гингерландия</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките на вила Гингерландия"
        ></meta>
        <link rel="canonical" href="/vila-Gingerlandiq"></link>
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
          Това са част от снимките, които направихме за вила Гингерландия.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img src="/photos/vilaG1.png" alt="Image 1" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="/photos/DJI_0037.jpg" alt="Image 2" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="/photos/DJI_0051.jpg" alt="Image 2" />
          </Link>
          <Link to="#" className="gallery-item">
            <img src="/photos/DJI_0065.jpg" alt="Image 2" />
          </Link>
        </div>
      </div>
    </>
  );
};
