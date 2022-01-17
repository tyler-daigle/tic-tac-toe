import styles from "../style/MainGameBoard.module.css";

import { useNavigate } from "react-router-dom";

import { useContext, useState, useEffect } from "react";

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
import WinningMessage from "../components/WinningMessage";

export default function MainGameBoard() {
  const { vsCpu, addWin, addTie, restartGame } = useContext(GameContext);

  const { getSquare, setSquare, board, checkForWinner, getCpuMove } =
    useContext(BoardContext);

  const { playerMarkers, nextPlayer, currentPlayer } =
    useContext(PlayerContext);

  const { toggleGameDialog, gameDialogVisible } = useContext(DialogContext);

  const [winningSquares, setWinningSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentWinner, setCurrentWinner] = useState(PlayerMarker.Empty);
  const [isTie, setIsTie] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (vsCpu) {
      // pick a random square that is empty
      // activate squareClickHandler on that square
      // find out which marker is the cpu - cpu is always player 2
      if (currentPlayer === playerMarkers.playerTwo) {
        const cpuSquare = getCpuMove();
        if (cpuSquare !== undefined) {
          squareClickHandler(cpuSquare);
          console.log("CPU");
        } else {
          console.log("No squares for CPU");
        }
      }
    }
  }, [currentPlayer]);

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
        setWinningSquares([]);
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
            players={playerMarkers}
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
