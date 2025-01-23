const express = require("express");
const {
  createTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
  getSinlgeTodo,
} = require("../controllers/todo.controller");

const todoRoutes = express.Router();

todoRoutes.post("/create", createTodo);
todoRoutes.get("/gettodo", getAllTodo);
todoRoutes.get("/getsingletodo/:id", getSinlgeTodo);
todoRoutes.delete("/deletetodo/:id", deleteTodo);
todoRoutes.patch("/updatetodo/:id", updateTodo);

module.exports = todoRoutes;
