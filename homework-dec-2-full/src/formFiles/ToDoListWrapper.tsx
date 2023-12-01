import React, { useState } from 'react'
import { TodoListForm } from './TodoListForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo';
import { EditTodoForm } from './ToDoListEdit';
uuidv4();

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

export const ToDoListWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: string) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
  }

  const toggleComplete = (id: string) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };
  
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => 
      todo.id !== id
    ))
  }

  const editTodo = (id: string) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
    )));
  }

  const editTask = (task: string, id: string) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo
    )))
  }

  return (
    <div className='TodoWrapper'>
      <h1>My TODO list!</h1>
        <TodoListForm addTodo = {addTodo} />
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditTodoForm 
            key={index} 
            editTodo={editTask} 
            task={todo}/>
          ) : (
          <Todo 
            task={todo} 
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
           />
          )
        ))}
        
    </div>
  )
}
