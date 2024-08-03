import React, { useState } from "react";
import "./TaskAdder.css";
import TaskManager from "./TaskManager";

const TaskAdder = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log(title, description);

  const submitHandler = (e) => {

    e.preventDefault();
  
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle = (e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription = (e.target.value)}
        ></textarea>

        <button type="Submit">Submit</button>
      </form>
      <hr />
      <div className="DivManager">
        {tasks.map((val, index) => (
          <TaskManager key={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskAdder;
