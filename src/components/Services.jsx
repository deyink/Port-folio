import React from 'react'
import './css/Services.css'
import img1 from '../assets/web-des.png'
import img2 from '../assets/web-dev.png'
import img3 from '../assets/web-resp.png'

const Services = () => {
  return (
    <div className="services" id='Services' >
        <div className="services-container">
            <h3>SERVICES</h3>
           
            <div className="box">
            <div className="img-container">
                <img src={img1} alt="" />
                </div>
                <h4>WEB DESIGN</h4>
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit cupiditate, accusantium delectus aspernatur odit minus officiis alias ab debitis itaque. Minima debitis atque impedit maiores obcaecati aliquam libero officia.</p>

            </div>
            <div className="box">
            <div className="img-container">
                <img src={img2} alt="" />
                </div>

                <h4>WEB DEVELOPMENT</h4>
               
        
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit cupiditate, accusantium delectus aspernatur odit minus officiis alias ab debitis itaque. Minima debitis atque impedit maiores obcaecati aliquam libero officia.</p>

            </div>
            <div className="box">
            <div className="img-container">
                <img src={img3} alt="" />
                </div>
                <h4>WEB RESPONSIVENESS</h4>
              
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit cupiditate, accusantium delectus aspernatur odit minus officiis alias ab debitis itaque. Minima debitis atque impedit maiores obcaecati aliquam libero officia.</p>

            </div>
        </div>

    </div>
  )
}

export default Services