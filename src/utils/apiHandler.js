import axios from "axios";

const baseUrl = "http://localhost:5656";
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
      console.log(data);
      setTask("");
      setDesc("");
      setDeadline("");
      getTodoList(setTodoList);
    });
};
export { getTodoList, addTask };
