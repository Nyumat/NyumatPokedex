import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import { useAllPokemon } from "./hooks/usePokemon";

function App() {
  return (
    <div className="App">
      <span className="header">Nyumat Pokedex</span>
      <RouteTree />
    </div>
  );
}

function RouteTree() {
  const { data, isLoading, error } = useAllPokemon();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home data={data} isLoading={isLoading} error={error} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
