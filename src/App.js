import React, { useState } from "react";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Todo App</h1>
        <div className="header">
          <label>Task:</label>
          <input type="text" placeholder="Write task here" />
          <label>Description:</label>
          <input type="text" placeholder="Write description of the task" />
          <label>Date and Time:</label>
          <input type="datetime-local" />
          <div className="add">Add</div>
        </div>
      </div>
    </div>
  );
}

export default App;
