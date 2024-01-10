import React from 'react'
import "./About.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Jeancar from "../assets/Jeancar.jpg";
import Jonathancar from "../assets/Jonathancar.png";
import Jacksoncar from "../assets/Jacksoncar.png";
import Justincar from "../assets/Justincar.png";



const About = () => {
  return (
    <section className="about-main-container">
      <div className='about-me-container'>
      <img src={Jacksoncar} alt='Jackson' />
        <div className='about-text-container'>
          <h4>Product Manager</h4>
          <h1>Jackson Pruett</h1>
          <div className='about-divider' />
          <p>Im Jackson, a prior-service Marine with 6 years of faithful service and fabrication welder turned full-stack web developer</p>
        </div>
        <div className='about-icon-container'>
          <a href="https://www.linkedin.com/in/jacksoncpruett" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Icon" /></a>
          <a href="https://github.com/JacksonPruett"><img src={github} alt="GitHub Icon" /></a>
        </div>
      </div>

      <div className='about-me-container'>
      <img src={Jonathancar} alt='Jonathan' />
        <div className='about-text-container'>
          <h4>Design Lead</h4>
          <h1>Jonathan Raya</h1>
          <div className='about-divider' />
          <p>I'm Jonathan, an eager to learn entry-level full-stack software developer.I have a strong foundation in JavaScript, Ruby, HTML, CSS, Git, and PostgreSQL.</p>
        </div>
        <div className='about-icon-container'>
          <a href="https://www.linkedin.com/in/jonathan-raya" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Icon" /></a>
          <a href="https://github.com/JonathanRaya"><img src={github} alt="GitHub Icon" /></a>
        </div>
      </div>

      <div className='about-me-container'>
      <img src={Justincar} alt='Justin' />
        <div className='about-text-container'>
          <h4>Project Manager</h4>
          <h1>Justin Pinkard</h1>
          <div className='about-divider' />
          <p>I'm Justin, an artist turned programmer drawn to the never ending problem-solving of coding. My palette includes JavaScript, React, and Ruby on Rails allowing me to paint a story through creative design.</p>
        </div>
        <div className='about-icon-container'>
          <a href="https://www.linkedin.com/in/jdpinkard" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Icon" /></a>
          <a href="https://github.com/jdpinkard"><img src={github} alt="GitHub Icon" /></a>
        </div>
      </div>

      <div className='about-me-container'>
        <img src={Jeancar} alt='Jean' />
        <div className='about-text-container'>
          <h4>Technical Lead</h4>
          <h1>Jean Aragon</h1>
          <div className='about-divider' />
          <p>I'm Jean, a Navy vet turned software developer. My journey into coding started in HealthCare, where I saw firsthand the awesome impact of software and tech on people's lives.</p>
        </div>
        <div className='about-icon-container'>
          <a href="https://www.linkedin.com/in/jean-aragon" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Icon" /></a>
          <a href="https://github.com/AragonJ13"><img src={github} alt="GitHub Icon" /></a>
        </div>
      </div>

    </section>
  )
}

export default About
