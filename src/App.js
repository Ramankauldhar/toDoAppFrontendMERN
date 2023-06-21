import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { getTodoList, addTask, updateTask } from "./utils/apiHandler";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [dateAndTime, setDeadline] = useState("");

  const [isUpdating, setUpdating] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    getTodoList(setTodoList);
  }, []);

  const updateMode = (_id, task, desc, dateAndTime) => {
    setUpdating(true);
    setTask(task);
    setDesc(desc);
    setDeadline(dateAndTime);
    setTaskId(_id);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>Todo App</h1>
          <label>Task:</label>
          <br />
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Write task here"
          />
          <br />
          <label>Description:</label>
          <br />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Write description of the task"
          />
          <br />
          <label>Deadline:</label>
          <br />
          <input
            type="datetime-local"
            value={dateAndTime}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <br />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTask(
                      taskId,
                      task,
                      desc,
                      dateAndTime,
                      setTodoList,
                      setTask,
                      setDesc,
                      setDeadline,
                      setUpdating
                    )
                : () =>
                    addTask(
                      task,
                      desc,
                      dateAndTime,
                      setTask,
                      setDesc,
                      setDeadline,
                      setTodoList
                    )
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <br />
        <hr />
        <hr />
        <div>
          <h2>Todo List</h2>
          <div className="list">
            {todoList.map((item, index) => (
              <div className="item-wrapper">
                <TodoList
                  key={item._id}
                  task={"Task: " + item.task}
                  desc={"Description: " + item.desc}
                  dateAndTime={"Deadline: " + item.dateAndTime}
                  updateMode={() =>
                    updateMode(item._id, item.task, item.desc, item.dateAndTime)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
