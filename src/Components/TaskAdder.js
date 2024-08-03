import React, { useState } from "react";
import "./TaskAdder.css";
import TaskManager from "./TaskManager";

const TaskAdder = () => {
  const [task, setTask] = useState([]);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  return (
    <div className="container">
      <form action="">
        <input type="text" placeholder="Enter the title" />

        <textarea placeholder="Description"></textarea>

        <button type="Submit">Submit</button>
      </form>
      <hr />
      <div className="DivManager">
        {task.map(() => {
          <TaskManager title="Title" description="Description" />;
        })}
      </div>
    </div>
  );
};

export default TaskAdder;
