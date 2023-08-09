import React from 'react'
import "./Order.css"
import img1 from "../../images/img4.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"

function Order() {
  return (
    <div className="order">
            <h1>Order Now</h1> 
            <div className="cards">
                <div className="card">
                    <img src={img1} alt="" />
                    <h5>BURGER</h5>
                    <p>Lorem Ipsum has been the <br/> industry's standard dummy text</p>
                </div>
                <div className="card">
                    <img src={img2} alt="" />
                    <h5>PIZZA</h5>
                    <p>Lorem Ipsum has been the <br/> industry's standard dummy text</p>
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                    <h5>PASTA</h5>
                    <p>Lorem Ipsum has been the <br /> industry's standard dummy text</p>
                </div>
            </div>
            <button>Order</button>
        </div>
  )
}

export default Order