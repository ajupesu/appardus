const express = require("express")
const cors = require("cors") // Import the cors middleware
const app = express()
const port = 8080
const catsRoutes = require("./routes/cats.routes")
const todosRoutes = require("./routes/todos.routes") // You need to import todosRoutes
const corsOptions = {
  origin: "http://localhost:3000", // Replace with the actual origin of your frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/cats", catsRoutes)
app.use("/todos", todosRoutes)

app.get("/", (req, res) => {
  res.send("Hello World 2023!")
})

app.get("/flights/:from-:to", (req, res) => {
  console.log(req.body)

  res.send({
    params: req.params,
    body: req.body
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
