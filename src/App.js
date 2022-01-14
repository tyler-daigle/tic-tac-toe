import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./global.css";

import GameProvider from "./context/GameContext";
import NewGamePage from "./pages/NewGamePage";
import MainGameBoard from "./pages/MainGameBoard";

export default function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<NewGamePage />} />
          <Route exact path="/start" element={<MainGameBoard />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}
