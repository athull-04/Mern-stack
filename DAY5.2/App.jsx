import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (task.trim() === '') {
      setError('Please enter a valid task.');
    } else {
      setTasks([...tasks, task]);
      setTask('');
      setError('');
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <div className="input-container">
        <input
          className="task-input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{task}</span>
            <button
              className="remove-btn"
              onClick={() => handleRemoveTask(task)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
