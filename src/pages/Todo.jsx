import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then((response) => response.json())
            .then((data) => setTodos(data.slice(0, 10)));
    }, []);

    return (
        <div className="todo">
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default Todo;
