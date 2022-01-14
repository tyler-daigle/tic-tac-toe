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
  const [currentPlayer, setCurrentPlayer] = useState(PlayerMarker.X);

  const setPlayerOneMarker = (playerMarker) => {
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

  const nextPlayer = () => {
    if (currentPlayer === PlayerMarker.X) {
      setCurrentPlayer(PlayerMarker.Circle);
    } else {
      setCurrentPlayer(PlayerMarker.X);
    }
  };

  const getSquare = (squareNum) => gameBoard.getSquare(squareNum);
  const setSquare = (squareNum, marker) => {
    gameBoard.setSquare(squareNum, marker);
    setBoard(gameBoard.getBoard());
  };
  const checkForWinner = () => gameBoard.checkForWinner();
  const restartGame = () => {
    gameBoard.reset();
    setBoard(gameBoard.getBoard());
    // set x to be the current player since x always goes first
    setCurrentPlayer(PlayerMarker.X);
    // it will be up to component to navigate back to new game page
  };

  console.log(players);

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        players,
        board,
        setPlayerOneMarker,
        nextPlayer,
        setSquare,
        getSquare,
        checkForWinner,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
