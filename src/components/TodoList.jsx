import Todos from "./Todos";

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todoList">
            <h3>Todos :</h3>
            {todos.map((todo) => (
                <Todos
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                />
            ))}
        </div>
    );
};

export default TodoList;
