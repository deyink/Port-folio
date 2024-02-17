import React from 'react'
import { useState } from 'react'
import './css/Contact.css'
import wall from "../assets/c-background.jpg"
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import copyright from '../assets/copyright.png'
import icon from "../assets/mail.png"

const Contact = () => {
  const [name, setName]= useState("")
  const [mail, setMail]= useState("")
  const [subject, setSubject]= useState("")
  const [comment, setComment]= useState("")

  // const handleChange = (event) => {
  //   setMes(event.target.value);
  // };

  // console.log(mes);

  return (
<div className="contact" id='Contact'  style={{
    backgroundImage:  `url(${wall})`  ,   
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat" }} >

    <div className="contact-container">
        <div className="opacity"> </div>
        <div className="contact-box">
           <div className="left-contact">
           <h4> Contact Us </h4>
           <form>
           
            <input type="text" value={name} placeholder='Your Name' onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" value={mail} placeholder='Your Email' onChange={(e)=>{setMail(e.target.value)}} />
            <input type="text" value={subject} placeholder='Subject' onChange={(e)=>{setSubject(e.target.value)}} />
            <textarea name="" value={comment} placeholder='Your comment' id="" cols="30" rows="10" onChange={(e)=>{setComment(e.target.value)}} ></textarea>
           
           </form>
           <button className='send-message' ><span>Send Message</span></button>
           </div>
           <div className="right-contact">
           <h4> Get In Touch</h4>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam possimus et, soluta mollitia tempora odio magnam atque voluptates, repudiandae facilis dolores totam sint eligendi blanditiis earum maxime sit dicta.</p>
           <div className="contact-address">
            <address><img src={location} alt="" width={"18rem"} height={"23rem"} />IBADAN, OYO-STATE, NIGERIA.</address>
            <p><img src={phone} alt="" width={"18rem"} height={"23rem"} />+234 70 86503756</p>
            <p><img src={icon} alt="" width={"18rem"} height={"23rem"} />yusufadeyinka55@gmail.com</p>
           </div>
           <div className="socials">
           <img src={whatsapp} alt="" width={"30rem"} height={"30rem"} />
           <img src={facebook} alt="" width={"30rem"} height={"30rem"} />
           <img src={instagram} alt="" width={"30rem"} height={"30rem"} />
           </div>
          
           </div>
           <p style={{
            textAlign:'center',
            padding:'3rem',
            margin:'auto',
            fontSize:'.85rem'}} >
              <img src={copyright} alt="" width={"26rem"} height={"20rem"} /> Copyright <b> Yusuf Adeyinka </b> ....All Rights Reserved  </p>

         

    </div>


</div>
</div>

  )
}



export default Contact
