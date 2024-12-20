import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    onUpdate(task._id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div class="task">
      {isEditing ? (
        <div class="task-edit">
          <input
            type="text"
            value={updatedTask.name}
            onChange={(e) => setUpdatedTask({ ...updatedTask, name: e.target.value })}
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          />
          <label>
            <input
              type="checkbox"
              checked={updatedTask.completed}
              onChange={(e) => setUpdatedTask({ ...updatedTask, completed: e.target.checked })}
            />
            Completed
          </label>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div class="task-show">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Completed: {task.completed ? 'Yes ✅' : 'No ❌'}</p>
        </div>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
