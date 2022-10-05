import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function TodoApp() {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState(["clean car"]);

  function handleChange(e) {
    setTextInput(e.target.value);
  }

  function handleAddTask() {
    setTasks([...tasks, textInput]);
  }

  function handleDone(taskIndex) {
    setTasks(tasks.filter((value, index) => index !== taskIndex));
  }

  return (
    <>
      <h1>To Do</h1>
      <input onChange={handleChange} type="text" value={textInput} />
      <button onClick={handleAddTask}>Add</button>
      {tasks ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <button onClick={() => handleDone(index)}>Done</button>
              {task}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
