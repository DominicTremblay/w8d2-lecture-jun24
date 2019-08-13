import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  // Create a state for our controlled input
  const [todo, setTodo] = useState('');

  const handleNewTodo = event => {
    event.preventDefault();

    addTodo(todo);

  }


  return (
    <form onSubmit={handleNewTodo}>
      <div className="form-group">
        <input type="text" value={todo} onChange={(event)=> setTodo(event.target.value)} className="form-control" id="todo-input" placeholder="Enter a todo here" autoFocus />
      </div>

    </form>
        )
}

export default TodoForm
