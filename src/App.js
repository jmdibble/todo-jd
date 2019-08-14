import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ToDoApp from './components/ToDoApp';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ToDoApp />
    </div>
  );
}

export default App;
