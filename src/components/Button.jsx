import PropTypes from "prop-types";
import styles from "../style/Button.module.css";

export default function Button({
  type,
  color,
  children,
  size,
  onClick,
  style,
}) {
  let buttonClasses = "";

  switch (type) {
    case "primary":
      buttonClasses += ` ${styles.btnPrimary} `;
      break;

    case "secondary":
    default:
      buttonClasses += ` ${styles.btnSecondary} `;
      break;
  }

  switch (color) {
    case "yellow":
      buttonClasses += ` ${styles.btnYellow} `;
      break;

    case "blue":
      buttonClasses += ` ${styles.btnBlue} `;
      break;

    case "gray":
    default:
      buttonClasses += ` ${styles.btnGray} `;
      break;
  }

  if (size === "large") {
    buttonClasses += ` ${styles.btnLarge} `;
  }
  return (
    <button
      style={style}
      onClick={onClick}
      className={`${styles.btn} ${buttonClasses}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "primary",
  color: "yellow",
  size: "primary",
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};
