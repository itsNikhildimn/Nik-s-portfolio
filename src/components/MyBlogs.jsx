import React from 'react'
import './Myblogs.css'
import img from '../assets/gridimg2.jpg'
const Blogs = () => {
  return (
    <div className='blogs'>
        <div className="container">
         <div class="head">
            <h3><span>LEATEST BLOG</span></h3>
            <h2>Our Leatest Blogs</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eius repellat tempore facilis voluptas minima ullam modi inventore sit dolores.</p>
        </div>
        <div class="grid-box">
            <div class="column">
          
                <img src={img} alt=""/>
                <div class="text">
                    <p>june 2020</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni odit aut tempore. Aspernatur, ut officiis.</p>
                    <span>Read More</span>
                    </div>
             
            </div>
            <div class="column">
                
                <img src={img} alt=""/>
                <div class="text">
                    <p>june 2020</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni odit aut tempore. Aspernatur, ut officiis.</p>
                    <span>Read More</span>
                    </div>
                </div>
        
            <div class="column">
            
       
                <img src={img} alt=""/>
                <div class="text">
                    <p>june 2020</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni odit aut tempore. Aspernatur, ut officiis.</p>
                    <span>Read More</span>
                    </div>
               
            </div>
        </div>
        </div>
    </div>
  )
}

export default Blogs