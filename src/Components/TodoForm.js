import { useState } from "react";
import '../Styles/TodoForm.css'

function TodoForm({onAdd}) {

    const [text, setText] = useState("");
    return (
        <form 
            className="todoAppForm"
            onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input className="todoInput" placeholder='What needs to be done?'
            type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button className="todoAppAddButton">Add</button>
        </form>
    )
}

export default TodoForm;