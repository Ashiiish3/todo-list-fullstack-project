import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import AllTodoList from "./AllTodoList";
export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [singleId, setSingleId] = useState(null);

  const getTodoList = () => {
    axios
      .get("http://localhost:4000/api/gettodo")
      .then((res) => setTodoList(res.data.alltodo))
      .catch((err) => console.log(err));
  };
  const createTodo = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/create", {
        title,
      });
      // setTitle(res.data.todoList.title);
      getTodoList();
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const HandleEdit = (id) => {
    axios
      .get(`http://localhost:4000/api/getsingletodo/${id}`)
      .then((res) => {
        setSingleId(id);
        setTitle(res.data.singleTodo.title);
      })
      .catch((err) => console.log(err));
  };
  const updateTodo = async (id) => {
    try {
      const res = await axios.patch(
        `http://localhost:4000/api/updatetodo/${id}`,
        {
          title,
        }
      );
      console.log(res);
      setTitle("");
      setSingleId(null);
      getTodoList();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <div className="todoBox">
      <div>
        <h1>To do List</h1>
        <div className="inputBox">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Your Task"
          />
          <FaPlus
            className="plusButton"
            onClick={() => {
              singleId ? updateTodo(singleId) : createTodo();
            }}
          />
        </div>
        {todoList.length > 0 &&
          todoList.map((todo, ind) => (
            <AllTodoList
              key={ind}
              todo={todo}
              getTodoList={getTodoList}
              HandleEdit={HandleEdit}
            />
          ))}
      </div>
    </div>
  );
}
