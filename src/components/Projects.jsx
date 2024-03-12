import React from "react";
import './css/Projects.css'
import port1 from '../assets/port1.jpg'



const Projects = ()=>{


  
    return(
      <div className="portfolio" id="Projects" >
        <div className="portfolio-container">
            <h3>PORTFOLIO</h3>

            <div className="port-box" >
          
          <img src={port1} alt="" width={"100%"}
          height={"70%"} />
          {/* <h5>WEB DESIGN for______ </h5>
          <h5>DATE:</h5>
          <h5>STATUS: </h5> */}
           <button className="visit">
          <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
          </span>
          <a href="https://deyink.github.io/fab-fabrics/" target="blank" ><span className="button-text">Visit Site</span></a>
          </button>
          </div>
            
            <div className="port-box">
                <p style={{textAlign:'center', marginTop:'30%', fontWeight:'600' }}  >COMMING SOON</p>
                {/* <img src={port1} alt="" width={"100%"} height={"70%"} />  */}
                <button className="visit">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Visit Site</span>
                </button>
                
            </div>
         
        
       
            
            <div className="port-box">
                <p style={{textAlign:'center', marginTop:'30%', fontWeight:'600' }} >COMING SOON</p>
                {/* <img src={port1} alt="" width={"100%"}  height={"70%"} /> */}
                {/* <h5> FULL-STACK DEV____ </h5>
                <h5>DATE:</h5>
                <h5>STATUS: </h5> */}
                 <button className="visit">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Visit Site</span>
                </button>
            </div>

        </div>
      </div>
    )
}


export default Projects