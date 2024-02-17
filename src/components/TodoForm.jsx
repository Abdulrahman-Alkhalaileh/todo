import uuid from "react-uuid";

const TodoForm = ({ todos, setTodos }) => {
    function handleSubmit(e) {
        e.preventDefault();
        let text = document.querySelector(".input").value;
        let newTodo = {
            completed: false,
            id: uuid(),
            title: text,
            userId: null,
        };
        setTodos([newTodo, ...todos]);
        document.querySelector(".input").value = "";
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2>What's your todo?</h2>
                <div className="wrapper">
                    <input type="text" className="input" />
                    <button className="btn">Add</button>
                </div>
            </form>
        </>
    );
};

export default TodoForm;
