import styles from "../style/MainGameBoard.module.css";

import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import GameSquare from "../components/GameSquare";
import { PlayerMarker } from "../shared/tic-tac-toe";

export default function TicTacToe() {
  const {
    board,
    currentPlayer,
    nextPlayer,
    getSquare,
    setSquare,
    checkForWinner,
  } = useContext(GameContext);

  const [winningSquares, setWinningSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const squareClickHandler = (squareNum) => {
    if (gameOver) {
      return;
    }
    console.log(`Square ${squareNum} clicked`);
    // get the click
    // check if the square is empty
    if (getSquare(squareNum) === PlayerMarker.Empty) {
      // set the current player to that square
      setSquare(squareNum, currentPlayer);
      // check for a winner or check if all squares are filled
      let winner = checkForWinner();
      console.log(winner);
      if (winner.win) {
        console.log(winner);
        setWinningSquares([...winner.squares]);
        setGameOver(true);
        return;
      }
      // switch to the next player
      nextPlayer();
    }
  };

  console.log(typeof winningSquares);
  console.log(winningSquares);
  return (
    <div>
      <h1>Game Board</h1>
      <h2>Current Player: {currentPlayer === PlayerMarker.X ? "X" : "O"}</h2>
      <div className={styles.gameBoardContainer}>
        {board.map((square, num) => {
          let winningSquare = false;

          if (gameOver && winningSquares.includes(num)) {
            winningSquare = true;
          }
          return (
            <GameSquare
              key={num}
              squareNum={num}
              winningSquare={winningSquare}
              marker={square.player}
              onClick={squareClickHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
