import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, {
      text: task,
      completed: false
    }]);

    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(
      tasks.filter((_, i) => i !== index)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span
              onClick={() =>
                toggleTask(index)
              }
              style={{
                cursor: "pointer",
                textDecoration:
                  item.completed
                    ? "line-through"
                    : "none"
              }}
            >
              {item.text}
            </span>

            <button
              onClick={() =>
                deleteTask(index)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
