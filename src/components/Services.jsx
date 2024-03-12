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
                
                <p>
                    Transforming visions into reality, our web design service crafts captivating online experiences tailored to your brand. With a keen eye for aesthetics and a mastery of HTML, CSS, and JavaScript, we create visually stunning and user-friendly websites that engage and inspire. Let us elevate your online presence today.

                </p>

            </div>
            <div className="box">
            <div className="img-container">
                <img src={img2} alt="" />
                </div>

                <h4>WEB DEVELOPMENT</h4>
               
        
                <p>Our web development service specializes in building dynamic and responsive websites powered by cutting-edge technologies like HTML, CSS, JavaScript, and React.js. From sleek user interfaces to seamless functionality, we leverage our expertise to deliver tailored solutions that drive engagement and elevate your digital presence.

                </p>

            </div>
            <div className="box">
            <div className="img-container">
                <img src={img3} alt="" />
                </div>
                <h4>WEB RESPONSIVENESS</h4>
              
                <p>Our web responsiveness service ensures your website looks and performs flawlessly across all devices and screen sizes. Using fluid layouts and flexible design techniques, we optimize user experience and accessibility, ensuring your content remains accessible and engaging, whether it's viewed on a desktop, tablet, or smartphone.

                </p>

            </div>
        </div>

    </div>
  )
}

export default Services