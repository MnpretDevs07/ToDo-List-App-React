import React, { useEffect, useState } from "react";
import "./TaskAdder.css";
import TaskManager from "./TaskManager";

const TaskAdder = () => {


  const InitialArr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

  const [tasks, setTasks] = useState(InitialArr);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  console.log(inputTitle, inputDescription);
  const submitHandler = (e) => {

    e.preventDefault();

    setTasks([...tasks, { inputTitle, inputDescription }])

    setInputTitle("");
    setInputDescription("");
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
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        ></textarea>

        <button type="Submit">Add</button>
      </form>
      <hr />
      <div className="DivManager">
        {tasks.map((val, index) => (
          <TaskManager
            key={index}
            Title={val.inputTitle}
            Description={val.inputDescription}
            DeleteHdl={DeleteHdl}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskAdder;
