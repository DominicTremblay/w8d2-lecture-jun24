import React, {useReducer} from 'react';
import './App.scss';
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import axios from 'axios';


const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const todoReducer = (state, action) => {

  const actions = {
    ADD_TODO: {
      ...state,
      todos: [...state.todos, action.todo]
    },
    DELETE_TODO: {
      ...state,
      todos: [...state.todos.filter(todo => todo.id !== action.id )]
    }
  }

  if (!actions[action.type]) {
    throw new Error("type not found")
  }

  return actions[action.type]
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

      return axios
      .post('/api/todos', newTodo)
      .then(res => {
        
        console.log("Axios:", res.data);
        
        dispatch({type: ADD_TODO, todo: res.data})
        

      })
  }

  const deleteTodo = id => {
  return axios
    .delete(`/api/todos/${id}`)
    .then(res => {

      dispatch({type: DELETE_TODO, id})

    })
} 

  return (
    <div className="App container">
      <h1>Simple todo</h1>
      <TodoList todos={state.todos} deleteTodo={deleteTodo}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
