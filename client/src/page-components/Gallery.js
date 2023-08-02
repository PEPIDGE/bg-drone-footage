import React, { useState } from "react";
import "../css-components/HomePage.css";
import "../css-components/Gallery.css";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Helmet } from "react-helmet-async";

export const Gallery = () => {
  const boolean = true;

  return (
    <>
    <Helmet>
      <title>Галерия</title>
      <meta name="description" content="Това е галерията на нашият уебсайт, в която показваме разнообразни снимки от нашите сесии."></meta>
      <link rel="canonical" href="/gallery"></link>
    </Helmet>

    <div className="gallery-page">
      <Header boolean={boolean} />
      <h1 className="title title-sessions">Какви услуги предлагаме</h1>

      <div className="image-gallery">
        <Link to="/vila-Gingerlandiq" className="gallery-item">
          <img src="./photos/DJI_0037.JPG" alt="Image 1" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0050.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0051.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0254.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0226.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0026.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0186.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0212.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0164.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0103.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0220.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0166.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0212.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0172.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0015.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0213.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0227.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/cardPhoto.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
      </div>

    </div>
    </>
  );
};
