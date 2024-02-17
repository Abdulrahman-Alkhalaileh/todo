import { RiDeleteBin6Line } from "react-icons/ri";

const Todos = ({ todo, setTodos, todos }) => {
    function handleCheck() {
        let newTodos = todos.map((item) =>
            item.id === todo.id ? { ...item, completed: !item.completed } : item
        );
        setTodos(newTodos);
    }

    function handleDelete() {
        let updatedTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(updatedTodos);
    }

    return (
        <div className="wrapper todos">
            <div className="wrapper">
                <input
                    type="radio"
                    checked={todo.completed}
                    onClick={handleCheck}
                    className="radio"
                />
                <span className="fakeRadio"></span>
                <h4 className={todo.completed ? "checked" : ""}>
                    {todo.title}
                </h4>
            </div>
            <RiDeleteBin6Line
                onClick={handleDelete}
                style={{ cursor: "pointer" }}
            />
        </div>
    );
};

export default Todos;
