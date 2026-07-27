import React from 'react';
import outfit1 from '../images/image 45.svg';
import outfit2 from '../images/image 46.svg';
import outfit3 from '../images/image 47.svg';
import './Trending.css';

export default function Trending() {
  return (
    <div className="trending-wrap">
      <div className="trending-title">
        <h2>Trending Vintage Outfits</h2>
        <div><button className="see-all">See all</button></div>
      </div>

      <div className="outfits-grid">
        <div className="card">
          <div className="card-overlay">
            <button className="icon add">+</button>
            <button className="icon view">⤴</button>
          </div>
          <img src={outfit1} alt="sec-img-1" />
          <div className="meta"><span>Bubu gown</span>
          <br/>
          <span> ₦ 25,000</span></div>
        </div>
        <div className="card">
          <div className="card-overlay">
            <button className="icon add">+</button>
            <button className="icon view">⤴</button>
          </div>
          <img src={outfit2} alt="sec-img-2" />
          <div className="meta"><span>Two piece sets</span>
          <br/>
          <span> ₦ 10,000</span></div>
        </div>
        <div className="card">
          <div className="card-overlay">
            <button className="icon add">+</button>
            <button className="icon view">⤴</button>
          </div>
          <img src={outfit3} alt="sec-img-3" />
          <div className="meta"><span>Long sleeve shirt</span>
          <br/>
          <span> ₦ 5,000 </span></div>
        </div>
      </div>
    </div>
  );
}
