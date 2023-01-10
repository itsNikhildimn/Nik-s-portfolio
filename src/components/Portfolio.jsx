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
            <nav className="portfolio-menu">
                <ul>
                    <li className='active' data-filter='*'>All</li>
                    <li data-filter='.branding'>Branding</li>
                    <li data-filter='.web'>Web</li>
                    <li data-filter= '.print'>Print</li>
                    <li data-filter='.design'>Design</li>
                    <li data-filter = '3dwork'>3d Work</li>
                </ul>
            </nav>
            <div className="portfolio-items">
                <div className="item branding">
                <img src={img3} alt=""/>
                </div>
                <div className="item web">
                <img src={img2} alt=""/>
                </div>
                <div className="item print">
                <img src={img1} alt=""/>
                </div>
                <div className="item design">
                <img src={img1} alt=""/>
                </div>
                <div className="item 3dwork">
                <img src={img2} alt=""/>
                </div>
                <div className="item 3dwork">
                <img src={img3} alt=""/>
                </div>
                <div className="item branding">
                <img src={img3} alt=""/>
                </div>
                <div className="item web">
                <img src={img2} alt=""/>
                </div>
                <div className="item print">
                <img src={img1} alt=""/>
                </div>
                <div className="item design">
                <img src={img1} alt=""/>
                </div>
                <div className="item 3dwork">
                <img src={img2} alt=""/>
                </div>
                <div className="item 3dwork">
                <img src={img3} alt=""/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Portfolio