import styles from "../style/MainGameBoard.module.css";

import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import { GameContext } from "../context/GameContext";
import { BoardContext } from "../context/BoardContext";
import { PlayerContext } from "../context/PlayerContext";
import { DialogContext } from "../context/DialogContext";

import { PlayerMarker } from "../shared/tic-tac-toe";

import GameSquare from "../components/GameSquare";
import GameHeader from "../components/GameHeader";
import ScoreBoard from "../components/ScoreBoard";
import GameOverDialog from "../components/GameOverDialog";
import Button from "../components/Button";
import GameContainer from "../components/GameContainer";

import xIcon from "../assets/icon-x.svg";
import circleIcon from "../assets/icon-o.svg";

export default function MainGameBoard() {
  const {
    nextPlayer,
    players,
    getSquare,
    setSquare,
    checkForWinner,
    addWin,
    addTie,
    gameDialogVisible,
    toggleGameDialog,
    restartGame,
  } = useContext(GameContext);

  const {} = useContext(GameContext);
  const { board } = useContext(BoardContext);
  const { currentPlayer } = useContext(PlayerContext);
  const {} = useContext(DialogContext);

  const [winningSquares, setWinningSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentWinner, setCurrentWinner] = useState(PlayerMarker.Empty);
  const [isTie, setIsTie] = useState(false);
  const navigate = useNavigate();

  const squareClickHandler = (squareNum) => {
    if (gameOver) {
      return;
    }

    if (getSquare(squareNum) === PlayerMarker.Empty) {
      // set the current player to that square
      setSquare(squareNum, currentPlayer);

      // check for a winner or check if all squares are filled
      let winner = checkForWinner();

      if (winner.win) {
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

      // switch to the next player and the game continues
      nextPlayer();
    }
  };

  const handleQuitClick = () => {
    setGameOver(false);
    restartGame(true);
    setIsTie(false);
    navigate("/");
  };

  const handleNextRoundClick = () => {
    setGameOver(false);
    setIsTie(false);
    restartGame();
  };

  return (
    <>
      <GameContainer>
        <GameHeader currentPlayer={currentPlayer} />

        {/* Start of the main game board display */}
        <div className={styles.gameBoardContainer}>
          {board.map((square, num) => {
            let winningSquare = false;

            // mark the winning squares
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
        <GameOverDialog>
          <WinningMessage
            winningPlayer={currentWinner}
            players={players}
            tie={isTie}
          />

          <div className={styles.dialogButtonContainer}>
            <Button type="secondary" color="gray" onClick={handleQuitClick}>
              QUIT
            </Button>
            <Button
              type="secondary"
              color="yellow"
              onClick={handleNextRoundClick}
            >
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
