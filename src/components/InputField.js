import React from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";




const InputField = () => {
  const [text, setText] = React.useState('')

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>add</button>
    </div>
  )
}

export default InputField