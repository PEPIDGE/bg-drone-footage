import React from "react";
import "../HomePage.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <div className="app">
      <section id="home">
        <h1>Добре дошли в моят личен уебсайт за услуги с дрон</h1>
        <h2>
          Аз съм Петър от Варна и ако искате да се свържете с мен, за да снимам
          Ваш имот или някое събитие, вижте{" "}
          <Link to="/contacts">контактите</Link> ми.
        </h2>
      </section>
      <section id="videos">
        <h2>Featured Videos</h2>
        <div className="video-gallery">
          {/* Replace with your video components */}
          <div className="video-card">
            <video controls>
              <source src="./videos/DJI_0004.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section id="properties">
        <h2>Real Estate Properties</h2>
        <div className="property-gallery">
          {/* Replace with your property components */}
          <div className="property-card">
            <img src="./photos/DJI_0015.jpg" alt="Property" />
          </div>
        </div>
      </section>
    </div>
  );
};
