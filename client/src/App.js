import React from "react";
import "./css-components/App.css";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Route, Routes } from "react-router";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/contacts" element={<HomePage />} />

        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>

      <footer>
        <p>&copy; 2023 Bg Drone Footage</p>
      </footer>
    </div>
  );
}

export default App;
