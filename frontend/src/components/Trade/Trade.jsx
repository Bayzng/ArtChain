import React from 'react'
import tradeImg from "../../assets/my.png"
import artOne from "../../assets/artOne.avif"
import artTwo from "../../assets/artTwo.avif"
import artThree from "../../assets/artThree.jpeg"
import { Link } from 'react-router-dom'
import "./Trade.css"

const Trade = () => {




  return (
    <div>
      <div className='trade'>
        <div className='first-trade'>
            <h1>Trade Your Art on ArtChain</h1>
            <Link to=''>
              <button className='trade-button'>Trade</button>
            </Link>
        </div>
        <div className='second-trade'>
            <img src={tradeImg} alt="" />
        </div>
      </div>
      <div className='artContent'>
        <button><h1>ART CONTENT</h1></button>
        <h3>Explore Endless Art Trade on ArtChain</h3>
        <div className='artImage'>
          <div className='artOne'>
            <img src={artOne} alt="" />
          </div>
          <div className='artTwo'>
            <img src={artTwo} alt="" />
          </div>
          <div className='artThree'>
            <img src={artThree} alt="" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Trade