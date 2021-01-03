import React from "react";
// Import styles.scss
import "./styles.scss";

export default function ResetButton(props) {
  return (
    <button
      className="reset-btn"
      onClick={() => props.setCountdown(props.resetValue)}
      // Disabling the reset-btn when it's not needed.
      disabled={
        (props.countdown <= 0 || !props.timerState ? true : "",
        props.countdown >= props.resetValue || props.timerState ? true : "")
      }
    >
      Reset
    </button>
  );
}
