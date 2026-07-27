import React from 'react';
import pro1 from '../images/image 42.svg';
import pro2 from '../images/image 43.svg';
import pro3 from '../images/image 44.svg';
import './SearchOptions.css';

export default function SearchOptions() {
  return (
    <div className="product">
      <div className="items-wrapper">
        <div className="items-row">
          <div className="options-col">
            <div className="opt"><span className="label">Gowns</span><span>→</span></div>
            <div className="opt"><span className="label">Two pieces</span><span>→</span></div>
            <div className="opt"><span className="label">Tops</span><span>→</span></div>
            <div className="opt"><span className="label">Skirts</span><span>→</span></div>
            <div className="opt"><span className="label">Jumpsuit</span><span>→</span></div>
          </div>

          <div className="title-col">
            <p className="search-title">What are you looking for?</p>
          </div>

          <div className="thumbs-col">
            <div className="thumbs-row">
              <div className="thumbs">
                <div className="thumb-card"><img src={pro1} alt="second-img-1" /></div>
                <div className="thumb-card"><img src={pro2} alt="second-img-2" /></div>
                <div className="thumb-card"><img src={pro3} alt="second-img-3" /></div>
              </div>

              <div className="discover-area">
                <div className="discover-box">Discover →</div>
              </div>
            </div>

            <button className="shop-all">Shop all dresses →</button>
          </div>
        </div>
      </div>
      </div>
  );
}
