import React from "react";
import "./TaskManager.css";

const TaskManager = ({Title,Description,DeleteHdl,index}) => {
  return (
    <div className="Manager">
      <div>
        <p>Title :- {Title}</p>
        <span>Description :- {Description}</span>
      </div>
      <button onClick={()=> DeleteHdl(index)}>Remove</button>
    </div>
  );
};

export default TaskManager;
