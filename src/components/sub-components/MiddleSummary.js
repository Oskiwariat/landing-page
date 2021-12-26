import React from "react";

import chart from "../../public/images/chart1.png";

const MiddleSummary = () => {
  return (
    <>
      <div className="weekly-summary">
        <h2 className="weekly-summary-title">Weekly Summary</h2>
        <div className="figure">
          <h4 className="figure__number">
            1.098
            <p className="figure__title text-muted">Offers</p>
          </h4>
          <img className="figure__chart-image" src={chart} alt="chart image" />
        </div>
        <div className="figure">
          <h4 className="figure__number">
            19.092
            <p className="figure__title text-muted">Favourite</p>
          </h4>
          <img className="figure__chart-image" src={chart} alt="chart image" />
        </div>
      </div>
    </>
  );
};

export default MiddleSummary;
