import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div class="tasklist">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
