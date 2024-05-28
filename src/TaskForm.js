import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      addTask(userInput);
      setUserInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Añadir nueva tarea..."
      />
      <button>Agregar</button>
    </form>
  );
};

export default TaskForm;