import React from 'react'
import "./css/Navbar.css"
import { HashLink as Links} from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'
import menu from "../assets/menuw.png"
import close from "../assets/close.png"





export default function Navbar() {
    const showSidebar= ()=>{
       const sidebar = document.querySelector (".sidebar")
        sidebar.style.display= "flex"
    }

    const hideSidebar = ()=>{
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.display= "none"
    }

    const menuHide = ()=>{
        const menu = document.querySelector(".menu-btn")
        menu.style.display= "none"
    }
    const showMenu = ()=>{
        const menu = document.querySelector(".menu-btn")
        menu.style.display= "block"
        }

    

  return (
    <div >
        <nav>
            <BrowserRouter>
            <Links to='#Home' >
            <div className="logo">
                 Port
                <span className='title' >
                    
                Folio
                </span> 
            </div> 
            </Links>
            </BrowserRouter>
            <ul className="desktop" id='desktop' >
            <BrowserRouter>
              <li id='list' > <Links to='#Home' smooth > Home </Links></li>
              <li id='list' > <Links to='#About' smooth >About</Links> </li>
              <li id='list' > <Links to='#Services' smooth >Services</Links>  </li>
              <li id='list' > <Links to='#Projects' smooth >Projects</Links>  </li>
              <li id='list' > <Links to='#Blogs' smooth >Blogs</Links>  </li>
              <li id='list' > <Links to='#Contact' smooth >Contact</Links>   </li>
              <li id='list' > <Links to="#Testimonial" smooth> Feedback </Links> </li>
            </BrowserRouter>
               
            </ul>
           <img className="menu-btn" src={menu} alt="" width={"30px"} height={"30px"} style={{cursor:"pointer", }} onClick={()=>{showSidebar(); menuHide()}} />
           <div className="sidebar">
           <ul>
           <BrowserRouter>
               <li> <Links to='#Home' smooth > Home </Links></li>
               <li> <Links to='#About' smooth >About</Links> </li>
               <li> <Links to='#Services' smooth >Services</Links>  </li>
               <li> <Links to='#Projects' smooth >Projects</Links>  </li>
               <li> <Links to='#Blogs' smooth ></Links> Blogs </li>
               <li> <Links to='#Contact' smooth >Contact</Links>   </li>
               <li> <Links to="#Testimonial" smooth> Feedback </Links> </li>
                </BrowserRouter>
              
            </ul>
            <img className="close-btn" src={close} alt="" width={"30px"} height={"30px"} style={{cursor:"pointer"}} onClick={()=>{hideSidebar(); showMenu()}} />
           </div>
        </nav>
    </div>

  )

}



