import React, { useState,useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";
import RegisterModal from "../RegisterModal/RegisterModal";
import Cookies from 'js-cookie';
function Navbar() {
  const [userData, setUserData] = useState(null);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);
  
  const openModalRegister = () => {
    setIsModalOpenRegister(true);
  };

  const closeModalRegister = () => {
    setIsModalOpenRegister(false);
  };
  useEffect(() => {
    const getUserData = async () => {
      // const accessToken = Cookies.get('connect.sid');
      console.log("Navbar Hai")
      // console.log(accessToken);
      try {
        axios.defaults.withCredentials = true;
        let response = await axios('http://localhost:8080/login/success', {
          method: 'GET',
          withCredentials: true
        })
        console.log(response.data);
        setUserData(response.data);
        localStorage.setItem('userId', response.data.id);
        // console.log("response.data.user.id");
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    console.log("User Data Updated:", userData);
  }, [userData]);
  useEffect(() => {
    console.log("Checkimg user data:", userData);
  }, [userData]);
  const logout = async () => {
    try {
      await axios.get("http://localhost:8080/logout", {
        withCredentials: true,
      });
      setUserData(null); // Clear user data after logout
     
      window.location.href = "http://localhost:3000/login";
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

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
          {userData?(
              <>
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
                to="/topusers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Edit Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/logout"
                activeClassName="active"
                className="nav-links"
                onClick={logout}
              >
                Log Out
              </NavLink>
            </li>
            </>
           ) :(
           <>
            <li 
            exact
            className="nav-links"
            >
              Welcome Quest
            </li>
            <li  onClick={openModalRegister} className="nav-links">
           Register
      
            </li>
          
            <li onClick={logout} className="nav-item">
              <NavLink
                exact
                to="/logout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log In
              </NavLink>
            </li>
           </>
           )
           
}
          </ul>
          
          {isModalOpenRegister && <RegisterModal isModalOpenRegister={isModalOpenRegister} closeModalRegister={closeModalRegister}/>}

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