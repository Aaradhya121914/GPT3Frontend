import React, { useState } from 'react'
import "./Navbar.css"
import {RiMenu3Line , RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"

const Navbar = () => {
    const [toggleMenu,setToggleMenu]=useState(false)
  return (
    <div className='GPT3_Navbar'>
     <div className='GPT3_Navbar-Links'>
         <div className="GPT3_Navbar-Links_logo">
           <img src={logo} alt="logo"/>
         </div>
         <div className="GPT3_Navbar-Links_container">
          
           <p><a href="#home">Home</a></p>
           <p><a href="#wgpt3">What is GPT3?</a></p>
           <p><a href="#possibility">Open AI</a></p>
           <p><a href="#features">Case Studies</a></p>
           <p><a href="#blog">Library</a></p>
         </div>
     </div>
     <div className="GPT3_Navbar-Sign">
       <p>Sign in</p>
       <button type='button'>Sign up</button> 
     </div>
     <div className="GPT3_Navbar-Menu">
        {toggleMenu?<RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>:<RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>}
        {
            toggleMenu&&(
                <div className="GPT3_Navbar-Menu_Container scale-up-center ">
                   <div className="GPT3_Navbar-Menu_Container_Links">
                   <p><a href="#home">Home</a></p>
                   <p><a href="#wgpt3">What is GPT3?</a></p>
                   <p><a href="#possibility">Open AI</a></p>
                   <p><a href="#features">Case Studies</a></p>
                   <p><a href="#blog">Library</a></p>
                    </div>
                    <div className="GPT3_Navbar-Menu_Container_Links-Sign">
                        <p>Sign in</p>
                        <button type='button'>Sign up</button> 
                    </div>  
                </div>
            )
        }
     </div>
    </div>
  )
}

export default Navbar
