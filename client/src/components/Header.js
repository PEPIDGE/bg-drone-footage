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
      </nav>
    </>
  );
};
