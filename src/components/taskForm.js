import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import "./todoList.css";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [enter, setEnter] = useState("");
  const dispatch = useDispatch();

  const taskHandler = () => {
    if (title && task) {
      dispatch(addTask({ title, task }));
      setTitle("");
      setTask("");
    } else {
      setEnter("Please fill all the fields");
      setTimeout(() => {
        setEnter("");
      }, 2000);
    }
  };

  return (
    <div className="A5" style={{ textAlign: "center" }}>
      <h1 className="A6">TODO LIST</h1>
      <div className="A7">
        <label htmlFor="title" className="A8">
          TITLE
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="A9"
        />
        <br className="A10" />
        <label htmlFor="task" className="A11">
          TASK
        </label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="A12"
        />
        <br className="A13" />
        <button onClick={taskHandler} className="A14">
          ADD
        </button>
        <p className="A15">{enter}</p>
      </div>
    </div>
  );
};

export default TaskForm;
