import axios from "axios";

const baseUrl = "https://todoappbackend-hlgr.onrender.com";
const getTodoList = (setTodoList) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("Data fetched successfully!", data);
    setTodoList(data);
  });
};

const addTask = (
  task,
  desc,
  dateAndTime,
  setTask,
  setDesc,
  setDeadline,
  setTodoList
) => {
  axios
    .post(`${baseUrl}/saveTask`, { task, desc, dateAndTime })
    .then((data) => {
      setTask("");
      setDesc("");
      setDeadline("");
      getTodoList(setTodoList);
    })
    .catch((err) => console.log(err));
};

const updateTask = (
  taskId,
  task,
  desc,
  dateAndTime,
  setTodoList,
  setTask,
  setDesc,
  setDeadline,
  setUpdating
) => {
  axios
    .post(`${baseUrl}/updateTask`, { _id: taskId, task, desc, dateAndTime })
    .then((data) => {
      setTask("");
      setDesc("");
      setDeadline("");
      setUpdating(false);
      getTodoList(setTodoList);
    })
    .catch((err) => console.log(err));
};
const deleteTask = (_id, setTodoList) => {
  axios
    .post(`${baseUrl}/deleteTask`, { _id })
    .then((data) => {
      getTodoList(setTodoList);
    })
    .catch((err) => console.log(err));
};
export { getTodoList, addTask, updateTask, deleteTask };
