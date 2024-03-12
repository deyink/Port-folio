import React from 'react'
import background from "../assets/Hero_img.jpg"
import "./css/Home.css"


export default function Home() {


    // var displayContent =  ()=>{
    //   const pElement = document.getElementById('content')

    //   var index = 0

    //   const updatecontent = ()=>{
    //     pElement.textContent = contentArray[index]

    //   index = (index  + 1) % contentArray.length
    //     setTimeout(updatecontent, 2000);
    //   }
    //   updatecontent(); 
    // } 

    // window.onload = displayContent();
    

  // const displayContent = ()=>{
  //     const pElement = document.getElementById("content").innerHTML

  //     let index = 0

  //    const interval = setInterval(()=>{
  //       if( index < contentArray.length ){
  //         pElement.textContent  = contentArray[index];
            
  //           index++ 
            
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 2000 );
  //   }
  //  window.onload= displayContent();

  // const displayContent = ()=>{
  //   const pElement = document.getElementById('content')

  //   var index = 0

  //   const updateContent = ()=>{
  //     pElement.textContent = contentArray[index]

  //     index = (index +1 ) % contentArray;

  //     updateContent()

  //     const interval = setInterval(updateContent, 2000);
  //   }
  // }
  // window.onload = displayContent()

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
              <h4>A Frontend web Developer</h4>
              <h4>A Web Designer</h4>
              
              </div>
                
         </div>
     
      </div>
    )

    
  }



