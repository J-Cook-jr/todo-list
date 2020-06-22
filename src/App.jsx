
import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TaskList />
    </div>
  );
}


export default App;