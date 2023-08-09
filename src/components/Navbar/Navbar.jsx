import React, { useState } from 'react'
import "./Navbar.css"
import call from "../../images/call.png"
import cart from "../../images/cart.png"
import toggle from "../../images/toggle.png"
import xImg from "../../images/x.png"

function Navbar() {
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
  return (
    <>
    <div className="navbar">
            <a href="#">Home</a>
            <a href="#">Order</a>
            <a href="#">Food</a>
            <a href="#">Restaurant</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact Us</a>

        </div>
        <div className="navbar-icons">
        <img src={call} alt=""/>
        <img src={cart} alt=""/>
        </div>

        <div className={`toggle-icon ${open? "close" : ""} ` } >
            <img className="toggle-img" src={toggle} alt="" onClick={handleOpen}/>
        </div>


        <div className={`togglenav ${open? "open":""}`} > 
            <div > <img className="x-img" src={xImg} style={{width: "25px"}} onClick={handleClose}/></div>
            <div  className="nav-list">
                <a href="#">HOME</a>
                <a href="#">ORDER</a>
                <a href="#">FOOD</a>
                <a href="#">RESTAURANT</a>
                <a href="#">TESTIMONIALS</a>
                <a href="#" style={{marginBottom: "20px"}}>CONTACT US</a>
                <div className="toggle-cart">
                    
                    <img src={cart} alt=""/><span>CART ITEMS</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar