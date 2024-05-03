import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span className="mb-4">Swaminarayan Mantralekhan</span>
           
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li 
            exact
            className="nav-item"
            >
              Jay Swaminarayan, A P 
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/topusers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Top Users
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/mantrapage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Mantralekhan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/myperformance"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My Performance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log Out
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                 <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
               
                <HamburgetMenuOpen />{" "}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar