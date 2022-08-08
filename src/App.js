import {useState} from "react";
import "./App.css";
import ToDoform from "./component/ToDoform";
import ToDoitem from "./component/ToDoitem";

function App() {
  const [todos , setToDos]= useState([]);

const AddToDo =(text)=>{
let id = 1;
if (todos.length > 0){
  id=todos[0].id + 1;
}

let todo ={id :id , text :text , completed :false };
let newToDos=[todo, ...todos];
setToDos(newToDos)
}
const removetodo = (id)=>{
let updatedtodos =[...todos].filter((todo) => todo.id !== id )
setToDos(updatedtodos)
};
const completeToDo = (id) => {
let updatedtodos = todos.map((todo)=>{
  if(todo.id === id){
    todo.completed=!todo.completed
  }
  return todo
})
setToDos(updatedtodos)
}
  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
     <ToDoform AddToDo={AddToDo}/>
     {todos.map((todo) =>{
      
    return(
        <ToDoitem removetodo= {removetodo} completetodo={'completetodo'}  todo={todo} key={todo.id}/>
      )
     })}
    </div>
 );
}

export default App;


