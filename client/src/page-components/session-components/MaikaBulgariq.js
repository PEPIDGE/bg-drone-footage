import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const MaikaBulgariq = () => {
  return (
    <>
      <Helmet>
        <title>Майка България</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от паметника Майка България в град Плевен, България. Downhill с колела по стълби."
        ></meta>

        <meta property="og:title" content="Майка България" />
        <meta property="og:description" content="Това е кратка статия за снимките от паметника Майка България в град Плевен, България." />
        <meta property="og:image" content="https://i.postimg.cc/W1Yz8h1S/DJI-0285.jpg" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/maika-Bulgariq" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Майка България" />
        <meta name="twitter:description" content="Това е кратка статия за снимките от паметника Майка България в град Плевен, България." />
        <meta name="twitter:image" content="https://i.postimg.cc/W1Yz8h1S/DJI-0285.jpg" />
        <meta name="twitter:card" content="https://i.postimg.cc/W1Yz8h1S/DJI-0285.jpg" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/maika-Bulgariq" />

        <link rel="canonical" href="/sessions/maika-Bulgariq"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Майка България</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
            <h2 className="sessions">
              Кратко клипче, което направихме на плевенския паметник "Майка
              България".{" "}
            </h2>
            <div className="yt-video-container">
              <iframe
                id="yt-video"
                src="https://www.youtube.com/embed/YrRUOeYV180"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <Link
              className="contact-link"
              to="https://www.google.com/maps/place/%D0%BF%D0%B0%D0%BC%D0%B5%D1%82%D0%BD%D0%B8%D0%BA+%E2%80%9E%D0%9C%D0%B0%D0%B9%D0%BA%D0%B0+%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D1%8F%E2%80%9C/@43.4011022,24.6141241,15z/data=!4m2!3m1!1s0x0:0xc532d2f329c8b87c?sa=X&ved=2ahUKEwj63-nMsMiAAxXpYPEDHfIeAtIQ_BJ6BAhREAA&ved=2ahUKEwj63-nMsMiAAxXpYPEDHfIeAtIQ_BJ6BAhaEAg"
              target="_blank"
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Ул. "Генерал Скобелев", Плевен</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="border-container border-container-2">
            <article>
              <h2>Кратка информация за паметника "Майка България"</h2>
              <ul>
                <li>
                  <p>
                    Паметник „Майка България“ (известен и като „Паметник на
                    столетието“) е монумент в Плевен, издигнат по случай
                    100-годишнината от Освобождението на България.
                  </p>
                </li>
                <li>
                  <p>
                    Паметникът се състои от женска фигура, разкъсваща робски
                    вериги, на фона на стилизирано „дърво столетник“ от бетон с
                    височина 27 м. Скърбящата жена символизира майките и
                    съпругите на загиналите.
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Снимки, които направихме на паметника "Майка България".{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/8kW1y6pG/maika-Bulgariq.jpg"
              title="паметник Майка България"
              alt="паметник Майка България"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/W1Yz8h1S/DJI-0285.jpg"
              title="паметник Майка България"
              alt="паметник Майка България"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/KvZYynKJ/DJI-0320.jpg"
              title="паметник Майка България"
              alt="паметник Майка България"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/NjnGTSdz/DJI-0310.jpg"
              title="паметник Майка България"
              alt="паметник Майка България"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
