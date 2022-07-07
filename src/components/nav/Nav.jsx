import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonBadgeFill} from 'react-icons/bs'
import {MdOutlineWork} from 'react-icons/md'
import {BsHammer} from 'react-icons/bs'
import {RiMessageFill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonBadgeFill /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWork /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BsHammer /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessageFill /></a>
    </nav>
  )
}

export default Nav