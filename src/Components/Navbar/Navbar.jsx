import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className="logo"/>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#"><button className='btn-nav'>Contact Us</button></a></li>
        </ul>
    </nav>
  )
}

export default Navbar