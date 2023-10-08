const { v4: uuidv4 } = require("uuid")

let todos = []

exports.create = (req, res) => {
  const { title, priority } = req.body
  const newTodo = {
    id: uuidv4(),
    title,
    priority,
    created: Date.now(),
    updated: null,
    deleted: false
  }
  todos.push(newTodo)
  res.status(201).json(newTodo)
}

exports.readAll = (req, res) => {
  res.status(200).json(todos)
}

exports.readById = (req, res) => {
  const { id } = req.params
  const todo = todos.find(todo => todo.id === id)
  if (todo) {
    res.status(200).json(todo)
  } else {
    res.status(404).json({ error: "Todo not found" })
  }
}

exports.update = (req, res) => {
  const { id } = req.params
  const { title, priority } = req.body
  const todoIndex = todos.findIndex(todo => todo.id === id)
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      ...todos[todoIndex],
      title,
      priority,
      updated: Date.now()
    }
    res.status(200).json(todos[todoIndex])
  } else {
    res.status(404).json({ error: "Todo not found" })
  }
}

exports.delete = (req, res) => {
  const { id } = req.params
  const todoIndex = todos.findIndex(todo => todo.id === id)
  if (todoIndex !== -1) {
    todos[todoIndex].deleted = true
    res.status(204).send()
  } else {
    res.status(404).json({ error: "Todo not found" })
  }
}
