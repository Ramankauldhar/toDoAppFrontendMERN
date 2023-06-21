import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ task, desc, dateAndTime, updateMode, deleteTask }) => {
  return (
    <div className="todoData">
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteTask} />
      </div>
      <div className="task">{task}</div>
      <div className="desc">{desc}</div>
      <div className="dateAndTime">{dateAndTime}</div>
    </div>
  );
};

export default TodoList;
