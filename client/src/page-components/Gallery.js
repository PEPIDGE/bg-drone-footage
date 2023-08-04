import React, { useState } from "react";
import "../css-components/HomePage.css";
import "../css-components/Gallery.css";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Helmet } from "react-helmet-async";

export const Gallery = () => {
  const boolean = true;

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    <Helmet>
      <title>Галерия</title>
      <meta name="description" content="Това е галерията на нашият уебсайт, в която показваме разнообразни снимки от нашите сесии."></meta>
      <link rel="canonical" href="/gallery"></link>
    </Helmet>

    <div className="gallery-page">
      <Header boolean={boolean} />
      <h1 className="title title-sessions">Галерия</h1>

      <div className="image-gallery">
        <Link to="/vila-Gingerlandiq" className="gallery-item">
          <img src="./photos/DJI_0037.JPG" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0050.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0051.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0254.jpg" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0226.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0026.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0186.jpg" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/hotel.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0164.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/panorama1.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/panorama2.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0166.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/ezero1.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/panorama3.JPG" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0234.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2"  onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0320.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0213.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0105.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0193.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0271.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0275.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0282.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0285.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0310.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0341.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0344.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0345.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        
      </div>

    </div>
    </>
  );
};
