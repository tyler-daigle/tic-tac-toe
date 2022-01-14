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
  const [score, setScore] = useState({ x: 0, circle: 0, ties: 0 });
  const [gameDialogVisible, setGameDialogVisible] = useState(false);

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

  const addWin = (win) => {
    if (win.player === PlayerMarker.X) {
      setScore({ ...score, x: score.x + win.points });
    } else {
      setScore({ ...score, circle: score.circle + win.points });
    }
  };

  const addTie = () => setScore({ ...score, ties: score.ties + 1 });

  const restartGame = () => {
    gameBoard.reset();
    setBoard(gameBoard.getBoard());
    // set x to be the current player since x always goes first
    setCurrentPlayer(PlayerMarker.X);
    setScore({ x: 0, circle: 0, ties: 0 });
    setGameDialogVisible(false);
    // it will be up to the component to navigate back to new game page
  };

  const toggleGameDialog = () => setGameDialogVisible(!gameDialogVisible);

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
        score,
        addWin,
        addTie,
        gameDialogVisible,
        toggleGameDialog,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
