import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css-components/App.css";

import React, { useEffect, useState } from "react";

export const Header = ({ boolean }) => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  const [messageVisible, setMessageVisible] = useState(false);
  const [selected, setSelected] = useState({
    "/": false,
    "/gallery": false,
    "/services": false,
    "/sessions": false,
    "/contacts": false,
  });

  const location = useLocation().pathname;

  useEffect(() => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [location]: true,
    }));
  }, [location]);

  const select = () => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [location]: true,
    }));
  };

  const copyToClipboard = () => {
    const textToCopy = "0884686895";

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setMessageVisible(true);
        setTimeout(() => {
          setMessageVisible(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Unable to copy text:", error);
      });
  };

  return (
    <>
      <nav ref={navRef}>
        <Link to={"/"}><img src="/photos/LOGO.png" alt="logo image" className="logo" title="лого" loading="lazy"/></Link>
        <ul className={boolean ? "black" : ""}>
          <li>
            <Link
              onClick={select}
              className={selected["/"] ? "selected" : ""}
              to="/"
            >
              Начало
            </Link>
          </li>
          <li>
            <Link
              onClick={select}
              className={selected["/gallery"] ? "selected" : ""}
              to="/gallery"
            >
              Галерия
            </Link>
          </li>
          <li>
            <Link
              onClick={select}
              className={selected["/services"] ? "selected" : ""}
              to="/services"
            >
              Услуги
            </Link>
          </li> 
          <li>
            <Link
              onClick={select}
              className={selected["/sessions"] ? "selected" : ""}
              to="/sessions"
            >
              Сесии
            </Link>
          </li>
          <li>
            <Link
              onClick={select}
              className={selected["/contacts"] ? "selected" : ""}
              to="/contacts"
            >
              Контакти
            </Link>
          </li>
        </ul>

        <div className="red-button number" onClick={copyToClipboard}>
          0884 686 895{" "}
        </div>

        <div className="social-links-container">
          <Link
            className="social-link"
            to={"https://www.instagram.com/bg_drone_footage/"}
            target="_blank"
          >
            <ion-icon
              id={boolean ? "black" : "white"}
              name="logo-instagram"
            ></ion-icon>
          </Link>
          <Link
            className="social-link"
            to={"https://www.facebook.com/profile.php?id=100093293493392"}
            target="_blank"
          >
            <ion-icon
              id={boolean ? "black" : "white"}
              name="logo-facebook"
            ></ion-icon>
          </Link>
          <Link
            className="social-link"
            to={"https://www.tiktok.com/@bg_drone_footage"}
            target="_blank"
          >
            <ion-icon
              id={boolean ? "black" : "white"}
              name="logo-tiktok"
            ></ion-icon>
          </Link>
          <Link
            className="social-link"
            to={"https://youtube.com/@BGDroneFootage"}
            target="_blank"
          >
            <ion-icon
              id={boolean ? "black" : "white"}
              name="logo-youtube"
            ></ion-icon>
          </Link>
        </div>
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
      </nav>
      <button
      className={boolean ? "black nav-btn" : "white nav-btn"}
				onClick={showNavbar}>
				<FaBars />
			</button>
      {messageVisible && (
        <div className="copy-message-content">
          <span>Text copied to clipboard!</span>
        </div>
      )}
    </>
  );
};
