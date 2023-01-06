import React from 'react';
import './Qualifications.css'
import img1 from '../assets/be.png'
import img2 from '../assets/be1.png'

const Qualification = () => {
  return (
    <div className='qualification'>
         <div class="container">
            <div class="head">
                <h3><span>QUALIFICATION</span></h3>
                <h2>My Experience</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim facilis libero adipisci ab laboriosam, velit autem corporis sint unde!</p>
            </div>
            <div class="grid-box">
                <div class="colum">
                    <div class="flex-box">
                        <div className="box">
                <img src={img1} alt=""/>
                        </div>
                        
                       <span><p class="grey">Behancer</p>
                        <p class="darkgrey">January 2015--August 2016</p></span> 
                    </div>
                    <h4>Print & Web Designer</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus adipisci debitis alias non tempore veniam explicabo ducimus atque repellendus deleniti.</p>
                </div>
                <div class="colum">
                    <div class="flex-box">
                    <div className="box">
                        <img src={img2} alt=""/>
                        </div>
                        <span> <p class="grey">Themforest</p>
                        <p class="darkgrey">January 2015--August 2016</p></span>
                       
                    </div>
                    <h4>Dribble</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia reprehenderit nesciunt aliquam, possimus atque molestias ullam provident dicta quisquam?</p>
                </div>
                <div class="colum">
                    <div class="flex-box">
                    <div className="box">
                        <img src={img2} alt=""/>
                        </div>
                        <span> <p class="grey">Themforest</p>
                        <p class="darkgrey">January 2015--August 2016</p></span>
                    </div>
                    <h4>Themforest</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque distinctio! Asperiores numquam maiores eum eos molestias corrupti quaerat totam!</p>
                </div>
                <div class="colum">
                    <div class="flex-box">
                    <div className="box">
                        <img src={img1} alt=""/>
                        </div>
                             
                        <span><p class="grey">Behancer</p>
                        <p class="darkgrey">January 2015--August 2016</p></span> 
                    </div>
                    <h4>Behancer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis dolore, non nemo officia assumenda laudantium modi autem provident accusantium.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qualification