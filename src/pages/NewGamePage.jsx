import Button from "../components/Button";
import PlayerIconSelector from "../components/PlayerIconSelector";

import styles from "../style/NewGamePage.module.css";

import xIconSolid from "../assets/icon-x.svg";
import oIconSolid from "../assets/icon-o.svg";

import { useNavigate } from "react-router-dom";

export default function NewGamePage() {
  const navigate = useNavigate();

  const handleSelectChange = (selected) => {
    console.log(`Player ${selected} chosen`);
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
          alt="Player O Icon"
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
