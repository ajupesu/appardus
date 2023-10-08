import React, { useState, useEffect } from "react"

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    // Fetch all todos from the backend when the component mounts
    fetch("/todos")
      .then(response => response.json())
      .then(data => {
        setTodos(data)
      })
      .catch(error => {
        console.error("Error fetching todos:", error)
      })
  }, [])

  const createTodo = () => {
    const userPriority = parseInt(prompt("Enter priority:")) // Prompt the user for priority
    if (isNaN(userPriority)) {
      alert("Invalid priority value. Please enter a number.")
      return
    }

    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newTodo, priority: userPriority }) // Use user-provided priority
    })
      .then(response => response.json())
      .then(data => {
        // Update the state with the newly created ToDo
        setTodos([...todos, data])
        setNewTodo("")
      })
      .catch(error => {
        console.error("Error creating ToDo:", error)
      })
  }

  const deleteTodo = id => {
    // Make a DELETE request to delete a specific ToDo
    fetch(`/todos/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        // Remove the deleted ToDo from the state
        setTodos(todos.filter(todo => todo.id !== id))
      })
      .catch(error => {
        console.error("Error deleting ToDo:", error)
      })
  }

  return (
    <div className="todo-page">
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="New ToDo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo}>Create ToDo</button>
      <div className="todos">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="todo"
          >
            <p>{todo.title}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoPage
