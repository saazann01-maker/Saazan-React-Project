import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navBar'>
        <h1 className= 'logo'>Saazan</h1>
        <div className= 'navBar-list'>
          <Link to="/">
            SS
          </Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/location">Location</Link>
        <Link to="/project">Project</Link>
        <Link to="/product">Product</Link>
  
        </div>
            <Link to="/login"className='login-btn'>Login
            </Link>
    
    </div>
  )
}

export default Navbar