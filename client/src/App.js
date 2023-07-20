import React from "react";
import "./css-components/App.css";
import { HomePage } from "./components/HomePage";
import { Route, Routes } from "react-router";
import { Gallery } from "./components/Gallery";

import { ContactPage } from "./components/ContactPage";
import { ServicesPage } from "./components/ServicesPage";
import { SessionsPage } from "./components/SessionsPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactPage/>} />
        <Route path="/sessions" element={<SessionsPage/>} />
        <Route path="/sessions/:id" element={<SessionsPage/>} />

        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
  );
}

export default App;
