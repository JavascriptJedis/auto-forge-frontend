import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className='footer'>
      <h5> 
        <Link className="flink" to='/about'>JavaScript Jedis © 2024 </Link>
      </h5>
    </div>
  )
}

export default Footer