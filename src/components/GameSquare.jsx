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
    default:
      throw new Error("This shouldn't be possible - but we need a default");
  }

  return (
    <div
      onClick={() => onClick(squareNum)}
      className={`${styles.gameSquare} ${
        winningSquare && styles.winningSquare
      }`}
    >
      {marker !== PlayerMarker.Empty && (
        <img className={styles.playerMarkerImg} src={square} alt={altText} />
      )}
    </div>
  );
}
