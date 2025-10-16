import React from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
    const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();
return (
        <div className="page">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&display=swap" rel="stylesheet"/>
            <h1 className="neon-title">To Done</h1>
            <p className="intro-desc">Be productive, efficient, organized</p>
            <p className="intro-text">
                Manage your tasks with a <span className="glow">touch of style </span>
                - all in a futuristic and optimized way
                Let AI guide you through each step of your tasks

            </p>

            <div className="App">
                <p className="todos">Todo List</p>
                <ErrorMessage message={error} />

                <TodoForm onAdd={addTodo} loading={loading}/>

                <TodoList
                    todos={todos}
                    onToggle={toggleTodo}
                    loading={loading}
                    onDelete={deleteTodo}
                />
            </div>
        </div>
    );
}

export default Home;