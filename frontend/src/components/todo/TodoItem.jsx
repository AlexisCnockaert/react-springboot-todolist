import React from 'react';

const TodoItem = ({ todo, onToggle, loading, onDelete }) => {
    return (
        <li
            className={`todo-item ${todo.done ? 'done' : ''}`}

        >
           <div  className="todo-title"> {todo.title} </div>
            <div className="todo-icons">
                   <div className="gg-check-r" onClick={() => !loading && onToggle(todo.id)}></div>
                   <div className="gg-trash" onClick={() => !loading && onDelete(todo.id)}></div>
           </div>
        </li>

    );
};

export default TodoItem;