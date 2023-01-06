import React from 'react';
import img1 from '../assets/laptop.png'
import img2 from '../assets/heart.png'
import img3 from '../assets/headphone.png'
import './WhatWedo.css';

const WhatWedo = () => {
  return (
   <div className="whatwedo">
    <div class="container">
        <div class="topContent">
            <h3><span>WHAT WE DO</span></h3>
            <h2>Better Services For You</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veniam expedita velit voluptatem reiciendis delectus corrupti eligendi! Facere, id facilis?</p>
        </div>
        <div class="bottomContent">
            <div class="flex-box">
                <div class="column">
                    <div className="circle">
                    <img src={img1} alt="reactimg1"/>
                    </div>
               
                    <h3>FULLY RESPONSIVE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, corrupti. Ducimus nobis voluptatum sint vel molestiae deserunt harum animi exercitationem?</p>
                </div>
                <div class="column">
                <div className="circle">
               <img src={img2} alt="reactimg2"/>
               </div>
                    <h3>UX/UI DESIGNER</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, corrupti. Ducimus nobis voluptatum sint vel molestiae deserunt harum animi exercitationem?</p>
                </div>
                <div class="column">
                <div className="circle">
              <img src={img3} alt="reactimg3"/>
              </div>
                    <h3>24/7 SUPPORT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, corrupti. Ducimus nobis voluptatum sint vel molestiae deserunt harum animi exercitationem?
                    </p>
                </div>
            </div>
            <div className="viewservice">
            <button class="btn">View Services</button>
            </div>
           
        </div>
    </div>
    </div>
  )
}

export default WhatWedo