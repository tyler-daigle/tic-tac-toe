import { createContext, useState, useContext } from "react";
import { PlayerMarker } from "../shared/tic-tac-toe";

import { BoardContext } from "./BoardContext";
import { PlayerContext } from "./PlayerContext";
import { DialogContext } from "./DialogContext";

export const GameContext = createContext();

export default function GameProvider({ children }) {
  // state for this context
  const [score, setScore] = useState({ x: 0, circle: 0, ties: 0 });

  // state coming from other context
  const { resetBoard } = useContext(BoardContext);
  const { resetPlayers } = useContext(PlayerContext);
  const { hideDialog } = useContext(DialogContext);

  const addWin = (win) => {
    if (win.player === PlayerMarker.X) {
      setScore({ ...score, x: score.x + win.points });
    } else {
      setScore({ ...score, circle: score.circle + win.points });
    }
  };

  const addTie = () => setScore({ ...score, ties: score.ties + 1 });

  const restartGame = (resetScore = false) => {
    resetBoard();
    resetPlayers();

    if (resetScore) {
      setScore({ x: 0, circle: 0, ties: 0 });
    }

    hideDialog();
    // it will be up to the component to navigate back to new game page
  };

  return (
    <GameContext.Provider
      value={{
        restartGame,
        score,
        addWin,
        addTie,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
