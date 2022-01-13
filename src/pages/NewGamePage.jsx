import PlayerIconSelector from "../components/PlayerIconSelector";

import styles from "../style/NewGamePage.module.css";

import xIconOutline from "../assets/icon-x-outline.svg";
import xIconSolid from "../assets/icon-x.svg";
import oIconOutline from "../assets/icon-o-outline.svg";
import oIconSolid from "../assets/icon-o.svg";

export default function NewGamePage() {
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

      <PlayerIconSelector />
      <h1>Starting a new game</h1>
      <h1>Starting a new game</h1>
      <h1>Starting a new game</h1>
    </div>
  );
}
