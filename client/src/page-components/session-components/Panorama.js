import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import {
  FaMapMarker
} from "react-icons/fa";

export const Panorama = () => {
  return (
    <>
      <Helmet>
        <title>Плевенска Панорама</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от Плевенската Панорама Епопея"
        ></meta>
        <link rel="canonical" href="/plevenska-panorama"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Плевенска Панорама</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
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
            <Link
              className="contact-link"
              to="https://www.google.com/maps/place/Pleven+Panorama/@43.3987978,24.6065138,15z/data=!4m6!3m5!1s0x40abf352ef5640d5:0x57adadd2b9862173!8m2!3d43.3987978!4d24.6065138!16zL20vMDR4eTdy?entry=ttu"
              target="_blank"
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Скобелев парк, Плевен</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="border-container border-container-2">
            <article>
              <h2>Кратка информация за Плевенската Панорама</h2>
              <ul>
                <li>
                  <p>
                    Плевенската Панорама е епопея, представяща впечатляващата
                    битка от Руско-турската освободителна война от 1877-1878 г.
                  </p>
                </li>
                <li>
                  <p>
                    Панорамният център разполага с впечатляваща 360-градусова
                    проекция, която представя критични моменти от битката за
                    Плевен.
                  </p>
                </li>
                <li>
                  <p>
                    Посетителите могат да се насладят на реалистично
                    възстановяване на исторически събития и да се потопят в
                    атмосферата на битката.
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Това са част от снимките, които направихме за Плевенската панорама.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/pL5MNTBs/panorama1.png"
              title="Плевенска панорама"
              alt="Плевенска панорама"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/HLQGxhR5/panorama2.png"
              title="Плевенска панорама"
              alt="Плевенска панорама"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/V6R39bYk/panorama3.jpg"
              title="Плевенска панорама"
              alt="Плевенска панорама"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/qq26Z05q/DJI-0254.jpg"
              title="Плевенска панорама"
              alt="Плевенска панорама"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
