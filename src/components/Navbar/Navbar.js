import React from 'react'
import './Navbar.scss'
import logo from '../../logo.svg'
import { read } from 'fs';

export default function Navbar() {
  return (
    <React.Fragment>
    <nav className='navbar'>
      <img src={logo}alt='logo-docplanner' height='20px'/>
       <ul className="nav-links">
         <li><a href="#" className="nav-link active" >About Us</a></li>
         <li><a href="#" className="nav-link">Career</a></li>
         <li><a href="#" className="nav-link">Departements</a></li>
       </ul>
    </nav>
  
    </React.Fragment>
  )
}
