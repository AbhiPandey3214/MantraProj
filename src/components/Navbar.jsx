import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="brand">
        
        <a href="/">Swaminarayan Mantralekhan</a>
      </div>
      <div className="spacer"></div>
      <p className='para'>Jai Swaminarayan,A,P</p>
      <div className="links">
       
        <a href="/topusers">Top Users</a>
        <a href="/mantralekhan">Mantralekhan</a>
        <a href="/performance">My Performance</a>
        <a href="/editprofile">Edit Profile</a>
        <a href="/logout">Log Out</a>
      </div>
    </nav>
  );
};

export default Navbar;
