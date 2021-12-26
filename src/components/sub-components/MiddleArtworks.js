import React from "react";

import artwork1 from "../../public/images/artwork.jpg";
import artwork2 from "../../public/images/artwork2.jpg";
import artwork3 from "../../public/images/artwork3.png";
import artwork4 from "../../public/images/artwork4.jpg";

const MiddleSummary = () => {
  return (
    <>
      <div className="artworks">
        <div className="top">
          <h2 className="top__title">Artwork</h2>
          <p className="top__collectibles text-muted">Collectibles</p>
          <p className="top__utility text-muted">Utility</p>
        </div>

        <div className="bot">
          <div className="bot__box">
            <img className="bot__image" src={artwork1} alt="artwork image" />
            <h3 className="bot__title">Model #1</h3>
            <p className="bot__points">0.0092</p>
            <i className="fa fa-btc bot__points-icon"></i>
            <p className="bot__likes">39</p>
            <i className="fa fa-heart bot__likes-icon"></i>
          </div>
          <div className="bot__box">
            <img className="bot__image" src={artwork4} alt="artwork image" />
            <h3 className="bot__title">Model #31</h3>
            <p className="bot__points">0.0092</p>
            <i className="fa fa-btc bot__points-icon"></i>
            <p className="bot__likes">332</p>
            <i className="fa fa-heart bot__likes-icon"></i>
          </div>
          <div className="bot__box">
            <img className="bot__image" src={artwork3} alt="artwork image" />
            <h3 className="bot__title">Model #12</h3>
            <p className="bot__points">0.0092</p>
            <i className="fa fa-btc bot__points-icon"></i>
            <p className="bot__likes">55</p>
            <i className="fa fa-heart bot__likes-icon"></i>
          </div>
          <div className="bot__box">
            <img className="bot__image" src={artwork2} alt="artwork image" />
            <h3 className="bot__title">Model #59</h3>
            <p className="bot__points">0.0092</p>
            <i className="fa fa-btc bot__points-icon"></i>
            <p className="bot__likes">107</p>
            <i className="fa fa-heart bot__likes-icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSummary;
