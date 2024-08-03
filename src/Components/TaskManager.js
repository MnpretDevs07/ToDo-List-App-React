import React from "react";
import "./TaskManager.css";

const TaskManager = () => {
  return (
    <div className="Manager">
      <div>
        <p>Title</p>
        <span>Description</span>
      </div>
      <button>Remove</button>
    </div>
  );
};

export default TaskManager;
