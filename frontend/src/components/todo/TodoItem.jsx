import React from 'react';

const TodoItem = ({ todo, onToggle, loading }) => {
    return (
        <li
            className={`todo-item ${todo.done ? 'done' : ''}`}
            onClick={() => !loading && onToggle(todo.id)}
        >
            {todo.title}
        </li>
    );
};

export default TodoItem;