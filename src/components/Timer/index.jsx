import React from "react";

// Imported Styles.scss
import "./styles.scss";

// Imported Components
import StartButton from "../StartButton";
import ResetButton from "../ResetButton";

export default function Timer(props) {
  // Increase Button & Decrease Button below
  const increase = () => {
    document.getElementById("input").stepUp();
    props.setCountdown(props.countdown + 60000);
    props.setResetValue(props.resetValue + 60000);
  };
  const decrease = () => {
    document.getElementById("input").stepDown();
    props.setResetValue(props.resetValue - 60000);
    props.setCountdown(props.countdown - 60000);
  };
  return (
    <div className="timer-container">
      <div className="timer-container__diplay-timer">
        {props.displaycountdown}
      </div>

      <div className="input-container">
        <button
          className="input-container__increase input-buttons"
          onClick={() => {
            increase();
            props.setCountdown(props.resetValue + 60000);
          }}
          disabled={props.countdown >= 120 * 60000 ? true : ""}
        >
          +
        </button>

        <input
          id="input"
          className="input-container__timer-input"
          type="number"
          step="1"
          min="1"
          max="120"
          defaultValue={props.countdown / 60000}
          onChange={(event) => {
            props.setCountdown(event.target.value * 60000);
            props.setResetValue(event.target.value * 60000);
          }}
        />

        <button
          className="input-container__decrease input-buttons"
          onClick={() => {
            decrease();
            props.setCountdown(props.resetValue - 60000);
          }}
          disabled={props.countdown <= 60000 ? true : ""}
        >
          -
        </button>
      </div>

      <StartButton
        setTimerState={props.setTimerState}
        timerState={props.timerState}
        countdown={props.countdown}
      />
      <ResetButton
        setTimerState={props.setTimerState}
        timerState={props.timerState}
        setCountdown={props.setCountdown}
        countdown={props.countdown}
        resetValue={props.resetValue}
      />
    </div>
  );
}
