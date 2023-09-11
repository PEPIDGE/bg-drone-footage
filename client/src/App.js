import React from "react";
import "./css-components/App.css";
import { HomePage } from "./page-components/HomePage";
import { Route, Routes } from "react-router";
import { Gallery } from "./page-components/Gallery";
import { Footer } from "./page-components/Footer";
import { ContactPage } from "./page-components/ContactPage";
import { ServicesPage } from "./page-components/ServicesPage";
import { SessionsPage } from "./page-components/SessionsPage";
import { VilaGingerlandiq } from "./page-components/session-components/VilaGingerlandiq";
import { Panorama } from "./page-components/session-components/Panorama";
import { Tylenovo } from "./page-components/session-components/Tylenovo";
import { MaikaBulgariq } from "./page-components/session-components/MaikaBulgariq";
import { Grivitsa } from "./page-components/session-components/Grivitsa";
import { NotFound } from "./page-components/error-components/NotFound";
import { Motocross } from "./page-components/session-components/Motocross";
import { Akvapark } from "./page-components/session-components/Akvapark";
import { VrachanskiBalkan } from "./page-components/session-components/VrachanskiBalkan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        
        <Route path="/sessions/vila-Gingerlandiq" element={<VilaGingerlandiq />}/>
        <Route path="/sessions/plevenska-panorama" element={<Panorama />} />
        <Route path="/sessions/tylenovo" element={<Tylenovo />} />
        <Route path="/sessions/maika-Bulgariq" element={<MaikaBulgariq />} />
        <Route path="/sessions/grivitsa" element={<Grivitsa />} />
        <Route path="/sessions/motocross" element={<Motocross />} />
        <Route path="/sessions/akvapark" element={<Akvapark />} />
        <Route path="/sessions/vrachanski-balkan" element={<VrachanskiBalkan />} />

        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer/>
        {/* E:\website photos if the host deleted the images!!!!!!!!!!  */}
    </>
  );
}

export default App;
