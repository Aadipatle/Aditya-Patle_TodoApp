import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask, addTask, updateTask } from '../app/taskSlice';
import './Dashboard.css';

const Dashboard = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ name: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!form.name || !form.description) return;
    dispatch(addTask(form));
    setForm({ name: '', description: '' });
  };

  const handleStatusToggle = (task) => {
    const newStatus = task.status === 'DONE' ? 'PENDING' : 'DONE';
    dispatch(updateTask({ id: task._id, updates: { status: newStatus } }));
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((task) =>
      statusFilter ? task.status === statusFilter : true
    )
    .filter((task) =>
      dateFilter ? new Date(task.createdAt).toISOString().split('T')[0] === dateFilter : true
    );

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, dateFilter]);

  return (
    <div className="dashboard-container">
      <h1 className="page-title">To Do List</h1>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by task name..."
          className="input-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="input-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Filter by status</option>
          <option value="PENDING">PENDING</option>
          <option value="DONE">DONE</option>
        </select>
        <input
          type="date"
          className="input-date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>

      <form onSubmit={handleAddTask} className="task-form">
        <input
          className="input-task-name"
          type="text"
          placeholder="Task Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          className="input-task-description"
          placeholder="Task Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button type="submit" className="btn-submit">Add Task</button>
      </form>

      {currentTasks.map((task) => (
        <div key={task._id} className="task-card">
          <h2 className="task-name">Name: {task.name}</h2>
          <p className="task-description">Description: {task.description}</p>
          <p className="task-status">Status: <strong>{task.status}</strong></p>
          <p className="task-date">Created At: {new Date(task.createdAt).toLocaleDateString()}</p>
          <div className="task-actions">
            <button
              className={task.status === "DONE" ? "btn-status-text" : "btn-status-toggle"}
              onClick={task.status !== "DONE" ? () => handleStatusToggle(task) : null}
              disabled={task.status === "DONE"}
            >
              {task.status === "DONE" ? "Task is DONE" : "Mark as DONE"}
            </button>
            <button
              className="btn-delete"
              onClick={() => dispatch(deleteTask(task._id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
