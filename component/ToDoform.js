import React, { useState } from 'react';

export default function ToDoform (props){
    const [input,setinput]=useState("");
const handleSubmit = (e) => {
e.preventDefault();
props.AddToDo(input);
setinput("");
}


    return(
       <form  onsubmit={ handleSubmit} className="todo-form">
        <input  value={input} onChange={(e)=>setinput(e.target.value)} className="todo-input" placeholder="Add a ToDo App " />
        <button type='Submit' className="todo-button">Add ToDo</button>
       </form>
    )
}