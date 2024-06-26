import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={"footer "}>
      <div className='more-info'>
      
      <p>За всякакви въпроси и запитвания, звъннете на телефона по-долу</p>
      </div>
      <div className="footer__contact">
        <div className="footer__item">
          <FaEnvelope className="footer__icon" />
          <Link to="mailto:bgdronefootage.contacts@gmail.com" className="footer__link">bgdronefootage.contacts@gmail.com</Link>
        </div>
        <div className="footer__item">
          <FaPhone className="footer__icon" />
          <Link to="tel:+359884686895" className="footer__link">088 468 6895</Link>
        </div>
        <div className="footer__item">
          <FaMapMarker className="footer__icon" />
          <Link className="footer__link" to="https://www.google.com/maps/place/Varna/" >Varna, Bulgaria</Link>
        </div>
      </div>
      <div className="footer__social">
        <Link to="https://www.facebook.com/profile.php?id=100093293493392" className="footer__social-link" target="_blank"><FaFacebook /></Link>
        <Link to="https://youtube.com/@BGDroneFootage" className="footer__social-link" target="_blank"><FaYoutube/></Link>
        <Link to="https://www.instagram.com/bg_drone_footage/" className="footer__social-link" target="_blank"><FaInstagram /></Link>
        <Link to="https://www.tiktok.com/@bg_drone_footage" className="footer__social-link" target="_blank"><FaTiktok/></Link>
      </div>
    </footer>
  );
}

