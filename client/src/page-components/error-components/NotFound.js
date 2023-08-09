import React from 'react';
import '../../css-components/notFound.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-message">Здравейте! Засега изглежда, че сте се загубили.</p>
          <p className="not-found-submessage">Не се притеснявайте, може да се върнете към началната страница.</p>
          <Link to="/" className="not-found-link">Начална страница</Link>
        </div>
      </div>
    </>
  );
};


