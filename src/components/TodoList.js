import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos)

  return (
    <ul>
      {todos.map(el => {
        return <TodoItem
          key={el.id}
          id={el.id}
          text={el.text}
          completed={el.completed}
        />
      })}
    </ul>
  )
}

export default TodoList