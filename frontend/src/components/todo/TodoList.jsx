import React from "react";
import "../../styles/todolist.css"
import TodoItem from "./TodoItem.jsx";

function TodoList({ todos, onToggle }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
}

export default TodoList;
