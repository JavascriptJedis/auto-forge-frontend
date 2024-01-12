import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import x from "../assets/closeIcon.png";
import hamburger from "../assets/menuIcon.png";

const Navbar = ({ currentUser, logout }) => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);


  const handleClick = async () => {
    logout()
    navigate("/")
  }


  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo-img" src="https://i.postimg.cc/NFL9WV2D/newlogo-1.png"></img>
        </Link>
      </div>
      <div className="links">
        <img 
          className="menu-btn"
          src={!menuOpen ? hamburger : x}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${"menuItems"} ${menuOpen && "menuOpenBox"}`} onClick={() => setMenuOpen(false)}>
          <li>
            <Link className="link" to="/carindex">
              Projects
            </Link>
          </li>
          {currentUser && (
            <>
              <li>
                <Link className="link" to="/mycarindex/">
                  My Projects
                </Link>
              </li>

              <li>
                <Link className="link" to="/carnew">
                  Upload a project
                </Link>
              </li>
              <li>
                <Link className="link" to="/" onClick={handleClick}>
                  Logout
                </Link>
              </li>
            </>
          )}
          {!currentUser && (
            <>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>

              <li>
                <Link className="link" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
