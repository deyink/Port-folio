import React, {Component} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Testimonials.css"
import port2 from "../assets/port2.jpg"
import testimonial from "../assets/testimonial-1.jpg"



export const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
      };
    
  return (
    <div className='testimonials' style={{
        backgroundImage: `url(${port2})`,   
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat", }}>
        <div className="testimonial-container">
            <div className="opacity"></div>
            <div className="slider">
            <Slider {...settings}>
          <div >
            <img src={testimonial} alt="" />
            <h3>Mr Chekram</h3> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi id quidem nemo consequuntur exercitationem accusantium similique nihil, quam sunt at facere, expedita deserunt iure, placeat assumenda tempore. Facere, delectus.</p>
          </div>
          <div >
            <img src={testimonial} alt="" />
            <h3>Mr Chekram</h3> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi id quidem nemo consequuntur exercitationem accusantium similique nihil, quam sunt at facere, expedita deserunt iure, placeat assumenda tempore. Facere, delectus.</p>
          </div>
          <div >
            <img src={testimonial} alt="" />
            <h3>Mr Chekram</h3> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi id quidem nemo consequuntur exercitationem accusantium similique nihil, quam sunt at facere, expedita deserunt iure, placeat assumenda tempore. Facere, delectus.</p>
          </div>
      
       
        </Slider>
            </div>


        </div>
    </div>
  )
}

