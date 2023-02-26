import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col gap-5">
          <p className="text-7xl font-bold text-[#183631]">The Smartest, <span className="text-[#FFB902]">Simplest</span> Grocery Shopping List App</p>
          <p>
            Make grocery shopping a breeze with our smart and simple app that comes with live price updates and deal notifications.
          </p>
          <div className="flex items-center gap-5">
            <button className="btn btn-active rounded-none flex items-center gap-3 bg-[#183631] hover:bg-[#FFB902] border-none">
              Get Started <BsArrowRight className="text-xl" />
            </button>
            <div className="flex items-center gap-3 cursor-pointer">
              <MdSlowMotionVideo className="text-3xl" />
              <p className="text-xl text-[#183631] #7EC33F font-medium">Watch</p>
            </div>
          </div>
          <img className="h-[350px]" src="/assets/downhero.svg" alt="" />
        </div>
        <img src="/assets/hero.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
