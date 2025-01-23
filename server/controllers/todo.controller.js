const todoModel = require("../models/todo.model");

const createTodo = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ message: "Title is required" });
  }
  try {
    const todoList = await todoModel.create({ title });
    res.status(200).json({ message: "Todo created successfully", todoList });
  } catch (error) {
    res.status(400).json({ message: "error creating todos" });
  }
};
const getAllTodo = async (req, res) => {
  try {
    const alltodo = await todoModel.find();
    res.status(200).json({ message: "Todo created successfully", alltodo });
  } catch (error) {
    res.status(400).json({ message: "error getting all todos" });
  }
};
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await todoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully", deletedTodo });
  } catch (error) {
    res.status(400).json({ message: "error deleting todos" });
  }
};
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const updatedTodo = await todoModel.findByIdAndUpdate(id, { title });
    res.status(200).json({ message: "Todo updated successfully", updatedTodo });
  } catch (error) {
    res.status(400).json({ message: "error updating todos" });
  }
};
const getSinlgeTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const singleTodo = await todoModel.findById(id);
    res.status(200).json({ message: "Todo updated successfully", singleTodo });
  } catch (error) {
    res.status(400).json({ message: "error getting single todos" });
  }
};

module.exports = {
  createTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
  getSinlgeTodo,
};
