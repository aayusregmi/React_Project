import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewtodo] = useState([""]);
  const [isDone, setIsDone] = useState(false);

  const handleEnter = (event) => {
    event.preventDefault();
    setTodos([...todos, { task: newTodo, key: uuidv4() }]);
    setNewtodo("");
  };

  const handleNewtodo = (e) => {
    setNewtodo(e.target.value);
  };

  const handleDlt = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.key != id));
  };

  const handleUppercase = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
  };

  const handleMarkAsDone = (id) => {
    todos.map((todo) => {
      if (todo.key == id) {
        if (isDone == false) {
          setIsDone(true);
        } else {
          setIsDone(false);
        }
      }
    })
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center text-white">
      <div className="bg-gray-600 w-1/2 h-40">
        <div className="inputSection px-4">
          <form>
            <input
              value={newTodo}
              type="text"
              placeholder="Enter Your Task"
              className="inputText outline-0"
              onChange={handleNewtodo}
            />
            <button
              type="submit"
              className="bg-green-500 rounded-xl w-20 ml-3 p-1"
              onClick={handleEnter}
            >
              Enter
            </button>
          </form>
        </div>
        <div className="px-7 flex flex-col">
          {" "}
          {todos.map((todo) => (
            <li
              style={{
                textDecoration: isDone ? "line-through" : "none",
              }}
              key={todo.key}
            >
              {todo.task || todo}
              <button
                value={todo.key}
                className={`btnDlt ml-4 bg-blue-400 rounded-xl text-sm px-1`}
                onClick={() => handleDlt(todo.key)}
              >
                Delete
              </button>
              <button
                value={todo.key}
                className="btnDlt ml-4 bg-blue-400 rounded-xl text-sm px-1"
                onClick={() => handleMarkAsDone(todo.key)}
              >
                Mark As Done
              </button>
            </li>
          ))}
        </div>
      </div>
      <button
        className="bg-orange-500 rounded-2xl px-4 ml-4"
        onClick={handleUppercase}
      >
        UpperCase Todo's
      </button>
    </div>
  );
};

export default Todolist;
