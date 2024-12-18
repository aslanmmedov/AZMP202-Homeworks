import React, { useState } from 'react'
import ToDo from '../Form';

function allTodos() {
    const [todos,setTodo] = useState([]);

  return (
    <div>
      <ToDo todos = {todos} setTodo = {setTodo}/>

    </div>
  )
}

export default index