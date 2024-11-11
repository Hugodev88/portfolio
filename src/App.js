// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Usamos um React Fragment para agrupar About e Technologies */}
        <Route
          path="/"
          element={
            <>
              <About />
              <Technologies />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
