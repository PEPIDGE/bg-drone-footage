import { Header } from "../Header";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../../css-components/Contacts.css";
import { FaMapMarker } from "react-icons/fa";

export const Tylenovo = () => {
  return (
    <>
      <Helmet>
        <title>Скалите в Тюленово</title>
        <meta
          name="description"
          content="Това е кратка статия за снимките от Скалите в Тюленово"
        ></meta>
        <link rel="canonical" href="/tylenovo"></link>
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

          <div className="border-container border-container-2">
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
                    до морето. Тюленово е невероятно място почти недокоснато от
                    цивилизацията. Тук всяко местенце си има име: “Ашалък”,
                    “Киприя”, “Дупката”, “Мартина”.
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>

        <h1 className="title title-sessions title-sessions-2">
          Това са част от снимките, които направихме на скалите в Тюленово.{" "}
        </h1>

        <div className="image-gallery">
          <Link to="#" className="gallery-item">
            <img
              src="/photos/DJI_0105.jpg"
              title="Скалите в Тюленово"
              alt="Скалите в Тюленово"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="/photos/DJI_0142.jpg"
              title="Скалите в Тюленово"
              alt="Скалите в Тюленово"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="/photos/DJI_0164.jpg"
              title="Скалите в Тюленово"
              alt="Скалите в Тюленово"
              loading="lazy"
            />
          </Link>
          <Link to="#" className="gallery-item">
            <img
              src="/photos/DJI_0166.jpg"
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
