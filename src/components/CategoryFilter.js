import React from "react";

function CategoryFilter({categories, handleCatagoryChange}) {

  const renderCategories = categories.map((category) =>{
    return <button  onClick={()=> handleCatClick(category)} key={category} value={category}>{category}</button>
  })

  function handleCatClick(category){
    handleCatagoryChange(category)
  }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
