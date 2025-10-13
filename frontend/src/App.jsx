import React from 'react';
import { useTodos } from './hooks/useTodos';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import './styles/app.css';

function App() {
    const { todos, loading, error, addTodo, toggleTodo } = useTodos();

    return (
        <div className="page">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&display=swap" rel="stylesheet"/>
            <h1 className="neon-title">Your innovative Todo List</h1>
            <p className="intro-desc">Let's make productivity glow</p>
            <p className="intro-text">
                Manage your tasks with a <span className="glow">touch of style</span> —
                fast, fluid, and a little futuristic.
            </p>

            <div className="App">
                <p className="todos">Todo List</p>
                <TodoForm onAdd={addTodo} loading={loading}/>

                <TodoList
                    todos={todos}
                    onToggle={toggleTodo}
                    loading={loading}
                />
            </div>
        </div>
    );
}

export default App;