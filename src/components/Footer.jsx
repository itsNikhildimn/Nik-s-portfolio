import React from 'react'
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
             <div class="container">
            <div class="grid-box">
                <div class="Social">
                    <div class="logo">
                        <h1><span>.L</span>O<span>GO</span></h1>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word</p>
                    <div class="icon">
                        <h3> Follow: <ul>
                            <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaTwitter/></li>
                        <li><FaPinterest/></li>
                        <li><FaGithub/></li></ul>
                    </h3>
                    </div>
                </div>

                <div class="contactus">
                    <h3>Contact <span>Us</span></h3>
                    <hr style={{width:'30%',margin:'.2rem 0 0 0'}}/>
                    <hr style={{width:'15%', margin:'.2rem 0'}}/>
                
                    <p>	
It is a long established fact that a reader will be distracted</p>
                    <p><span>Address:</span>Mohali Phase 4, Chandigarh</p>
                    <p><span>Phone:</span>+91 82190-90574</p>
                    <p><span>Email:</span>Dhimannikhil905@gmail.com</p>
                </div>

                <div class="form">
                    <h3>Get In<span>Touch</span></h3>
                    <hr style={{width:'15%',margin:'.2rem 0 0 0'}}/>
                    <hr style={{width:'8%', margin:'.2rem 0'}}/>
                    <div class="input">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                  <textarea name="message" rows="10" placeholder="Type Message"></textarea>
                    <button class="btn">Send Message</button>
                </div>

            </div>
        </div>
        <div className="cite">
        <cite>Copyright @ 2019 Robi-pixel All Right Reserved</cite>
        </div>
    
    </div>
     
  )
}

export default Footer