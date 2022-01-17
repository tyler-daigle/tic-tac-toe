import { PlayerMarker } from "../shared/tic-tac-toe";

import styles from "../style/WinningMessage.module.css";

import xIcon from "../assets/icon-x.svg";
import circleIcon from "../assets/icon-o.svg";

export default function WinningMessage({ winningPlayer, players, tie }) {
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

  if (players.playerOne === winningPlayer) {
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
