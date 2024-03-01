import React from 'react'
import background from "../assets/Hero_img.webp"
import "./css/Home.css"


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
                <h1>I'm Yusuf Adeyinka </h1>
              <p id="content"></p>
              </div>

                <div className="container">
      <div className="writing-text">
        <span className="text">A FULLSTACK WEB DEVELOPER.</span>
      </div>
      <div className="writing-text">
        <span className="text">A WEB DESIGNER.</span>
      </div>
      <div className="writing-text">
        <span className="text">A WEB RESPONSIVENESS MASTER.</span>
      </div>
    </div>
                
         </div>
     
      </div>
    )

    
  }



