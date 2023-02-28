import {React} from "react";
import Task from "./Task";

function TaskList({ setTaskLists, taskLists, categoryFilter, categoriesArray}){

  function handleDelete(text){
  setTaskLists(taskLists.filter(task => task.text!== text))
}
 



    return (
    <div className="tasks">
      {categoriesArray.map((task,index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          handleDelete={handleDelete}
          />))}
    </div>
  )
}

export default TaskList;
