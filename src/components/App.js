import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log( CATEGORIES, TASKS );

function App(){
  
const [taskLists, setTaskLists] = useState(TASKS);
const [categoryFilter, setCategoryFilter] = useState("All");

function handleCatagoryChange(category){
  setCategoryFilter(category);
}

const categoriesArray = taskLists.filter((task)=>{
  if (categoryFilter === "All"){
    return true;
} else if (task.category === categoryFilter){return true;}})

const addNewTask = (newTask)=>{
  setTaskLists([...taskLists, newTask]);
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES}  handleCatagoryChange={handleCatagoryChange} />
      <NewTaskForm categories={CATEGORIES} addNewTask={addNewTask} />
      <TaskList taskLists={taskLists} setTaskLists={setTaskLists} categoryFilter={categoryFilter} categoriesArray={categoriesArray}  /> 
    </div>
  );
}
export default App;


