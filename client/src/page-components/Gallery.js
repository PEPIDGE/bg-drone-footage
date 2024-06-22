import React, { useState, useEffect } from "react";
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

      <meta name="keywords" content="Галерия Gallery portfolio портфолио Дрон Услуги Снимки Drone services "/>

      <meta property="og:title" content="Галерия" />
        <meta property="og:description" content="Това е галерията на нашият уебсайт, в която показваме разнообразни снимки от нашите сесии." />
        <meta property="og:image" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta property="og:url" content="https://bgdronefootage.com/gallery" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Галерия" />
        <meta name="twitter:description" content="Това е галерията на нашият уебсайт, в която показваме разнообразни снимки от нашите сесии." />
        <meta name="twitter:image" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta name="twitter:card" content="https://i.postimg.cc/kXX7HqZH/LOGO.png" />
        <meta name="twitter:url" content="https://bgdronefootage.com/gallery" />

    </Helmet>

    <div className="gallery-page">
      <Header boolean={boolean} />
      <h1 className="title title-sessions">Галерия</h1>

      <div className={`image-gallery`} >
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/pL5MNTBs/panorama1.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/4y50YsCT/DJI-0086.jpg" title="Вила с пергола" alt="Вила с пергола" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/pergola" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/pTJv389K/DJI-0126-3.jpg" title="Music glass car giveaway" alt="Music glass car giveaway" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/musicGlass" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>

       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/ZnYmmR32/DJI-0124-3.jpg" title="Music glass car giveaway" alt="Music glass car giveaway" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/musicGlass" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/KvZYynKJ/DJI-0320.jpg" title="Паметник Майка България" alt="Паметник Майка България" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/maika-Bulgariq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/fTzvGHjp/DJI-0066.jpg" title="Вила с пергола" alt="Вила с пергола" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/pergola" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>

        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/4yF40CYL/DJI-0342.png" title="басейн Гривица" alt="басейн Гривица" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/grivitsa" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/d1pGx5QH/DJI-0166.jpg" title="скали Тюленово" alt="скали Тюленово" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/tylenovo" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/qq26Z05q/DJI-0254.jpg" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>

        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/fTrQgXY3/hotel.jpg" alt="Image 2" />
       </div>

        <div className={`gallery-item`} >
          <img src="https://i.postimg.cc/wv6XN1f2/DJI-0050.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/HLW0cJP2/DJI-0164.jpg" title="скали Тюленово" alt="скали Тюленово" loading="lazy"  />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/tylenovo" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/9Fq7rPXV/DJI-0105.jpg" title="скали Тюленово" alt="скали Тюленово" loading="lazy"  />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/tylenovo" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/BnKBf9PT/DJI-0051.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/rFLtpJDD/panorama2.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/52bLTY1V/DJI-0186.jpg" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/rsqqMkpK/ezero1.png" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/YSmrxRVq/DJI-0341.jpg" title="басейн Гривица" alt="басейн Гривица" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/grivitsa" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/V6R39bYk/panorama3.jpg" title="Плевенска панорама" alt="Плевенска панорама" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/plevenska-panorama" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/433t4Dm2/DJI-0234.jpg" title="Плевен" alt="Плевен" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/maika-Bulgariq"  onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>

        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/hvmVWVfS/DJI-0226.jpg" title="имоти/комплекси" alt="имоти/комплекси" loading="lazy" />
       </div>

        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/nzCv2yx9/DJI-0213.jpg" title="имоти/комплекси" alt="имоти/комплекси" loading="lazy" />
       </div>

        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/bv6xQz7j/DJI-0193.jpg" alt="Мост Виница" title="Мост Виница" loading="lazy" />
       </div>{" "}

        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/PrqScRMy/DJI-0026.jpg" title="имоти/комплекси" alt="имоти/комплекси" loading="lazy" />
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/nzyQkMTN/DJI-0271.jpg" title="Балканче мотокрос 2023" alt="Балканче мотокрос 2023" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/motocross" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
       
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/qv1hF1js/DJI-0282.jpg" title="Балканче мотокрос 2023" alt="Балканче мотокрос 2023" loading="lazy"  />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/motocross" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/hvNQ2vrH/DJI-0037.jpg" title="Вила Гингерландия" alt="Вила Гингерландия" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/vila-Gingerlandiq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/W1Yz8h1S/DJI-0285.jpg" title="Паметник Майка България" alt="Паметник Майка България" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/maika-Bulgariq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/8kW1y6pG/maika-Bulgariq.jpg" title="Паметник Майка България" alt="Паметник Майка България" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/maika-Bulgariq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/NjnGTSdz/DJI-0310.jpg" title="Паметник Майка България" alt="Паметник Майка България" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/maika-Bulgariq" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/zfvysdJK/DJI-0500-frame-at-0m3s.jpg" title="аквапарк Несебър" alt="аквапарк Несебър" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/akvapark" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/Vk67h8bR/AKVAPARK-d-RONE-frame-at-0m33s.jpg" title="аквапарк Несебър" alt="аквапарк Несебър" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/akvapark" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/ZKj7jR0n/AKVAPARK-d-RONE-frame-at-1m20s.jpg" title="аквапарк Несебър" alt="аквапарк Несебър" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/akvapark" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/Fz5Z9TVC/Vrachanski-Balkan-frame-at-1m30s.jpg" title="Врачански Балкан" alt="Врачански Балкан" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/vrachanski-balkan" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
        <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/k4ts30Kt/Vrachanski-Balkan-frame-at-1m6s.jpg" title="Врачански Балкан" alt="Врачански Балкан" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/vrachanski-balkan" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/sf86LXrg/DJI_0402.jpg" title="Врачански Балкан" alt="Врачански Балкан" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/vrachanski-balkan" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
       <div className={`gallery-item `} >
          <img src="https://i.postimg.cc/2S2qXpfC/VrachanskiBalkan_-_frame_at_2m147s.jpg" title="Врачански Балкан" alt="Врачански Балкан" loading="lazy" />
          <div className={`gallery-overlay`}>
            <Link to="/sessions/vrachanski-balkan" onClick={handleLinkClick}>Виж повече</Link>
          </div>
       </div>{" "}
      </div>

    </div>
    </>
  );
};
