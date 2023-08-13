import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const Tylenovo = () => {
  return (
    <>
      <Helmet>
        <title>Скалите в Тюленово</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от Скалите в Тюленово."
        ></meta>
        <meta name="keywords" content="Тюленово скали Дрон Услуги Снимки Drone services Diving Гмуркане Extreme екстремно"/>

        <meta property="og:title" content="Скалите в Тюленово" />
        <meta property="og:description" content="Това е кратка статия за снимките от Скалите в Тюленово." />
        <meta property="og:image" content="https://i.postimg.cc/jjRwgGHd/DJI-0095.jpg" />
        <meta property="og:url" content="https://bgdronefootage.com/sessions/tylenovo" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:title" content="Скалите в Тюленово" />
        <meta name="twitter:description" content="Това е кратка статия за снимките от Скалите в Тюленово." />
        <meta name="twitter:image" content="https://i.postimg.cc/jjRwgGHd/DJI-0095.jpg" />
        <meta name="twitter:card" content="https://i.postimg.cc/jjRwgGHd/DJI-0095.jpg" />
        <meta name="twitter:url" content="https://bgdronefootage.com/sessions/tylenovo" />

        <link rel="canonical" href="/sessions/tylenovo"></link>
      </Helmet>
      <Header boolean={true} />
      <div className="flex-wrap">
        <h1 className="title title-sessions">Скалите около тюленово</h1>
        <div className="boxes-wrap">
          <div className="border-container border-container-1">
            <h2 className="sessions">
              Кратко клипче, което направихме на скалите в Тюленово.{" "}
            </h2>
            <div className="yt-video-container">
              <iframe
                id="yt-video"
                src="https://www.youtube.com/embed/QADzLp09zQM"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <Link
              className="contact-link"
              to="https://www.google.com/maps/place/%D1%82%D1%8E%D0%BB%D0%B5%D0%BD%D0%BE%D0%B2%D0%BE/data=!4m2!3m1!1s0x40a4c0d31ec49b67:0xa00a014cd0f4a20?sa=X&ved=2ahUKEwjaioj278CAAxUFXvEDHYpuDr0Q8gF6BAgREAA&ved=2ahUKEwjaioj278CAAxUFXvEDHYpuDr0Q8gF6BAgeEAE"
              target="_blank"
            >
              <div className="contact-template">
                <div className="contact-icon">
                  <FaMapMarker className="icon" />
                </div>

                <div className="contact-details address-wrap">
                  <h2 className="label-address">Адрес</h2>
                  <p className="address">Тюленово, Варна</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="border-container border-container-2 border-container-tylenovo-2">
            <article>
              <h2>Кратка информация за Тюленово</h2>
              <ul>
                <li>
                  <p className="tylenovo-paragraph">
                    През 1942 г. селото е преименувано Тюленово заради наличието
                    на стада тюлени от вида монах, за които точно такова
                    съчетание от прибой, пещери, ниски скали и ветрове се оказва
                    подходящо място за населяване.
                  </p>
                </li>
                <li>
                  <p className="tylenovo-paragraph">
                    Не можете да забравите това крайбрежие ако сте го посетили!
                    Бреговете тук са стръмни спускащи се поне 20-30 метра надолу
                    до морето. Тюленово е невероятно място, почти недокоснато от
                    цивилизацията. Тук всяко местенце си има име: “Ашалък”,
                    “Киприя”, “Дупката”, “Мартина”.
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
        Снимки, които направихме на скалите в Тюленово.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/9Fq7rPXV/DJI-0105.jpg"
              title="Скалите в Тюленово"
              alt="Скалите в Тюленово"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/nh491HQP/DJI-0142.jpg"
              title="Скалите в Тюленово"
              alt="Скалите в Тюленово"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/HLW0cJP2/DJI-0164.jpg"
              title="Скалите в Тюленово"
              alt="Скалите в Тюленово"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="https://i.postimg.cc/d1pGx5QH/DJI-0166.jpg"
              title="Скалите в Тюленово"
              alt="Скалите в Тюленово"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
