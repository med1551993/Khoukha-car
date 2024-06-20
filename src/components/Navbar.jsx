import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo/logo.png"
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";

const Navbar = () => {
    const [mobileNav, setMobileNav] =useState(false)
    
    const openNav = () =>{
        setMobileNav(!mobileNav)
    }

  return (
    <>
       {/* mobile */}
       <div className={`mobile-navbar ${mobileNav ? "open-mobile-nav" : ""}`}>
            <div className='mobile-navbar-close' onClick={openNav}>
                <IoClose size={30} />
            </div>
            <ul className='mobile-navbar-links'>
                <li>
                    <Link to="/" onClick={openNav}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={openNav}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/models" onClick={openNav}>
                        Vehicle Models
                    </Link>
                </li>
                <li>
                    <Link to="/testimonials" onClick={openNav}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="/team" onClick={openNav}>
                        Our Team
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={openNav}>
                        Contact
                    </Link>
                </li>
            </ul>
       </div>

       {/* desktop */}
       <div className='navbar'>
            <div className='navbar__img'>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                     {/*  <IoCarSport size={40} h/> */}
                      <h1>Khoukha <span>car</span></h1>
                </Link>
            </div>
            <ul className='navbar__links'>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/models">
                        Vehicle Models
                    </Link>
                </li>
                <li>
                    <Link to="/testimonials">
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="/team">
                        Our Team
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    |
                </li>
            
                <div className='navbar__buttons'>
                    <Link className='navbar__buttons__log-in' to="/">
                        Login
                    </Link>
                    <Link className='navbar__buttons__sign-up' to="/">
                        Sign up
                    </Link>
                </div>
            </ul>

            {/* mobile */}
            <div className='mobile-menu-icon' onClick={openNav}>
            <IoMdMenu size={30}/>
            </div>
       </div>
    </>
  )
}

export default Navbar