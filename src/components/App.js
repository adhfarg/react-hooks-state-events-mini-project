import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS) 
  const categories = CATEGORIES; 
  const [filteredCategory, setFilteredCategory] = useState(null); 

  const handleDeleteTask = (deletedTask) => { 
    const filteredTasks = tasks.filter(task => deletedTask.text !== task.text); 
    setTasks(filteredTasks); 
  }

  const onTaskFormSubmit = (newTask) => { 
    setTasks([...tasks, newTask]); 
  }

  const handleCategoryFilter = (category) => { 
    setFilteredCategory(category); 
  };

  let filteredTasks;
  if (filteredCategory === "All") { 
    filteredTasks = tasks; 
  } else if (filteredCategory) { 
    filteredTasks = tasks.filter((task) => task.category === filteredCategory); 
  } else { 
    filteredTasks = tasks; 
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} handleCategoryFilter={handleCategoryFilter} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} deleteThis={handleDeleteTask} />
    </div>
  );
}

export default App;

