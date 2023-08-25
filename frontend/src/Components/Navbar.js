import React from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import '../Styles/style.css'

const Navbar = () => {
  
  const nRef = useRef();

  const showNavbar = () => {
    nRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
        <img className='image1' src='/images/Logo_ALPL.png' alt='' />
        <h1>Amshekh Labs Pvt Ltd</h1>
        <nav ref={nRef}>
            <a href='#'>Home</a>
            <a href='#'> Software-Products</a>
            <a href='#'> About</a>
            <a href='#'> Contact</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar