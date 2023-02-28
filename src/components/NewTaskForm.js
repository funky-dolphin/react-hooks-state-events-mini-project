import React, {useState} from "react";

function NewTaskForm({categories, addNewTask}) {

const newCategories = categories.slice(1)

const rendernewCategories= newCategories.map((category) => {
  return (
    <option key={category} name={category}>{category}</option>
  );
})

const [categoryForm, setCategoryForm] = useState("")
const [detailsForm, setDetailsForm] = useState("")

function handleInput(event) {
  setDetailsForm(event.target.value)
}


function handleCatForm(event) {
  setCategoryForm(event.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  const newTask = {
    text: detailsForm,
    category: categoryForm,
  };
  addNewTask(newTask)
}







  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleInput} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCatForm}name="category">
          {rendernewCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
