import NewGamePage from "./pages/NewGamePage";
import TicTacToe from "./pages/TicTacToe";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./global.css";
import GameContainer from "./components/GameContainer";

export default function App() {
  return (
    <GameContainer>
      <Router>
        <Routes>
          <Route exact path="/" element={<NewGamePage />} />
          <Route exact path="/start" element={<TicTacToe />} />
        </Routes>
      </Router>
    </GameContainer>
  );
}
