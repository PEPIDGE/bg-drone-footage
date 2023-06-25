import React from "react";
import "./css-components/App.css";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/properties" element={<HomePage />} />
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
