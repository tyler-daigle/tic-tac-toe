import { createContext, useState } from "react";

import { gameBoard } from "../shared/tic-tac-toe";

export const BoardContext = createContext();

export default function BoardProvider({ children }) {
  const [board, setBoard] = useState(gameBoard.getBoard());

  const checkForWinner = () => gameBoard.checkForWinner();
  const resetBoard = () => {
    gameBoard.reset();
    setBoard(gameBoard.getBoard());
  };

  const getSquare = (squareNum) => gameBoard.getSquare(squareNum);
  const setSquare = (squareNum, marker) => {
    gameBoard.setSquare(squareNum, marker);
    setBoard(gameBoard.getBoard());
  };

  const getCpuMove = () => gameBoard.getCpuMove();

  return (
    <BoardContext.Provider
      value={{
        board,
        getSquare,
        setSquare,
        checkForWinner,
        resetBoard,
        getCpuMove,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
