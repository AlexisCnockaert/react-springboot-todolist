import "../../style/todo.css";
import React from "react";

const TodoItem = ({todo, onToggle}) => {
    return (
        <li
            className={`todo-item ${todo.done ? "done" : ""}`}
            onClick={() => onToggle(todo.id)}
        >
            {todo.title}
        </li>
    );
};
export default TodoItem