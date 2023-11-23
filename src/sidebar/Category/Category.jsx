import React from 'react'
import "./category.css";
import Input from '../../components/Input';

const Category = ({handleChange}) => {
  return (
    <div>
    <h2 className="sidebar-title">Category</h2>
    <div>
     <label htmlFor="" className="sidebar-label-container">
      <input type="radio" onChange={handleChange} value="" name="test"/>
      <span className="checkmark"></span>All
     </label>

     <Input 
     handleChange={handleChange}
     value="sneakers"
     title="Sneakers"
     name='test'
     />
     <Input 
     handleChange={handleChange}
     value="flats"
     title="Flats"
     name='test'
     />
     <Input 
     handleChange={handleChange}
     value="sandals"
     title="Sandals"
     name='test'
     />
    
     <Input 
     handleChange={handleChange}
     value="heels"
     title="heels"
     name='test'
     />
    </div>
    </div>
  )
}

export default Category
