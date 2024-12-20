import axios from 'axios';

// Set your backend URL // maybe change it to localhost:5000/tasks?
const API = axios.create({ baseURL: 'https://to-do-list-backend-www0.onrender.com/tasks' });

// Fetch all tasks
export const fetchTasks = () => API.get('/');

// Add a new task
export const createTask = (task) => API.post('/', task);

// Update a task
export const updateTask = (id, updatedTask) => API.put(`/${id}`, updatedTask);

// Delete a task
export const deleteTask = (id) => API.delete(`/${id}`);
