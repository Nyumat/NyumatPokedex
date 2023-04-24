import "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroMain from "../Hero/index";
import Body from "../Body";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <HeroMain />
      <Body />
    </div>
  );
}

export default App;
