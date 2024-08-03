import React, { useState } from "react";
import "./TaskAdder.css";
import TaskManager from "./TaskManager";


const initialArr = localStorage.getItems("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

const TaskAdder = () => {
  const [tasks, setTasks] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();

    setTasks([...tasks, { title, description }])
  }

  const DeleteHdl = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    })
    setTasks(filteredArr);
  };


  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter the title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          defaultValue={description}
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
