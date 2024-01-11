import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className='footer'>
      <h5>© May the Code be with You - 
        <Link className="link" to='/about'>JavaScript Jedis</Link>
        </h5>
    </div>
  )
}

export default Footer