import React from "react";
import "./TaskAdder.css";
import TaskManager from "./TaskManager";

const Tasks = () => {
  return (
    <div className="container">

      <form action="">
        <input type="text" placeholder="Enter the title" />

        <textarea placeholder="Description"></textarea>

        <button type="Submit">
          Submit
        </button>

      </form>
      <hr/>
      <div className="DivManager">
      <TaskManager/>
      </div>
    </div>
  );
};

export default Tasks;
