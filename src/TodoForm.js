import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  // Create a state for our controlled input
  const [todo, setTodo] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const validateTodo = () => {

    if(!todo) {
      setErrorMsg("Please post a todo")
      return false
    }

    setErrorMsg(null);
    return true;

  }


  const handleNewTodo = event => {
    event.preventDefault();

    if(validateTodo()) {
      addTodo(todo);
      setTodo('');
    }

  }


  return (
    <form onSubmit={handleNewTodo}>
      <div className="form-group">
        <input type="text" value={todo} onChange={(event)=> setTodo(event.target.value)} className="form-control" id="todo-input" placeholder="Enter a todo here" autoFocus />
      </div>
      <h4 id='error'>{errorMsg}</h4>

    </form>
        )
}

export default TodoForm
