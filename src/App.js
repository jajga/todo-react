import React from 'react';
import logo from './logo.svg';
import TodoComponent from './components/todoComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoComponent />
      </header>
    </div>
  );
}

export default App;
