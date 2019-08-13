import React from 'react'

import './TodoListItem.scss'

const TodoListItem = (({id, task, completed, deleteTodo}) => {

  const handleDelete = event => {


    deleteTodo(id)
    .then(res => console.log(res))


  }


  return (
    <li className="list-group-item new-todo"><input type="checkbox" value={task} completed={completed ? completed : undefined}/> <label>{task}</label> <button onClick={handleDelete} className='remove-todo'>X</button></li>
  )
})

export default TodoListItem
