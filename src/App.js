import React, {useReducer} from 'react';
import './App.scss';
import TodoForm from './TodoForm'
import TodoList from './TodoList';


const ADD_TODO = 'ADD_TODO';

const todoReducer = (state, {type, todo}) => {

  const actions = {
    ADD_TODO: {
      ...state,
      todos: [...state.todos, todo]
    }
  }

  if (!actions[type]) {
    throw new Error("type not found")
  }

  return actions[type]
}


const App = () => {

  const [state, dispatch] = useReducer(todoReducer, {todos: [{
    id: 1,
    task: 'Walk the Dog',
    completed: false
  }]})

  const addTodo = task => {

      const newTodo = {
        id: Math.random().toString(36),
        task,
        completed: false
      }

    // update the state with the new todo
    dispatch({type: ADD_TODO, todo: newTodo})



  }

  return (
    <div className="App container">
      <h1>Simple todo</h1>
      <TodoList todos={state.todos}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
