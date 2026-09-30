import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title.trim());
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit" className="btn-primary">
        Add
      </button>
    </form>
  );
};