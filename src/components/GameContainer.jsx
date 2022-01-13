import styles from "../style/GameContainer.module.css";

export default function GameContainer({ children }) {
  return <div className={styles.gameContainer}>{children}</div>;
}
