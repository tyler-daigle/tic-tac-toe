import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./global.css";

import NewGamePage from "./pages/NewGamePage";
import MainGameBoard from "./pages/MainGameBoard";

import ContextProvider from "./context/ContextProvider";

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<NewGamePage />} />
          <Route exact path="/start" element={<MainGameBoard />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}
