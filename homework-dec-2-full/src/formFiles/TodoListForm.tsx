import React, { useState } from 'react'

type TodoFormItems = {
  addTodo: (todo: string) => void
}

export const TodoListForm: React.FC<TodoFormItems> = ({addTodo}) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addTodo(value);

    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input' 
        value={value} 
        placeholder='Add a task' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
          Add task
        </button>
    </form>
  )
}
