import React, { useEffect, useState } from "react";
import "./TaskAdder.css";
import TaskManager from "./TaskManager";

const TaskAdder = () => {


  const InitialArr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

  const [tasks, setTasks] = useState(InitialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();
    setTasks([...tasks, { title, description }])
    setTitle("");
    setDescription("");
  }

  const DeleteHdl = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    })
    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])



  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter the title"
          Value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          Value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="Submit">Add</button>
      </form>
      <hr />
      <div className="DivManager">
        {tasks.map((val, index) => (
          <TaskManager
            key={index}
            Title={val.title}
            Description={val.description}
            DeleteHdl={DeleteHdl}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskAdder;
