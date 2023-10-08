const express = require("express")
const router = express.Router()
const todosController = require("../controllers/todos.controller")

router.post("/", todosController.create)
router.get("/", todosController.readAll)
router.get("/:id", todosController.readById)
router.put("/:id", todosController.update)
router.delete("/:id", todosController.delete)

module.exports = router
