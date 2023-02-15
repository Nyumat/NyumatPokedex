import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <span className="header">Nyumat Pokedex</span>
      <RouteTree />
    </div>
  );
}

function RouteTree() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
