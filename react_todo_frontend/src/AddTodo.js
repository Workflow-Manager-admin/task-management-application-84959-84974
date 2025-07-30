/**
 * AddTodo - Add/Edit task screen
 * Scaffold from Figma, accepts editing mode.
 */
import React, { useState, useEffect } from 'react';

// PUBLIC_INTERFACE
function AddTodo({ onBack, onSave, editingTodo }) {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDetail(editingTodo.detail);
    }
  }, [editingTodo]);

  const handleSave = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodo = {
      id: editingTodo?.id || undefined,
      title: title.trim(),
      detail: detail.trim(),
      completed: editingTodo?.completed || false,
    };
    onSave(newTodo);
  };

  return (
    <div style={{
      maxWidth: 414, margin: '0 auto', minHeight: '100vh',
      background: 'var(--color-ffffff)', position: 'relative'
    }}>
      {/* Status Bar placeholder */}
      <div style={{ height: 44 }} />
      {/* AppBar */}
      <div style={{
        height: 118,
        background: 'var(--color-9395d3)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        boxSizing: 'border-box',
        color: 'var(--color-ffffff)'
      }}>
        <button
          aria-label="Back"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-ffffff)',
            fontSize: 24,
            marginRight: 12,
            cursor: 'pointer'
          }}
          onClick={onBack}
        >←</button>
        <span className="typo-8">{editingTodo ? "Edit Task" : "Add Task"}</span>
      </div>
      {/* Input fields */}
      <form onSubmit={handleSave} style={{
        padding: 32, paddingTop: 48, display: 'flex',
        flexDirection: 'column', gap: 28
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label htmlFor="todo-title" className="typo-11" style={{ color: 'var(--color-8b8787)' }}>Title</label>
          <input
            className="typo-9"
            id="todo-title"
            type="text"
            placeholder="Enter your task title"
            value={title}
            autoFocus
            onChange={e => setTitle(e.target.value)}
            style={{
              fontSize: 18, padding: '8px 12px',
              border: '1px solid var(--color-d6d7ef)',
              borderRadius: 12,
              outline: 'none',
              background: 'var(--color-ebebf5)'
            }}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label htmlFor="todo-detail" className="typo-11" style={{ color: 'var(--color-8b8787)' }}>Detail</label>
          <textarea
            className="typo-10"
            id="todo-detail"
            placeholder="Enter details (optional)"
            value={detail}
            rows={2}
            onChange={e => setDetail(e.target.value)}
            style={{
              fontSize: 16, padding: '8px 12px', resize: 'none',
              border: '1px solid var(--color-d6d7ef)', borderRadius: 12, outline: 'none',
              background: 'var(--color-ebebf5)'
            }}
          />
        </div>
        <button
          type="submit"
          className="shadow-0"
          style={{
            width: '100%', height: 56,
            background: 'var(--color-9395d3)',
            border: 'none',
            color: 'var(--color-ffffff)',
            fontWeight: 600,
            fontSize: 22,
            borderRadius: 15,
            marginTop: 16,
            cursor: title.trim() ? 'pointer' : 'not-allowed',
          }}
          disabled={!title.trim()}
        >
          {editingTodo ? "Save" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
