import React from 'react';
import './App.css';

var items = [
  {
    id: 1,
    description: "fold laundry",
    completed: false,
  },
  {
    id: 2,
    description: "walk boo",
    completed: false,
  },
  {
    id: 3,
    description: "office hours",
    completed: false,
  }
]

function App() {
  return (
    <div className="App">
      <h1>To Do</h1>
      <input type="text" />
      <button>Add</button>
      <ul>

      {items.map((item, index) => {
        return(
          <li>
            <label>
              <input type="checkbox" /> {item.description}
            </label>
          </li>
          )
        })
      }
      
      </ul>
    </div>
  );
}

export default App;
