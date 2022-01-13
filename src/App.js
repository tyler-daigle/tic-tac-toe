import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./global.css";

import GameProvider from "./context/GameContext";
import NewGamePage from "./pages/NewGamePage";
import MainGameBoard from "./pages/MainGameBoard";
import GameContainer from "./components/GameContainer";

export default function App() {
  return (
    <GameProvider>
      <GameContainer>
        <Router>
          <Routes>
            <Route exact path="/" element={<NewGamePage />} />
            <Route exact path="/start" element={<MainGameBoard />} />
          </Routes>
        </Router>
      </GameContainer>
    </GameProvider>
  );
}
