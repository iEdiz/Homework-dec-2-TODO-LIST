import React, { useState } from 'react'

type EditTodoFormItems = {
  editTodo: (value: string, taskId: string) => void;
  task: { id: string; };
}

export const EditTodoForm: React.FC<EditTodoFormItems> = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    editTodo(value, task.id);

    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input' 
        value={value} 
        placeholder='Edit Task' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
          Update Task
        </button>
    </form>
  )
}
