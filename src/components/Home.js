import React from 'react'
import {Link} from "react-router-dom";
import gg from "../assets/gg.jpeg";
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${gg})`}}>
      <div className='headerContainer' >
        <h1>TASTE OF FOOD </h1>
         <p>FOOD ANS SPICE IS LIFE</p>
         <Link to="/menu">
          <button> ORDER NOW </button>
         </Link>
      </div>
    </div>
  )
}

export default Home
