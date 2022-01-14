import styles from "../style/GameHeader.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GameContext } from "../context/GameContext";

import PlayerTurnLabel from "./PlayerTurnLabel";
import Button from "./Button";

import playerXMarker from "../assets/icon-x.svg";
import playerCircleMarker from "../assets/icon-o.svg";
import restartIcon from "../assets/icon-restart.svg";

export default function GameHeader({ currentPlayer }) {
  const { restartGame } = useContext(GameContext);
  const navigate = useNavigate();

  const reset = () => {
    restartGame();
    navigate("/");
  };

  return (
    <div className={styles.gameHeaderContainer}>
      <div className={styles.markerContainer}>
        <img src={playerXMarker} alt="Player X Marker Icon" />
        <img src={playerCircleMarker} alt="Player Circle Marker Icon" />
      </div>

      <PlayerTurnLabel currentPlayer={currentPlayer} />

      <Button
        onClick={reset}
        style={{ height: "100%" }}
        type="secondary"
        color="gray"
      >
        <img src={restartIcon} alt="Restart Game Button Icon" />
      </Button>
    </div>
  );
}
