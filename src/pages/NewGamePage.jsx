import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { GameContext } from "../context/GameContext";

import Button from "../components/Button";
import PlayerIconSelector from "../components/PlayerIconSelector";

import styles from "../style/NewGamePage.module.css";

import xIconSolid from "../assets/icon-x.svg";
import oIconSolid from "../assets/icon-o.svg";

// TODO: add context and set the currently selected player icon
// in the state.

export default function NewGamePage() {
  const navigate = useNavigate();
  const { setPlayerOne } = useContext(GameContext);

  const handleSelectChange = (selectedPlayerMarker) => {
    console.log(`Player ${selectedPlayerMarker} chosen`);
    setPlayerOne(selectedPlayerMarker);
  };

  return (
    <div className={styles.newGameContainer}>
      <div className={styles.playerIconContainer}>
        <img
          className={styles.playerIcon}
          src={xIconSolid}
          alt="Player X Icon"
        />
        <img
          className={styles.playerIcon}
          src={oIconSolid}
          alt="Player Circle Icon"
        />
      </div>

      <PlayerIconSelector onSelected={handleSelectChange} />

      <div className={styles.buttonContainer}>
        <Button
          type="primary"
          color="yellow"
          onClick={() => navigate("/start")}
        >
          NEW GAME (VS CPU)
        </Button>
        <Button type="primary" color="blue">
          NEW GAME (VS PLAYER)
        </Button>
      </div>
    </div>
  );
}
