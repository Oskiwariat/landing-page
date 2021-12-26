import React from "react";

import LeftContent from "./LeftContent";
import MiddleContent from "./MiddleContent";
import RightContent from "./RightContent";
import Robot from "./RobotAnimation";

const LandingPage = () => {
  return (
    <>
      <Robot />
      <div className="shadowbox shadow-lg"></div>
      <div className="box row">
        <LeftContent />

        <MiddleContent />

        <RightContent />
      </div>
      <div className="circle-around1"></div>
      <div className="circle-around2"></div>
      <div className="circle-around3"></div>
      <div className="circle-around4"></div>
    </>
  );
};

export default LandingPage;
