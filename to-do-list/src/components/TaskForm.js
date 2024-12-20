import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
