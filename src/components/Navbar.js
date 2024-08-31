import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        TeluguFact
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};


// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import  './navbar.css';

// const Navbar = () => {
 
//   const [isActive, setIsActive] = useState(false);
//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };
//   const removeActive = () => {
//     setIsActive(false)
//   }


//   return (
//     <div className='navbar1'>
//       <div className='navbar'>
//             <ul  className={isActive ? "active":""}>
//                 <li onClick={removeActive} className='items'><Link to='/'>Home</Link></li>
//                 <li onClick={removeActive} className='items'><Link to='/about'>About</Link></li>
//                 <li onClick={removeActive} className='items'><Link to='/'>Home</Link></li>
//                 <li onClick={removeActive} className='items'><Link to='/'>Home</Link></li>
//             </ul>
//         </div>
//         <div className='navmenu' >
//             <i  onClick={toggleActiveClass} className='fas fa-bars'></i>
//       </div>
       

//     </div>
//   )
// }

export default Navbar