import React, { useState } from "react";
import "../css-components/HomePage.css";
import "../css-components/Gallery.css";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Gallery = () => {
  const boolean = true;

  return (
    <div className="gallery-page">
      <Header boolean={boolean} />
      <div className="image-gallery">
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0013.jpg" alt="Image 1" />
          <div className="gallery-overlay">
            <Link to="/link1">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0014.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0016.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0021.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0025.jpg" alt="Image 2" />
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
          <img src="./photos/DJI_0163.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0222.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0171.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0173.jpg" alt="Image 2" />
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
          <img src="./photos/DJI_0193.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/link2">Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="./photos/DJI_0194.jpg" alt="Image 2" />
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
          <img src="./photos/DJI_0221.jpg" alt="Image 2" />
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
  );
};
