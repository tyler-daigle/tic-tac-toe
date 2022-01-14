import styles from "../style/MainGameBoard.module.css";

import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import { PlayerMarker } from "../shared/tic-tac-toe";

import GameSquare from "../components/GameSquare";
import GameHeader from "../components/GameHeader";
import ScoreBoard from "../components/ScoreBoard";
import GameOverDialog from "../components/GameOverDialog";
import Button from "../components/Button";
import GameContainer from "../components/GameContainer";

import xIcon from "../assets/icon-x.svg";
import circleIcon from "../assets/icon-o.svg";

export default function TicTacToe() {
  const {
    board,
    currentPlayer,
    nextPlayer,
    players,
    getSquare,
    setSquare,
    checkForWinner,
    addWin,
    addTie,
    gameDialogVisible,
    toggleGameDialog,
  } = useContext(GameContext);

  const [winningSquares, setWinningSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentWinner, setCurrentWinner] = useState(PlayerMarker.Empty);
  const [isTie, setIsTie] = useState(false);

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

      if (winner.win) {
        console.log(winner);
        addWin({ player: winner.player, points: 1 });
        setCurrentWinner(winner.player);
        setWinningSquares([...winner.squares]);
        setGameOver(true);
        toggleGameDialog();
        return;
      }

      if (winner.tie === true) {
        addTie();
        setIsTie(true);
        setGameOver(true);
        toggleGameDialog();
        return;
      }
      // switch to the next player
      nextPlayer();
    }
  };

  const startNextGame = () => console.log("Starting next game");
  const quitGame = () => console.log("Quitting Game");

  return (
    <>
      <GameContainer>
        <GameHeader currentPlayer={currentPlayer} />

        {/* Start of the main game board display */}
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
        {/* end of main game board display */}
        <ScoreBoard />
      </GameContainer>

      {/* The <GameOverDialog> that will display once a game ends */}
      {gameDialogVisible && (
        <GameOverDialog dialogNext={startNextGame} dialogQuit={quitGame}>
          <WinningMessage
            winningPlayer={currentWinner}
            players={players}
            tie={isTie}
          />

          <div className={styles.dialogButtonContainer}>
            <Button type="secondary" color="gray">
              QUIT
            </Button>
            <Button type="secondary" color="yellow">
              NEXT ROUND
            </Button>
          </div>
        </GameOverDialog>
      )}
    </>
  );
}

function WinningMessage({ winningPlayer, players, tie }) {
  // find out who is x and who is circle
  let winner = "";

  if (tie) {
    return (
      <div className={styles.dialogContent}>
        <div className={styles.messageContainer}>
          <h3 className="heading heading-medium">ROUND TIED</h3>
        </div>
      </div>
    );
  }

  if (players.playerOne.icon === winningPlayer) {
    winner = "PLAYER 1";
  } else {
    winner = "PLAYER 2";
  }

  let message;
  if (winningPlayer === PlayerMarker.X) {
    message = (
      <div className={styles.messageContainer}>
        <img className={styles.playerMarker} src={xIcon} alt="Player X Icon" />
        <h3 className={`heading heading-medium ${styles.winningXmessage}`}>
          TAKES THE ROUND
        </h3>
      </div>
    );
  } else {
    message = (
      <div className={styles.messageContainer}>
        <img
          className={styles.playerMarker}
          src={circleIcon}
          alt="Player Circle Icon"
        />
        <h3 className={`heading heading-medium ${styles.winningCircleMessage}`}>
          TAKES THE ROUND
        </h3>
      </div>
    );
  }

  return (
    <div className={styles.dialogContent}>
      <h2 className="heading heading-x-small">{winner} WINS!</h2>
      {message}
    </div>
  );
}
