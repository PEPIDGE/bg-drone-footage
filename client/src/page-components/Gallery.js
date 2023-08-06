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
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/wv6XN1f2/DJI-0050.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/BnKBf9PT/DJI-0051.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/qq26Z05q/DJI-0254.jpg" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/hvmVWVfS/DJI-0226.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/52bLTY1V/DJI-0186.jpg" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/fTrQgXY3/hotel.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/HLW0cJP2/DJI-0164.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/pL5MNTBs/panorama1.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/HLQGxhR5/panorama2.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/d1pGx5QH/DJI-0166.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/rsqqMkpK/ezero1.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/YSmrxRVq/DJI-0341.jpg" title="басейн Гривица" alt="басейн Гривица" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/grivitsa" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/V6R39bYk/panorama3.jpg" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/433t4Dm2/DJI-0234.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404"  onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/KvZYynKJ/DJI-0320.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/nzCv2yx9/DJI-0213.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/9Fq7rPXV/DJI-0105.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/bv6xQz7j/DJI-0193.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/PrqScRMy/DJI-0026.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/nzyQkMTN/DJI-0271.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/Wb6JGNZf/DJI-0275.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/qv1hF1js/DJI-0282.jpg" alt="Image 2" />
          <div className="gallery-overlay">
            <Link to="/session-404" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/hvNQ2vrH/DJI-0037.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/W1Yz8h1S/DJI-0285.jpg" title="Паметник Майка България" alt="Паметник Майка България" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/maika-Bulgariq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/8kW1y6pG/maika-Bulgariq.jpg" title="Паметник Майка България" alt="Паметник Майка България" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/maika-Bulgariq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/NjnGTSdz/DJI-0310.jpg" title="Паметник Майка България" alt="Паметник Майка България" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/maika-Bulgariq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/4yF40CYL/DJI-0342.png" title="басейн Гривица" alt="басейн Гривица" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/grivitsa" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        <Link to="#" className="gallery-item">
          <img src="https://i.postimg.cc/Dyj7kR3w/DJI-0345.jpg" title="басейн Гривица" alt="басейн Гривица" loading="lazy" />
          <div className="gallery-overlay">
            <Link to="/sessions/grivitsa" onClick={handleLinkClick}>Виж повече</Link>
          </div>
        </Link>{" "}
        
      </div>

    </div>
    </>
  );
};
