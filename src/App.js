import NewGamePage from "./pages/NewGamePage";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./global.css";
import GameContainer from "./components/GameContainer";

export default function App() {
  return (
    <GameContainer>
      <Router>
        <Routes>
          <Route exact path="/newgame" element={<NewGamePage />} />
        </Routes>
      </Router>
    </GameContainer>
  );
}
