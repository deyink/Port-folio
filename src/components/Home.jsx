import React from 'react'
import background from "../assets/Hero_img.jpg"
import "./css/Home.css"
import { HashLink as Links } from 'react-router-hash-link'


export default function Home() {

    return (
      <div>
         <div className="hero-container" id='Home'
         style= {{
          height: "95vh",
          width: "100%",
          backgroundImage: `url(${background})` ,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
               }}>
              <div className="hero-name">
                <h1>  I 'm  Yusuf Adeyinka </h1>
                <div className="ido">
                <h4>  A Frontend web Developer</h4>
              <h4>A programmer</h4>
              <h4>A Web Designer</h4>
              <Links to='#Contact' smooth > <button className='hero-btn1' >  CONTACT ME </button> </Links>
              <Links to='#Projects' smooth >  <button className='hero-btn2' >CHECK PROJECTS </button>  </Links>
              
                </div>
           
              </div>
                
         </div>
     
      </div>
    )

    
  }



