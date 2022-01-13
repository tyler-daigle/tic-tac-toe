import { createContext, useState } from "react";
import { PlayerMarker } from "../shared/tic-tac-toe";

import { gameBoard } from "../shared/tic-tac-toe";

export const GameContext = createContext();

export default function GameProvider({ children }) {
  const [players, setPlayers] = useState({
    playerOne: {
      icon: PlayerMarker.X,
    },
    playerTwo: {
      icon: PlayerMarker.Circle,
    },
  });

  const [board, setBoard] = useState(gameBoard.getBoard());

  const setPlayerOne = (playerMarker) => {
    // set the player marker of player 1
    const newPlayers = {
      playerOne: {
        icon: playerMarker,
      },
      // if the playerMarker is X for player 1, then player 2 is circle
      playerTwo: {
        icon:
          playerMarker === PlayerMarker.X
            ? PlayerMarker.Circle
            : PlayerMarker.X,
      },
    };
    setPlayers(newPlayers);
  };
  console.log(players);

  return (
    <GameContext.Provider value={{ players, board, setPlayerOne }}>
      {children}
    </GameContext.Provider>
  );
}
