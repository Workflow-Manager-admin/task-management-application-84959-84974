import React from 'react';

// PUBLIC_INTERFACE
/**
 * Main To-Do List Home screen (per Figma).
 * @param {object} props Props
 */
function TodoHome({
  todos,
  filter,
  onFilterChange,
  onAdd,
  onCompleted,
  onEdit,
  onDelete,
  onToggleComplete,
}) {
  const filteredTodos = todos.filter(todo => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div style={{
      maxWidth: 414, margin: '0 auto', minHeight: '100vh', background: 'var(--color-ffffff)', position: 'relative'
    }}>
      {/* Status Bar Placeholder (mobile) */}
      <div style={{ height: 44 }} />
      {/* App Bar */}
      <div style={{
        height: 118,
        background: 'var(--color-9395d3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxSizing: 'border-box'
      }}>
        <div style={{ color: 'var(--color-ffffff)', fontWeight: 600, fontSize: 24, letterSpacing: 1 }}>TODO APP</div>
        {/* Could add icon here per Figma */}
      </div>

      {/* Filter Bar / Navbar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'var(--color-ffffff)', borderBottom: '1px solid var(--color-d6d7ef)', height: 68, padding: '0 24px'
      }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <button className={`typo-6`} style={{ border: 'none', background: 'none', cursor: 'pointer', color: filter === 'all' ? 'var(--color-9395d3)' : 'var(--color-8b8787)' }}
            onClick={() => onFilterChange('all')}
            aria-current={filter === 'all' ? 'page' : undefined}
          >All</button>
          <button className={`typo-6`} style={{ border: 'none', background: 'none', cursor: 'pointer', color: filter === 'completed' ? 'var(--color-9395d3)' : 'var(--color-8b8787)' }}
            onClick={() => onFilterChange('completed')}
            aria-current={filter === 'completed' ? 'page' : undefined}
          >Completed</button>
          <button className={`typo-6`} style={{ border: 'none', background: 'none', cursor: 'pointer', color: filter === 'active' ? 'var(--color-9395d3)' : 'var(--color-8b8787)' }}
            onClick={() => onFilterChange('active')}
            aria-current={filter === 'active' ? 'page' : undefined}
          >Active</button>
        </div>
        <button
          className="typo-9"
          style={{
            border: 'none',
            background: 'none',
            color: 'var(--color-9395d3)',
            cursor: 'pointer'
          }}
          onClick={onCompleted}
          aria-label="View completed tasks"
        >
          ✓ Completed
        </button>
      </div>

      {/* Todos List */}
      <div style={{ padding: 16, paddingTop: 32 }}>
        {filteredTodos.length === 0 && (
          <div style={{ color: 'var(--color-8b8787)', textAlign: 'center', padding: 48 }}>
            No todos found.
          </div>
        )}
        {filteredTodos.map(todo => (
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
              boxSizing: 'border-box'
            }}
          >
            <div style={{ flex: 1 }}>
              <div className="typo-9" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </div>
              <div className="typo-10" style={{ color: 'var(--color-8b8787)' }}>
                {todo.detail}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <button
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                onClick={() => onToggleComplete(todo.id)}
                title="Toggle Complete"
              >{todo.completed ? '✅' : '⬜'}</button>
              <button
                style={{ background: 'none', border: 'none', color: 'var(--color-9395d3)', cursor: 'pointer' }}
                aria-label="Edit"
                onClick={() => onEdit(todo)}
                title="Edit"
              >✏️</button>
              <button
                style={{ background: 'none', border: 'none', color: 'var(--color-8b8787)', cursor: 'pointer' }}
                aria-label="Delete"
                onClick={() => onDelete(todo.id)}
                title="Delete"
              >🗑️</button>
            </div>
          </div>
        ))}
      </div>
      {/* Add New Todo Floating Button (per Figma) */}
      <button
        onClick={onAdd}
        className="shadow-0"
        style={{
          position: 'fixed',
          right: 34,
          bottom: 34,
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: 'var(--color-9395d3)',
          color: '#fff',
          fontSize: 44,
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
        }}
        aria-label="Add new task"
      >
        +
      </button>
    </div>
  );
}

export default TodoHome;
