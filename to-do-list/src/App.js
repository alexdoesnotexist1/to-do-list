import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };
    getTasks();
  }, []);

  const handleAddTask = async (task) => {
    const { data } = await createTask(task);
    setTasks([...tasks, data]);
  };

  const handleUpdateTask = async (id, updatedTask) => {
    const { data } = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task._id === id ? data : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
    </div>
  );
};

export default App;
