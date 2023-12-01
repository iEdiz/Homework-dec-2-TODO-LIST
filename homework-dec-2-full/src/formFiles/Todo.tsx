import React from 'react'

type TodoItems = {
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}


export const Todo: React.FC<TodoItems> = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => {
        toggleComplete(task.id)
      }} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <button onClick={() => {
          deleteTodo(task.id);
        }}>Delete</button>
        <button onClick={() => {
          editTodo(task.id)
        }}>Edit</button>
      </div>
    </div>
  )
}
