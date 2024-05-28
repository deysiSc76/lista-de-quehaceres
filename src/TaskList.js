import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;