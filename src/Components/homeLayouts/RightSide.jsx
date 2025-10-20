import React from "react";
import Login from "../Login/Login";
import Social from "./Social";
import Qzone from "./Qzone";

const RightSide = () => {
  return (
    <div className="space-y-15">
      <Login></Login>
      <Social></Social>
      <Qzone></Qzone>
      
    </div>
  );
};

export default RightSide;
