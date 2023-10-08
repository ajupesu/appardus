import React from "react"

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <p>{todo.title}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo
