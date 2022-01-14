import PropTypes from "prop-types";
import styles from "../style/GameOverDialog.module.css";

import { useEffect } from "react";

export default function GameOverDialog({ children }) {
  return (
    <div className={styles.fadeOverlay}>
      <div className={styles.gameOverDialog}>
        <div className={styles.dialogContent}>{children}</div>
      </div>
    </div>
  );
}

GameOverDialog.defaultProps = {
  heading: "",
};

GameOverDialog.propTypes = {
  message: PropTypes.string,
  heading: PropTypes.string,
};
