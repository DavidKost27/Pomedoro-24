import React, { useState } from "react";

// Imported Style.scss
import "./styles.scss";
//

// Imported Componet
import ToDoList from "../ToDoList";

export default function Form({
  setInputText,
  inputText,
  setTodos,
  todos,
  inputDescription,
  setInputDescription,
}) {
  const handlerTitleInput = (e) => {
    setInputText(e.target.value);
  };
  const handlerDescriptionInput = (e) => {
    setInputDescription(e.target.value);
  };
  const handlerSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: inputText,
        description: inputDescription,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
    setInputDescription("");
  };
  return (
    <form className="form-container">
      <div className="input-fields-flex-wrap">
        <input
          maxLength={24}
          value={inputText}
          onChange={handlerTitleInput}
          type="text"
          className="form-container__title-input input-field"
        />
        <input
          maxLength={35}
          value={inputDescription}
          onChange={handlerDescriptionInput}
          type="text"
          className="form-container__description-input input-field"
        />
      </div>
      <button
        onClick={handlerSubmitTodo}
        className="form-container__submit-button"
        type="submit"
        disabled={inputText === "" || inputDescription === "" ? true : ""}
      >
        ADD TASK
      </button>

      <ToDoList todos={todos} setTodos={setTodos} />
    </form>
  );
}
