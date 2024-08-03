import React from "react";
import "./TaskManager.css";

const TaskManager = (props) => {
  return (
    <div className="Manager">
      <div>
        <p>Title :- {props.title}</p>
        <span>Description :- {props.description}</span>
      </div>
      <button>Remove</button>
    </div>
  );
};

export default TaskManager;
