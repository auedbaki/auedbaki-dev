import React from "react";
// import Lottie from "react-lottie";
// import animationData from "./18795-coronavirus.json";
import heroBottomAnimation from './../../assets/herobottom.json';
import Lottie from "lottie-react";

const HeroBottom = () => {
    return ( <Lottie className=" " style={{height: 250, width: 250}} animationData={heroBottomAnimation} loop={true} /> );
}
 
export default HeroBottom;