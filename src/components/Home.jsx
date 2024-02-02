import React from 'react'
import background from "../assets/Hero_img.jpg"
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
                
         </div>
     
      </div>
    )

    
  }



