// Main Component
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectTasks, loadTasks } from "../tasksSlice";
import TaskForm from "./taskForm";
import TaskList from "./taskList";
import "./todoList.css";

const TODOLIST = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch(loadTasks(JSON.parse(savedTasks)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") return true;
    if (filter === "Completed Tasks" && task.isChecked) return true;
    if (filter === "Incompleted Tasks" && !task.isChecked) return true;
    return false;
  });
  return (
    <div className="A0">
      <section className="A1">
        <h1 className="A2"> welcome!</h1>
        <p className="A3">
          This platform enables you to efficiently manage all your tasks,
          thereby optimizing your work process and time management.
        </p>
      </section>
      <section className="A4">
        <TaskForm />
        <div className="imgcont">
          <img
            className="midimg1"
            style={{
              width: "95%",
              height: "70%",
              marginTop: "70px",
              borderRadius: "20px",
            }}
            src=" https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="  person doing task"
          ></img>
        </div>
      </section>
      <h1 style={{ textAlign: "center" }}>Tasks List</h1>
      <div>
        <select class="custom-select" onChange={handleFilterChange}>
          <option>ALL</option>
          <option>Completed Tasks</option>
          <option>Incompleted Tasks</option>
        </select>
      </div>
      <section className="A16">
        <TaskList tasks={filteredTasks} />
      </section>
    </div>
  );
};

export default TODOLIST;
