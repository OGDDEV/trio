import React from 'react';
import dash1 from '../images/Frame 188.svg';
import './Hero.css';

export default function Hero() {
  return (
    <div>
    <div className="front">
      <div className="headline">
        <h1>
          Classy & Beautiful
          <br /> <span>Vintage Outfits</span>
        </h1>
        <button>Shop full collection</button>
      </div>
      <div className="hero-img">
        <img src={dash1} alt="dash-img-1" />
      </div>
    </div>
     <div className="break">
        <hr/>
     </div>
    </div>    
  );
}
