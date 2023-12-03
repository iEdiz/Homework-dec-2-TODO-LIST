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
    <div className='todo-element'>
      <p onClick={() => {
        toggleComplete(task.id)
      }} className={`${task.completed ? 'completed' : 'incompleted'}`}>{task.task}</p>
      <div>
        <button className='edit-button' onClick={() => {
          editTodo(task.id)
        }}>
          Edit
        </button>
        <button className='delete-button' onClick={() => {
          deleteTodo(task.id);
        }}>
          Delete
        </button>
      </div>
    </div>
  )
}
