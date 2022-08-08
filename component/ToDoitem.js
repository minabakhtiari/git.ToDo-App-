import React from "react";
import {MdDelete} from "react-icons/md";
import {BiCheckCircle} from "react-icons/bi";
export default function ToDoitem(props){
    const {todo , removetodo ,completeToDo} = props

    return(
        <div className={'todo.completed' ? "todo-row completed" : "todo-row"}>   
            {todo.text}
            <div className="iconscontainer">
            <MdDelete className="icon" onClick={() =>removetodo(todo.id)} />
            <BiCheckCircle className="icon" onClick={() => completeToDo(todo.id)}/>
              </div>
         </div>
      
    )
}