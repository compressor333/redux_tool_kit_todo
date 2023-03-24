import React from 'react'
import { removeTodo } from '../store/todoSlice'
import { useDispatch } from 'react-redux'
import { handleComplete } from '../store/todoSlice'

const TodoItem = ({ id, text, completed, }) => {

  const dispatch = useDispatch()
  const remove = () => dispatch(removeTodo({id}))
  const handle = () => dispatch(handleComplete({id}))

  return (
    <div>
        <li>
          <input type='checkbox' checked={completed} onChange={handle}/>
          <span>{text}</span>
          <span className="delete" onClick={remove}>&times;</span>
        </li>
    </div>
  )
}

export default TodoItem