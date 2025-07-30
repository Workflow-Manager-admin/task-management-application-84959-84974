import React, { useState, useEffect } from 'react';
import './App.css';
// Design system base import in index.css already

import TodoHome from './TodoHome';
import AddTodo from './AddTodo';
import CompletedTasks from './CompletedTasks';

// PUBLIC_INTERFACE
/**
 * Main App - Sets up routing and theme, manages which screen to display.
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [currentScreen, setCurrentScreen] = useState('home'); // home, add, completed, edit
  const [editingTodo, setEditingTodo] = useState(null); // For edit screen/data
  const [todos, setTodos] = useState([
    // Demo data initially, replace with backend/localStorage in integration.
    { id: 1, title: 'Buy groceries', detail: 'Milk, eggs, bread', completed: false },
    { id: 2, title: 'Finish project', detail: 'React Todo UI', completed: true },
  ]);
  const [filter, setFilter] = useState('all'); // all, completed, active

  // Effect to apply theme to html
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Switch screens - scaffolded as per Figma stepbar and nav
  const goToAddScreen = () => {
    setCurrentScreen('add');
  };

  const goToCompletedScreen = () => {
    setCurrentScreen('completed');
  };

  const goToHomeScreen = () => {
    setCurrentScreen('home');
    setEditingTodo(null);
  };

  // Add/Edit logic (stub, update when feature wiring is handled)
  const handleAddTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), completed: false }]);
    goToHomeScreen();
  };

  const handleEditTodo = (updatedTodo) => {
    setTodos(todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
    setEditingTodo(null);
    goToHomeScreen();
  };

  const handleStartEdit = (todo) => {
    setEditingTodo(todo);
    setCurrentScreen('add'); // Re-use AddTodo as Edit (can be made a separate EditTodo if design diverges)
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        style={{ zIndex: 1000 }}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      {currentScreen === 'home' && (
        <TodoHome
          todos={todos}
          filter={filter}
          onFilterChange={handleFilterChange}
          onAdd={goToAddScreen}
          onCompleted={goToCompletedScreen}
          onEdit={handleStartEdit}
          onDelete={handleDeleteTodo}
          onToggleComplete={handleToggleComplete}
        />
      )}
      {currentScreen === 'add' && (
        <AddTodo
          onBack={goToHomeScreen}
          onSave={editingTodo ? handleEditTodo : handleAddTodo}
          editingTodo={editingTodo}
        />
      )}
      {currentScreen === 'completed' && (
        <CompletedTasks
          todos={todos.filter(t => t.completed)}
          onBack={goToHomeScreen}
        />
      )}
    </div>
  );
}

export default App;
