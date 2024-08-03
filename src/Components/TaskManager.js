import React from "react";
import "./TaskManager.css";

const TaskManager = ({Title,Description}) => {
  return (
    <div className="Manager">
      <div>
        <p>Title :- {Title}</p>
        <span>Description :- {Description}</span>
      </div>
      <button>Remove</button>
    </div>
  );
};

export default TaskManager;
