import PropTypes from "prop-types";
import styles from "../style/PlayerIconSelector.module.css";

import { useState } from "react";

import oIconGray from "../assets/icon-o-gray.svg";
import oIconDark from "../assets/icon-o-dark.svg";
import xIconGray from "../assets/icon-x-gray.svg";
import xIconDark from "../assets/icon-x-dark.svg";

export default function PlayerIconSelector({ onSelected }) {
  // player 0 is X, player 1 is Circle
  const [selectedPlayer, setSelectedPlayer] = useState(0);

  const selectPlayer = (playerNum) => {
    setSelectedPlayer(playerNum);
    onSelected(playerNum);
  };

  // set the playerIconSelected class on whichever icon is selected
  const playerXclass = `${styles.playerIcon} ${
    selectedPlayer === 0 ? styles.playerIconSelected : ""
  }`;
  const playerOclass = `${styles.playerIcon} ${
    selectedPlayer === 1 ? styles.playerIconSelected : ""
  }`;

  return (
    <div className={styles.iconSelectorContainer}>
      <h2 className="heading heading-x-small">PICK PLAYER 1'S MARK</h2>

      {/* X and O selector */}
      <div className={styles.selector}>
        <div onClick={() => selectPlayer(0)} className={playerXclass}>
          <img
            className={styles.playerSvg}
            src={selectedPlayer === 0 ? xIconDark : xIconGray}
            alt="Player X Icon"
          />
        </div>

        <div onClick={() => selectPlayer(1)} className={playerOclass}>
          <img
            className={styles.playerSvg}
            src={selectedPlayer === 1 ? oIconDark : oIconGray}
            alt="Player O Icon"
          />
        </div>
      </div>
      <p>REMEMBER: X GOES FIRST</p>
    </div>
  );
}

PlayerIconSelector.propTypes = {
  onSelected: PropTypes.func.isRequired,
};
