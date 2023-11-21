import React from 'react'
import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
        <div className="nav-container">
            <input type="text" className="search-input" placeholder='Search..'/>
        </div>
        <div className="profile-container">
            <a href="/">
                <FiHeart className='nav-icons'/>
            </a>
            <a href="/" className="">
                <AiOutlineShoppingCart className='nav-icons'/>
            </a>
            <a href="/" className="">
                <AiOutlineUserAdd className='nav-icons'/>
            </a>
        </div>
    </nav>
  )
}

export default Nav
