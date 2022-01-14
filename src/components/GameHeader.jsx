import styles from "../style/GameHeader.module.css";
import { PlayerMarker } from "../shared/tic-tac-toe";

import PlayerTurnLabel from "./PlayerTurnLabel";
import Button from "./Button";

import playerXMarker from "../assets/icon-x.svg";
import playerCircleMarker from "../assets/icon-o.svg";
import restartIcon from "../assets/icon-restart.svg";

export default function GameHeader({ currentPlayer }) {
  return (
    <div className={styles.gameHeaderContainer}>
      <div className={styles.markerContainer}>
        <img src={playerXMarker} alt="Player X Marker Icon" />
        <img src={playerCircleMarker} alt="Player Circle Marker Icon" />
      </div>

      <PlayerTurnLabel currentPlayer={currentPlayer} />

      <Button type="secondary" color="gray">
        <img src={restartIcon} alt="Restart Game Button Icon" />
      </Button>
    </div>
  );
}
