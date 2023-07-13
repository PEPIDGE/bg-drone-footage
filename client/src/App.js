import React from "react";
import "./css-components/App.css";
import { HomePage } from "./components/HomePage";
import { Route, Routes } from "react-router";
import { Gallery } from "./components/Gallery";
import {Footer} from "./components/Footer";
import { ContactPage } from "./components/ContactPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage/>} />

        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
