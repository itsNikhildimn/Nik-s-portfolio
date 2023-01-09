import "./Testimonials.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import qimg from "../assets/q.png";
import aimg from '../assets/download.png'
const Testimonials = () => {
    return (
        <div className="testimonials">
            <div class="container">
                <div class="head">
                    <h3>
                        <span>TESTIMONIAL</span>
                    </h3>
                    <h2>What Client Says?</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                        repudiandae ipsa reiciendis inventore numquam et, ab ut eligendi
                        esse laborum.
                    </p>
                </div>
                <div class="testimonial">
                        <div class="container-fluid">
                            <OwlCarousel items={1} className="owl-theme" loop nav margin={8}>
                                <div className="item">
                                <img className="qimg" src={qimg} alt="" />
                                        <p> 
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cum rem fuga placeat ratione autem neque reprehenderit
                                            sint minus perferendis maxime dicta odit itaque soluta
                                            cumque, consequatur distinctio adipisci ipsum fugiat
                                            explicabo consectetur provident ex, assumenda accusamus
                                            saepe. Obcaecati, omnis asperiores.
                                        </p>
                                        <div class="about">
                                          <img className="aimg" src={aimg} alt="" />
                                            <div class="name">
                                                <h4>Saytan Poola</h4>
                                                <p>Graphic Designer</p>
                                            </div>
                                        </div>
                                  
                                </div>
                                <div className="item">
                                <img className="qimg" src={qimg} alt="" />
                                        <p> 
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cum rem fuga placeat ratione autem neque reprehenderit
                                            sint minus perferendis maxime dicta odit itaque soluta
                                            cumque, consequatur distinctio adipisci ipsum fugiat
                                            explicabo consectetur provident ex, assumenda accusamus
                                            saepe. Obcaecati, omnis asperiores.
                                        </p>
                                        <div class="about">
                                          <img className="aimg" src={aimg} alt="" />
                                            <div class="name">
                                                <h4>Saytan Poola</h4>
                                                <p>Graphic Designer</p>
                                            </div>
                                        </div>
                                  
                                </div>
                                <div className="item">
                                <img className="qimg" src={qimg} alt="" />
                                        <p> 
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Cum rem fuga placeat ratione autem neque reprehenderit
                                            sint minus perferendis maxime dicta odit itaque soluta
                                            cumque, consequatur distinctio adipisci ipsum fugiat
                                            explicabo consectetur provident ex, assumenda accusamus
                                            saepe. Obcaecati, omnis asperiores.
                                        </p>
                                        <div class="about">
                                          <img className="aimg" src={aimg} alt="" />
                                            <div class="name">
                                                <h4>Saytan Poola</h4>
                                                <p>Graphic Designer</p>
                                            </div>
                                        </div>
                                  
                                </div>
                                
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Testimonials;
