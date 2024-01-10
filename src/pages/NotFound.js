import React from 'react'
import "./NotFound.css";
import notFound from "../assets/not-found.png";

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <img className='not-found-img'  src={notFound} alt='Page Not Found Error' />
    </div>
  )
}

export default NotFound