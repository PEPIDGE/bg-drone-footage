import { Link } from "react-router-dom";
import "../css-components/App.css";

import React, { useEffect, useState } from "react";

export const Header = ({ boolean }) => {
  return (
    <>
      <nav>
        <img src="./photos/LOGO.png" alt="logo image" className="logo" />
        <ul className={boolean ? "black" : ""}>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/gallery">Галерия</Link>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
        </ul>
        <div className="number">0884 686 895 </div>
        <div className="social-links-container">
          <Link className="social-link" to={"https://www.instagram.com/bg_drone_footage/"} target="_blank">
            <ion-icon id={boolean ? "black" : "white"} name="logo-instagram"></ion-icon>
          </Link>
          <Link className="social-link" to={"https://www.facebook.com/profile.php?id=100093293493392"} target="_blank">
            <ion-icon id={boolean ? "black" : "white"} name="logo-facebook"></ion-icon>
          </Link>
          <Link className="social-link" to={"https://www.tiktok.com/@bg_drone_footage"} target="_blank">
            <ion-icon id={boolean ? "black" : "white"} name="logo-tiktok"></ion-icon>
          </Link>
          <Link className="social-link" to={"https://youtube.com/@BGDroneFootage"} target="_blank">
            <ion-icon id={boolean ? "black" : "white"} name="logo-youtube"></ion-icon>
          </Link>
        </div>
      </nav>
    </>
  );
};
