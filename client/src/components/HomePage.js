import React from "react";
import "../css-components/HomePage.css";
import { Link } from "react-router-dom";
import { Gallery } from "./Gallery";
export const HomePage = () => {
  return (
    <>
      {/* <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center"> */}
      <div className="container">
        <div className="content text-center">
          <h1 className="black-text">
            Добре дошли в моят личен уебсайт за услуги с дрон
          </h1>
          <h2 className="black-text">
            Аз съм Петър от Варна и ако искате да се свържете с мен, за да
            снимам Ваш имот или събитие, вижте{" "}
            <Link to="/contacts" className="link black-text">
              контактите
            </Link>{" "}
            ми.
          </h2>
        </div>
        <Gallery />
      </div>
      {/* </div> */}
    </>
  );
};
