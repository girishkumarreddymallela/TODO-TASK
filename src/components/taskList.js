import React from "react";

import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../tasksSlice";
import "./todoList.css";
import DeleteLogo from "./delete.png";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (index) => {
    dispatch(toggleTask(index));
  };

  const taskDeleter = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <ul className="A17">
      {tasks.map((item, index) => {
        return (
          <li key={index} style={{ listStyle: "none" }} className="A18">
            <div className="A19">
              <div className="task-title">
                <h1 className="A20">{item.title}-</h1>
                <p className="A21">{item.task}</p>
              </div>
              <div className="task-status">
                <label htmlFor={`check${index}`} className="A22">
                  Task status
                </label>
                <input
                  type="checkbox"
                  id={`check${index}`}
                  name={`check${index}`}
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(index)}
                  className="A23"
                />
                <p style={{ display: "inline" }} className="A24">
                  {item.isChecked ? "Completed" : "Incomplete"}
                </p>
              </div>
              <br className="A25" />
              <br className="A26" />
              <div className="delete-task">
                <h2 style={{ display: "inline" }} className="A27">
                  Delete
                </h2>
                <img
                  onClick={() => taskDeleter(index)}
                  src={DeleteLogo}
                  alt="Delete"
                  height={"27px"}
                  width={"27px"}
                  className="A28"
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
