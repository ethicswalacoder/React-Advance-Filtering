import React from 'react'
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import CartLogo from "../assets/images/cart.gif";
import"./sidebar.css";

const Sidebar = ({handleChange}) => {

  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
           <img src={CartLogo} alt="cart logo" className="cart-logo" />
           <h1>ShoeCart</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar
