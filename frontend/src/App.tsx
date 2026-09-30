import { useEffect, useState } from 'react';
import { TaskForm } from './TaskForm';
import type { Todo } from './types';
import './App.css';

const API_URL = 'http://localhost:5000/api/todos';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error('Error fetching todos:', err));
  }, []);

  const handleAddTask = async (title: string) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });
      const newTodo = await res.json();
      setTodos((prev) => [newTodo, ...prev]);
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  const handleToggle = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'PATCH' });
      const updatedTodo = await res.json();
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? updatedTodo : t))
      );
    } catch (err) {
      console.error('Error toggling todo:', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTodos((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm onAddTask={handleAddTask} />

      <div className="filter-group">
        {(['All', 'Active', 'Completed'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`btn-filter ${filter === status ? 'active' : ''}`}
          >
            {status}
          </button>
        ))}
      </div>

      <p className="counter">Active Tasks Remaining: {remainingCount}</p>

      {filteredTodos.length === 0 ? (
        <p className="empty-state">No tasks found.</p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo._id} className="todo-item">
              <span
                onClick={() => handleToggle(todo._id)}
                className={`todo-title ${todo.completed ? 'completed' : ''}`}
              >
                {todo.title}
              </span>
              <button
                onClick={() => handleDelete(todo._id)}
                className="btn-delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}