import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

export default function AllTodoList({ todo, getTodoList, HandleEdit }) {
  const HandleClick = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:4000/api/deletetodo/${id}`)
      .then((res) => {
        getTodoList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="todoList">
      <div className="todo">
        <p>{todo.title}</p>
        <div>
          <MdOutlineEdit
            className="Button"
            onClick={() => HandleEdit(todo._id)}
          />
          <AiOutlineDelete
            className="Button"
            onClick={() => HandleClick(todo._id)}
          />
        </div>
      </div>
    </div>
  );
}
