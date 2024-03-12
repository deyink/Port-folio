import React from 'react'
import "./css/About.css"
import pic from "../assets/pic1.jpg"


export default function About() {
  return (
    <div className='about' id='About' >
      <div className="about-container">
      <div className="container-left">
        <div className="info-container">
          <div className="img">
          <img src={pic} alt="" width={"200px"} height={"150px"} />
        </div>
        <div className="info">
          <p><span>Name:</span> Yusuf Adeyinka</p>
          <p><span>Profile:</span> Full-Stack Web Developer</p>
          <p><span>Email:</span> yusufadeyinka55@gmail.com </p>
          <p><span>Phone:</span> (234) 7086503756 </p>
        </div>
        </div>
        <div className="skill-container">
          <h5>Skills</h5>
          <p>HTML 75%</p>
          <progress style={{width:"100%" }}  value={75} max={100} /> 
          <p>CSS 65%</p>
          <progress style={{width:"100%"}}  value={65} max={100} />
          <p>JavaScript 85%</p>
          <progress style={{width:"100%"}}  value={85} max={100} />
          <p>ReactJs 75%</p>
          <progress style={{width:"100%"}} value={75} max={100} />
          <p>Git/Github</p>
          <progress style={{width:'100%'}} value={90} max={100} />
          <p>NodeJs</p>
          <progress style={{width:'100%'}}  value={40} max={100} />

        </div>
        
      </div>
      <div className="container-right">
        <h3>
          About Me
        </h3>
     
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nemo dolore asperiores voluptatibus repellendus aspernatur placeat odio ea, magnam sequi quaerat, beatae voluptates officiis repudiandae porro provident accusamus aperiam modi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nemo dolore asperiores voluptatibus repellendus aspernatur placeat odio ea, magnam sequi quaerat, beatae voluptates officiis repudiandae porro provident accusamus aperiam modi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nemo dolore asperiores voluptatibus repellendus aspernatur placeat odio ea, magnam sequi quaerat, beatae voluptates officiis repudiandae porro provident accusamus aperiam modi.</p> 
    
       
      </div>
      </div>

    </div>
    )
  }