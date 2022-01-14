import styles from "../style/ScoreBoard.module.css";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { PlayerMarker } from "../shared/tic-tac-toe";

export default function ScoreBoard() {
  const { score, players } = useContext(GameContext);
  let playerX;
  let playerCircle;

  if (players.playerOne.icon === PlayerMarker.X) {
    playerX = "P1";
    playerCircle = "P2";
  } else {
    playerX = "P2";
    playerCircle = "P1";
  }

  return (
    <div className={styles.scoreBoardContainer}>
      <div className={`${styles.scoreItem} ${styles.xScore}`}>
        <h3 className={`heading heading-x-small ${styles.scoreHeader}`}>
          X ({playerX})
        </h3>
        <span className={styles.score}>{score.x}</span>
      </div>
      <div className={`${styles.tiesScore} ${styles.scoreItem}`}>
        <h3 className={`heading heading-x-small ${styles.scoreHeader}`}>
          TIES
        </h3>
        <span className={styles.score}>{score.ties}</span>
      </div>

      <div className={`${styles.circleScore} ${styles.scoreItem}`}>
        <h3 className={`heading heading-x-small ${styles.scoreHeader}`}>
          O ({playerCircle})
        </h3>
        <span className={styles.score}>{score.circle}</span>
      </div>
    </div>
  );
}
