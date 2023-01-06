import React from 'react'
import headimg from '../assets/headimg.avif';
import './NavBarStyles.css';
const NavBar = () => {
    return (
        <header class="header">
            <div class="container">
                <nav>
                    <div class="logo">
                        <h1><span>.L</span>O<span>GO</span></h1>
                    </div>

                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><button class="btn">Contact Us</button></li>
                    </ul>
                </nav>


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
            </div>
        </header>

    )
}

export default NavBar