import React from 'react';
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='navbar'>
        <h2>Art Gallery </h2>
        <nav>
          <NavLink to="/" className="nav-link">Home </NavLink>
          <NavLink to="/additemform" className="nav-link">AddArt </NavLink>
          <NavLink to="/about" className="nav-link">About </NavLink>
          <NavLink to="/login" className="nav-link"> Login</NavLink>
      
        </nav>
    </div>
  )
}
