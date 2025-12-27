import React from "react";
import { assets } from "../assets/assets";

const PageLoader = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-[#FFEBC3]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.92)"
      }}
    >
      <img className="w-1/2 flex items-center justify-center -rotate-30" src={assets.bonkers} alt="load_img"/>
    </div>
  );
};

export default PageLoader;
