import React from 'react'
import './Myportfolio.css'
import img1 from '../assets/gridimg1.png'
import img2 from '../assets/gridimg2.jpg'
import img3 from '../assets/gridimg3.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio'>
       
        <div class="container">
            <div class="head">
                <h3><span>PORTFOLIO</span></h3>
                <h2>Featured Work</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur voluptatem maxime, quis inventore necessitatibus provident ad doloribus iste harum.</p>
            </div>
            <nav class="worknav">
                <ul>
                    <li>All</li>
                    <li>Branding</li>
                    <li>Web</li>
                    <li>Print</li>
                    <li>Design</li>
                    <li>3d Work</li>
                </ul>
            </nav>
            <div class="grid-box">
                <img src={img3} alt=""/>
                <img src={img2} alt=""/>
                <img src={img1} alt=""/>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
            </div>
        </div>

    </div>
  )
}

export default Portfolio