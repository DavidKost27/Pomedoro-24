import React, { useState, useEffect } from "react";

// Imported Styles.scss
import "./App.scss";

// Imported Custom Hook
import { useInterval } from "./hooks/useInterval";

// Imported Components
import TopBar from "./components/TopBar";
import Timer from "./components/Timer";
import Form from "./components/Form";

//
function App() {
  // countdown = the amount of time in milleseconds
  const [countdown, setCountdown] = useState(1440000);
  // false = stopped, true = going
  const [timerState, setTimerState] = useState(false);
  // Saving a clone of the countdown value
  const [resetValue, setResetValue] = useState(countdown);
  // inputText = Title inside the "todos" array
  const [inputText, setInputText] = useState("");
  // inputDescription = description inside the "todos" array
  const [inputDescription, setInputDescription] = useState("");
  // Creating an array that will contain (inputText, inputDescription)
  const [todos, setTodos] = useState([]);

  // Run Once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  // Updating the title to the countdown timer
  useEffect(() => {
    document.title = `${displaycountdown} - Pomedoro`;
  }, [countdown]);
  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  // Custom hook for the timer
  useInterval(
    () => setCountdown(countdown - 1000),
    timerState && countdown > 1 ? 1000 : null
  );

  // Converting Miliseconds into seconds and minutes that we receive as a value from the input.
  let minutes =
    countdown === 0 ? Math.floor(0 / 60000) : Math.floor(countdown / 60000);
  let seconds = ((countdown % 60000) / 1000).toFixed(0);
  // Taking the converted to Minutes and Seconds and displaying them.
  let displaycountdown = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <TopBar />

      <Timer
        displaycountdown={displaycountdown}
        setResetValue={setResetValue}
        timerState={timerState}
        setTimerState={setTimerState}
        setCountdown={setCountdown}
        countdown={countdown}
        resetValue={resetValue}
      />

      {/* <TasksSection /> */}
      <div className="todo-list-section-container">
        <div className="todo-list-section-container__headline">To Do List:</div>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setInputDescription={setInputDescription}
          inputDescription={inputDescription}
        />
      </div>
    </div>
  );
}

export default App;
