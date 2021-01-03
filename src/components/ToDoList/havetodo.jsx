import React from "react";
import "./havetodo.scss";

export default function Havetodo({
  title,
  description,
  todo,
  todos,
  setTodos,
}) {
  // Events
  const handlerDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const handlerComplete = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="havetodo-container">
      <div className="todo-taks-container">
        <div
          className={`todo-taks-container__title font ${
            todo.completed ? "completed" : ""
          }`}
        >
          {title}
        </div>
        <li
          className={`todo-taks-container__description font ${
            todo.completed ? "completed" : ""
          }`}
        >
          {description}
        </li>
      </div>

      <div className="buttons-container">
        <button
          onClick={handlerComplete}
          className="buttons-container__complete-btn buttons-task font"
        >
          Done
        </button>
        <button
          onClick={handlerDelete}
          className="buttons-container__trash-btn buttons-task font"
        >
          Trash
        </button>
      </div>
    </div>
  );
}
