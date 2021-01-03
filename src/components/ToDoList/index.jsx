import React from "react";

// Imported Style.scss
import "./styles.scss";

// Imported Componets
import Havetodo from "./havetodo.jsx";
//

export default function ToDoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <div className="todo-list">
        {todos.map((todo) => (
          <Havetodo
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </div>
  );
}
