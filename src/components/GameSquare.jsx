import styles from "../style/GameSquare.module.css";

import { PlayerMarker } from "../shared/tic-tac-toe";

export default function GameSquare({
  squareNum,
  marker,
  winningSquare,
  onClick,
}) {
  let square = "";

  switch (marker) {
    case PlayerMarker.X:
      square = "X";
      break;
    case PlayerMarker.Circle:
      square = "O";
      break;
    case PlayerMarker.Empty:
      square = "_";
      break;
  }

  return (
    <div onClick={() => onClick(squareNum)} className={styles.gameSquare}>
      {square}
      {winningSquare && "W"}
    </div>
  );
}
