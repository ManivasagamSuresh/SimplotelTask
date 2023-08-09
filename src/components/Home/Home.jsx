import React from 'react'
import "./Home.css"
import bg from "../../images/img1.jpg"

function Home() {
  return (
    <div className="Home">
            <img src={bg} alt=""/>
            <div className="Home-content">
                <h1>LOREM IPSUM</h1>
                <p>Lorem Ipsum has been the industry's standard dummy <br/>
                    text ever since the 1500s, when an unknown printer took<br/>
                     a galley of type and scrambled it to make a type<br/>
                      specimen book.</p>
            </div>
        </div>
  )
}

export default Home