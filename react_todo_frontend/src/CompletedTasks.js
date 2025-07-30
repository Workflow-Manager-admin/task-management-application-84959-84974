/**
 * CompletedTasks - Completed to-do items screen 
 * List only completed todos
 */
import React from 'react';

// PUBLIC_INTERFACE
function CompletedTasks({ todos, onBack }) {
  return (
    <div style={{
      maxWidth: 414, margin: '0 auto', minHeight: '100vh', background: 'var(--color-ffffff)'
    }}>
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
        <span className="typo-8">Completed Tasks</span>
      </div>
      {/* Todos */}
      <div style={{ padding: 16, paddingTop: 32 }}>
        {todos.length === 0 ? (
          <div style={{ color: 'var(--color-8b8787)', textAlign: 'center', padding: 48 }}>
            No completed tasks yet.
          </div>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className="shadow-0 radius-15"
              style={{
                background: 'var(--color-d6d7ef)',
                marginBottom: 18,
                padding: 18,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: 82,
                boxSizing: 'border-box',
                opacity: 0.75,
              }}
            >
              <div style={{ flex: 1 }}>
                <div className="typo-9" style={{ textDecoration: 'line-through' }}>
                  {todo.title}
                </div>
                <div className="typo-10" style={{ color: 'var(--color-8b8787)' }}>
                  {todo.detail}
                </div>
              </div>
              <span style={{ fontSize: 32, color: 'var(--color-34c759)' }}>✓</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CompletedTasks;
