import React from 'react'
import homeLogo from '../assets/homepageimageupdated.png'
import "./Home.css"


const Home = () => {
  return (
    <div className='home-container'> 
    <img className='home-img' src={homeLogo} alt='home logo image' /> 
      </div>
  )
}

export default Home