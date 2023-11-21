import React from 'react'
import "./category.css";

const Category = () => {
  return (
    <>
    <h2 className="sidebar-title">Category</h2>
    <div>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name='test' />
        <span className="checkmark"></span>All
      </label>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name='test' />
        <span className="checkmark"></span>Sneakers
      </label>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name='test' />
        <span className="checkmark"></span>Flats
      </label>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name='test' />
        <span className="checkmark"></span>Sandals
      </label>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name='test' />
        <span className="checkmark"></span>Heels
      </label>
    </div>
    </>
  )
}

export default Category
