import React from "react";
import { assets } from "../assets/assets";

const PageLoader = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-[#FFEBC3]"
      style={{
        backgroundImage: `${assets.load_img}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.92)"
      }}
    >
      <h1 className="text-5xl md:text-8xl font-['Dinosaur'] text-black opacity-70 tracking-widest -rotate-30 ">
        BONKER’S
      </h1>
    </div>
  );
};

export default PageLoader;
