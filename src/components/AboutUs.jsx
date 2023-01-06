import React from 'react';
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./AboutusStyles.css";
import Aimg from '../assets/aboutleft.jpg';
// import percentimg from '../assets/Ellipse.png';
// import percentimg1 from '../assets/Ellipse 2.png'

const AboutUs = () => {
  return (
    <div className='aboutus'>
            <section class="section">
        <div class="container">
            <div class="grid-box">
                <div class="leftContent ">
                    <img src={Aimg} alt="" />
                   
                </div>
                <div class="rightContent">
                    <h3><span>WHO AM I?</span></h3>
                    <h2>I am a Full-Stack Developer and UX/UI Designer based in India </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium fugiat nesciunt sed, quaerat quo iusto tenetur, voluptates cupiditate, facilis saepe harum labore incidunt aliquid suscipit delectus magni odit! Explicabo porro eaque officiis atque, quae odit at maxime velit? Totam, iure!
                    </p>
                    <button class="btn">Read More</button>
                    <div class="skills">
                        <div class="col">
                            {/* <img src= {percentimg} alt="image0"/> */}
                            <CircularProgressbar value={90} text={`${90}%`} /> 
                            <h6>PHOTOSHOP</h6>
                        </div>
                        <div class="col">
                        {/* <img src= {percentimg1} alt="image1"/>
                       */}
                         <CircularProgressbar value={60} text={`${60}%`} /> 
                            <h6>ILLUSTRATOR</h6>
                        </div>
                        <div class="col">
                        {/* <img src= {percentimg} alt="image2"/> */}
                        <CircularProgressbar value={50} text={`${80}%`} /> 
                            <h6>WORDPRESS</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutUs