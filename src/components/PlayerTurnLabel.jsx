import styles from "../style/PlayerTurnLabel.module.css";

import { PlayerMarker } from "../shared/tic-tac-toe";
import playerXGray from "../assets/icon-x-gray.svg";
import playerCircleGray from "../assets/icon-o-gray.svg";

export default function PlayerTurnLabel({ currentPlayer }) {
  return (
    <div className={styles.playerTurnLabelContainer}>
      {currentPlayer === PlayerMarker.X ? (
        <img
          className={styles.turnMarker}
          src={playerXGray}
          alt="Player X Gray Icon"
        />
      ) : (
        <img
          className={styles.turnMarker}
          src={playerCircleGray}
          alt="Player Circle Gray Icon"
        />
      )}
      <span className={styles.turnLabel}>TURN</span>
    </div>
  );
}
