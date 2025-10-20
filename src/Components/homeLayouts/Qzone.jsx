import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-500">Q-Zone</h3>
      <div>
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
