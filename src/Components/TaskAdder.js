import React from "react";
import "./TaskAdder.css";

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
    </div>
  );
};

export default Tasks;
