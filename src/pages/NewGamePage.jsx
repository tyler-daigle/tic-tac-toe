import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { GameContext } from "../context/GameContext";

import GameContainer from "../components/GameContainer";

import Button from "../components/Button";
import PlayerIconSelector from "../components/PlayerIconSelector";

import styles from "../style/NewGamePage.module.css";

import xIconSolid from "../assets/icon-x.svg";
import oIconSolid from "../assets/icon-o.svg";
import About from "../components/About";

export default function NewGamePage() {
  const navigate = useNavigate();
  const { setPlayerOneMarker } = useContext(GameContext);

  const handleSelectChange = (selectedPlayerMarker) => {
    setPlayerOneMarker(selectedPlayerMarker);
  };

  return (
    <GameContainer>
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
          <Button type="primary" color="yellow" disabled>
            NEW GAME (VS CPU)
          </Button>
          <Button
            type="primary"
            color="blue"
            onClick={() => navigate("/start")}
          >
            NEW GAME (VS PLAYER)
          </Button>
        </div>
        <About />
      </div>
    </GameContainer>
  );
}
