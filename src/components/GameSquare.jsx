import styles from "../style/GameSquare.module.css";

import { PlayerMarker } from "../shared/tic-tac-toe";
import playerCircle from "../assets/icon-o.svg";
import playerX from "../assets/icon-x.svg";
import playerCircleDark from "../assets/icon-o-dark.svg";
import playerXDark from "../assets/icon-x-dark.svg";

export default function GameSquare({
  squareNum,
  marker,
  winningSquare,
  onClick,
}) {
  let square = "";
  let altText = "";

  switch (marker) {
    case PlayerMarker.X:
      square = winningSquare ? playerXDark : playerX;
      altText = "Player X Marker";
      break;
    case PlayerMarker.Circle:
      square = winningSquare ? playerCircleDark : playerCircle;
      altText = "Player Circle Marker";
      break;
  }

  return (
    <div
      onClick={() => onClick(squareNum)}
      className={`${styles.gameSquare} ${
        winningSquare && styles.winningSquare
      }`}
    >
      {marker !== PlayerMarker.Empty && <img src={square} alt={altText} />}
    </div>
  );
}
