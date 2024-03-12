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
        <p>
          Meet <b>ADEYINKA YUSUF</b>, a dynamic frontend developer with a passion for crafting immersive digital experiences. With a robust skill set encompassing HTML, CSS, JavaScript, Git/GitHub, and React.js, I stands at the forefront of innovation in web development.
        </p>
        <p>
        Driven by a relentless pursuit of excellence,I approache every project with creativity and meticulous attention to detail. Whether it's translating design concepts into elegant code or optimizing user interfaces for seamless interaction, I thrive in the fast-paced world of frontend development.
        </p>
        <p>Equipped with a deep understanding of responsive design principles and the latest frontend technologies, I'm adept at building intuitive and visually stunning websites and web applications. From dynamic animations to complex user interfaces, I leverage the power of HTML, CSS, and JavaScript to bring ideas to life on the digital canvas.

        </p>
        <p>Beyond technical prowess, I'm a collaborative team player who thrives in agile environments. With a proactive approach to problem-solving and excellent communication skills, I excel at working closely with designers, developers, and stakeholders to deliver exceptional results. With a commitment to continuous learning and staying abreast of industry trends, I'm poised to make a lasting impact in the ever-evolving landscape of frontend development.
          </p> 
    
       
      </div>
      </div>

    </div>
    )
  }