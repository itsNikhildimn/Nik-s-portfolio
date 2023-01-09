import React from 'react'
import './FactsAboutme.css';
import img1 from '../assets/L0001.png'
import img2 from '../assets/L0003.png'
import img3 from '../assets/L0002.png'

const FactsAboutme = () => {
    return (
        <div className='FactsAboutme'>
            <div class="container">
                <div class="flex-box">
                    <div class="contentLeft">
                        <h2>Funfacts About me</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, laborum! </p>
                    </div>
                    <div class="contentRight">
                        <div class="facts">
                            <h1>  <img src={img1} alt="reactinmg1" /><span>510+</span></h1>
                            <p>Cup of tea</p>
                        </div>
                        <div class="facts">
                            <h1><img src={img2} alt="reactimg2" /><span>80+</span></h1>
                            <p>Happy Clients</p>
                        </div>
                        <div class="facts">
                            <h1> <img src={img3} alt="reactimg3" /><span>270+</span></h1>
                            <p>Project Completed</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FactsAboutme