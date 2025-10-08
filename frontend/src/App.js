import React, { useEffect, useState } from "react";
import "./styles/app.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [loading, setLoading] = useState(false); // to prevent double clicks
    const [error, setError] = useState(null);

    const API_BASE_URL = "http://localhost:8080/api/todos";
    const fetchTodos = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(API_BASE_URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch todos: ${response.status}`);
            }
            const data = await response.json();
            setTodos(data);
        } catch (err) {
            console.error("Error fetching todos:", err);
            setError("Failed to load todos. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async () => {
        if (newTodo.trim() === "") return;

        try {
            setLoading(true);
            setError(null);

            const todoRequest = {
                title: newTodo.trim()
            };

            const response = await fetch(API_BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(todoRequest),
            });

            if (!response.ok) {
                throw new Error(`Failed to create todo: ${response.status}`);
            }
            setNewTodo("");
            await fetchTodos();
        } catch (err) {
            console.error("Error adding todo:", err);
            setError("Failed to add todo. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    const markDone = async (id) => {
        try {
            setError(null);
            const response = await fetch(`${API_BASE_URL}/${id}/toggle`, {
                method: "PUT",
            });

            if (!response.ok) {
                throw new Error(`Failed to update todo: ${response.status}`);
            }

            await fetchTodos();
        } catch (err) {
            console.error("Error updating todo:", err);
            setError("Failed to update todo. Please try again.");
        }
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
