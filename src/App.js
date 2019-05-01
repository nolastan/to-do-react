import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To Do</h1>
      <input type="text" />
      <button>Add</button>
      <ul>
      <li>
          <label>
            <input type="checkbox" /> Fold laundry
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Walk Boo
          </label>
        </li>
      </ul>
    </div>
  );
}

export default App;
