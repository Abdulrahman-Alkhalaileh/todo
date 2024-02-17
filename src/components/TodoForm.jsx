import { useState } from "react";
import uuid from "react-uuid";

const TodoForm = ({ todos, setTodos }) => {
    const [isEmpty, setIsEmpty] = useState(false);

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
        setIsEmpty(false);
    }

    function handleChange(e) {
        e.target.value.length >= 3 ? setIsEmpty(true) : setIsEmpty(false);
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2>What's your todo?</h2>
                <div className="wrapper">
                    <input
                        type="text"
                        className="input"
                        placeholder="Insert at least 3 characters"
                        onChange={handleChange}
                    />
                    {isEmpty && <button className="btn">Add</button>}
                </div>
            </form>
        </>
    );
};

export default TodoForm;
