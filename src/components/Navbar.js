import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
// import logout from '../pages/Logout'

const Navbar = ({ currentUser, logout }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate("/")
  }

  return (
    <div className='header'>

      
      <div className='logo'>
          <Link to='/'>
            <img src="https://i.postimg.cc/NFL9WV2D/newlogo-1.png" ></img>
          </Link>
      </div>

        <div className='links'>
          <ul>


            <li>
              <Link className="link" to='/about'>About Us</Link>
            </li>

           <li>
            <Link className="link" to='/carindex'>Index</Link>
          </li> 
        {currentUser && (
          <>
          <li>
            <Link className="link" to='/carnew'>Upload a project</Link> 
          </li>
           <li>
             <Link className="link" to='/' onClick={handleClick}>Logout</Link>
            </li>
          </>
            )}
          {!currentUser && (  
            <>
            <li>
              <Link className="link" to='/login'>Login</Link>
              </li>

            <li>
            <Link className="link" to='/signup'>Signup</Link>
          </li>
            </>
          )}

          </ul>
        </div>

      </div>
  )
}

export default Navbar

