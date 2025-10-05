import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const fetchTodos = () => {
        fetch("http://localhost:8080/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = () => {
        if (newTodo.trim() === "") return;

        fetch("http://localhost:8080", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo),
        })
            .then(() => {
                setNewTodo("");
                fetchTodos();
            })
            .catch((err) => console.error(err));
    };

    const markDone = (id) => {
        fetch(`http://localhost:8080/${id}/done`, {
            method: "PUT",
        })
            .then(() => fetchTodos())
            .catch((err) => console.error(err));
    };

    return (
        <div className="page">
            <h1 className="neon-title">Your innovative Todo List</h1>

            <p className="intro-text">
                Manage your tasks with a <span className="glow">touch of style</span> —
                fast, fluid, and a little futuristic. Let’s make productivity glow.
            </p>

            <div className="App">
                <p className={"todos"}>
                    Todo List
                </p>
                <div className="input-container">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                        placeholder="New todo"
                        className="neon-input"
                    />
                    <button onClick={addTodo} className="neon-button">
                        Add Todo
                    </button>
                </div>

                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`todo-item ${todo.done ? "done" : ""}`}
                            onClick={() => markDone(todo.id)}
                        >
                            {todo.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
