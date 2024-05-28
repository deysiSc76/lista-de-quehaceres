import React from 'react';

const Task = ({ task, toggleComplete, removeTask }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <button onClick={() => removeTask(task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;