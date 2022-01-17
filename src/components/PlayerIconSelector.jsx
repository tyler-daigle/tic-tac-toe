import PropTypes from "prop-types";
import styles from "../style/PlayerIconSelector.module.css";

import { useState, useEffect } from "react";

import oIconGray from "../assets/icon-o-gray.svg";
import oIconDark from "../assets/icon-o-dark.svg";
import xIconGray from "../assets/icon-x-gray.svg";
import xIconDark from "../assets/icon-x-dark.svg";

import { PlayerMarker } from "../shared/tic-tac-toe";

export default function PlayerIconSelector({ onSelected }) {
  useEffect(() => {
    // force the dark circle to load
    const img = new Image();
    img.src = oIconDark;
  }, []);

  // player 0 is X, player 1 is Circle
  const [selectedIcon, setSelectedIcon] = useState(PlayerMarker.X);

  const selectPlayer = (playerNum) => {
    setSelectedIcon(playerNum);
    onSelected(playerNum);
  };

  // set the playerIconSelected class on whichever icon is selected
  const playerXclass = `${styles.playerIcon} ${
    selectedIcon === PlayerMarker.X ? styles.playerIconSelected : ""
  }`;
  const playerOclass = `${styles.playerIcon} ${
    selectedIcon === PlayerMarker.Circle ? styles.playerIconSelected : ""
  }`;

  return (
    <div className={styles.iconSelectorContainer}>
      <h2 className="heading heading-x-small">PICK PLAYER 1'S MARK</h2>

      {/* X and O selector */}
      <div className={styles.selector}>
        <div
          onClick={() => selectPlayer(PlayerMarker.X)}
          className={playerXclass}
        >
          <img
            className={styles.playerSvg}
            src={selectedIcon === PlayerMarker.X ? xIconDark : xIconGray}
            alt="Player X Icon"
          />
        </div>

        <div
          onClick={() => selectPlayer(PlayerMarker.Circle)}
          className={playerOclass}
        >
          <img
            className={styles.playerSvg}
            src={selectedIcon === PlayerMarker.Circle ? oIconDark : oIconGray}
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
