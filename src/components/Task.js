import React from "react";



function Task({ task, category, text, deleteThis}) { 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => deleteThis(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
