import React, { useState } from 'react'
import {nanoid} from 'nanoid'
function ToDo({todos,setTodo}) {
  const [todoname,setTodoName] = useState("");
  const [tododate,setTodoDate] = useState(0);

  const addTodo = (e) => {
    e.preventDefault();

    if(todoname && tododate){
        const todo = {
            id: nanoid(),
            todoname,
            tododate
        };
        // console.log(todo)
        setTodo([...todos,todo]);
        
        setTodoName("");
        setTodoDate(0);
    }
  }

  return (
    <form onSubmit={addTodo}>
        <fieldset>
            <legend>ToDo Form</legend>
            <input type="text" id = "job" placeholder = "enter to do"
            onChange={(e) => {
                setTodoName(e.target.value.trim());
            }}/>
            <input type="date" id = "endDate" placeholder = "enter end date"
            onChange={(e)=>{
                setTodoDate(e.target.value);
            }}
            />
            <input type="submit" id = "submit"/>
        </fieldset>
    </form>
  )
}

export default ToDo