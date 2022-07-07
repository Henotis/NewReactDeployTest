import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {BsFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>  
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Clients</h5>
              <small>many</small>
            </article>

            <article className='about__card'>
              <BsFolderFill className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
              </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore perferendis maiores, eius ex fugiat minus, culpa autem dolore ullam quia doloribus adipisci mollitia voluptas! Architecto iure laboriosam quo animi rerum.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About