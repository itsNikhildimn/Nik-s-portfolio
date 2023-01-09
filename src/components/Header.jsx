import React from 'react'
import { useState } from 'react';
import './NavBarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import headimg from '../assets/headimg.avif';
import "./HeaderStyles.css";
const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
  return (
    
    <div className='header'>
        <div className="container">
        <div class="navbar">
            
                <div className="nav">
                    <div class="logo">
                        <h1><span>.L</span>O<span>GO</span></h1>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><button class="btn">Contact Us</button></li>
                    </ul>

                    <div className="hamburger" onClick={handleClick}>
                       
                        {click ? (
                            <FaTimes size={20} style={{ color: "#fff" }} />
                        ) : (
                            <FaBars size={20} style={{ color: "#fff" }} />
                        )}
                    </div>
                
            </div>
        </div>
         <div class="content">
    <div className="left">
        <h5>Hello!</h5>
        <h1>I am<span> Nikhil Dhiman </span>Creative UI/UX Designer</h1>
        <ol>
            <li>UI/UX Design</li>
            <li>Product Design</li>
            <li>Web Design</li>
            <li>Front-End Design</li>
        </ol>
        <div class="buttons">
            <button class="btn"> Read More</button>
            <button class="btn-light">Contact Us</button>
        </div>
    </div>
    <div className="right">
        <img src={headimg} alt="" />
    </div>
    </div>
</div></div>
  )
}

export default Header