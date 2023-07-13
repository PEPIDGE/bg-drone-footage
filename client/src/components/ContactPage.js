import React from 'react';
import "../css-components/App.css";
import "../css-components/Contacts.css";
import { Header } from './Header';
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';


export const ContactPage = () => {
    
   const boolean = true;

  return (
    <>
    <Header boolean={boolean}/>
    <div className="contact-page">
      <h1>Пишете ни:</h1>
      <div className="contact-info">
        <div className="contact-template">
          <div className="contact-icon">
          <FaEnvelope className="icon"/>
            
          </div>
          <div className="contact-details">
            <h2>Имейл</h2>
            <p>bgdronefootage@gmail.com</p>
          </div>
        </div>
        <div className="contact-template">
          <div className="contact-icon">
          <FaMapMarker className="icon" />
          </div>

          <div className="contact-details">
            <h2>Адрес</h2>
            <p>Варна, България</p>
          </div>
        </div>
        <div className="contact-template">
          <div className="contact-icon">
          <FaPhone className="icon" />
            
          </div>
          <div className="contact-details">
            <h2>Телефонен номер</h2>
            <p>088 468 6895</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

