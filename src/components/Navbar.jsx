import React from 'react'
import "./css/Navbar.css"
import { HashLink as Links} from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'
import menu from "../assets/menuw.png"
import close from "../assets/close.png"





export default function Navbar() {
    const showSidebar= ()=>{
       const sidebar = document.querySelector (".desktop")
        sidebar.style.display= "flex"
    }

    const hideSidebar = ()=>{
        const sidebar = document.querySelector(".desktop")
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
    const showClose = ()=>{
        const close = document.querySelector(".close-btn")
        close.style.display= "block"
    }
    const hideClose = ()=>{
        const close = document.querySelector(".close-btn")
        close.style.display= "none"
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
            <ul className="desktop" >
            <BrowserRouter>
         <li className='active' > <Links to='#Home' smooth > Home </Links></li>
               <li> <Links to='#About' smooth >About</Links> </li>
               <li> <Links to='#Services' smooth >Services</Links>  </li>
                <li> <Links to='#Projects' smooth >Projects</Links>  </li>
                <li> <Links to='#Blogs' smooth >Blogs</Links>  </li>
                <li> <Links to='#Contact' smooth >Contact</Links>   </li>
                </BrowserRouter>
               
            </ul>
            <img className="close-btn" src={close} alt="" width={"21px"} height={"21px"} style={{cursor:"pointer"}} onClick={()=>{hideSidebar(); showMenu(); hideClose() }} />
           <img className="menu-btn" src={menu} alt="" width={"21px"} height={"21px"} style={{cursor:"pointer", }} onClick={()=>{showSidebar(); menuHide(); showClose()}} />

           
           {/* <div className="sidebar">
           <ul>
           <BrowserRouter>
         <li className='active' > <Links to='#Home' smooth > Home </Links></li>
               <li> <Links to='#About' smooth >About</Links> </li>
               <li> <Links to='#Services' smooth >Services</Links>  </li>
                <li> <Links to='#Projects' smooth >Projects</Links>  </li>
                <li> <Links to='#Blogs' smooth ></Links> Blogs </li>
                <li> <Links to='#Contact' smooth >Contact</Links>   </li>
                </BrowserRouter>
              
            </ul>
            
           </div> */}
        </nav>
    </div>

  )

}



