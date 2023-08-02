import React from "react";
import "./css-components/App.css";
import { HomePage } from "./page-components/HomePage";
import { Route, Routes } from "react-router";
import { Gallery } from "./page-components/Gallery";
import {Footer} from "./page-components/Footer";
import { ContactPage } from "./page-components/ContactPage";
import { ServicesPage } from "./page-components/ServicesPage";
import { SessionsPage } from "./page-components/SessionsPage";
import { VilaGingerlandiq } from "./page-components/session-components/VilaGingerlandiq";
import { Panorama } from "./page-components/session-components/Panorama";

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactPage/>} />
        <Route path="/sessions" element={<SessionsPage/>} />
        <Route path="/sessions/vila-Gingerlandiq" element={<VilaGingerlandiq/>} />
        <Route path="/sessions/plevenska-panorama" element={<Panorama/>} />

        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <Footer></Footer>
      </>
  );
}

export default App;
