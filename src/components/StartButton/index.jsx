import React from "react";
// Import styles.scss
import "./styles.scss";

export default function StartButton(props) {
  return (
    <button
      className="start-btn"
      onClick={() => {
        !props.timerState
          ? props.setTimerState(true)
          : props.setTimerState(false);
      }}
      // disables the btn if countDown === 0.
      disabled={props.countdown <= 0 ? true : ""}
    >
      {props.countdown === 0 ? "Start" : !props.timerState ? "Start" : "Stop"}
    </button>
  );
}
