import styles from "../style/PlayerIconSelector.module.css";

import { useState } from "react";

import oIconGray from "../assets/icon-o-gray.svg";
import oIconDark from "../assets/icon-o-dark.svg";
import xIconGray from "../assets/icon-x-gray.svg";
import xIconDark from "../assets/icon-x-dark.svg";

export default function PlayerIconSelector() {
  return (
    <div className={styles.iconSelectorContainer}>
      <h2 className="heading heading-x-small">PICK PLAYER 1'S MARK</h2>

      <div className={styles.selector}>
        <div className={styles.playerIcon}>
          <img
            className={styles.playerSvg}
            src={xIconGray}
            alt="Player X Icon"
          />
        </div>
        <div className={`${styles.playerIcon} ${styles.playerIconSelected}`}>
          <img
            className={styles.playerSvg}
            src={oIconDark}
            alt="Player O Icon"
          />
        </div>
      </div>
      <p>REMEMBER: X GOES FIRST</p>
    </div>
  );
}
