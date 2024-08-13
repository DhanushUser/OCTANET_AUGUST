import React from "react";
import "./hero.css";
import map from "./../../assets/3d-map.png";

const Hero = () => {
  return (
    <div className="hero flex justify-center items-center mb-[200px]" id="home">
      <div className="hero-left  lg:ml-[150px] md:ml-[100px] sm:ml-[20px] mx-[30px]">
        <div className="bg"></div>

        <div className="para mt-[16%]  relative">
          <h1 className="text-5xl text-white uppercase font-[550] ml-0">
            Live your <br />
            <span className="text-5xl font-[550] text-yellow-400">Adventure</span>
          </h1>
          <p className="text-[14px] mt-3 text-white w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo
            assumenda debitis dicta doloribus facilis sequi impedit voluptate.
            Eaque nostrum nihil repellat cupiditate et reprehenderit excepturi
            voluptates, ullam nisi expedita.
          </p>

          <div className="image absolute top-0 lg:right-[60%] md:right-[40%] mx-4">
            <img width={100} src={map} alt="" />
          </div>
        </div>


        <div className="details flex flex-[1] justify-evenly p-5 my-[20px] shadow-lg overflow-hidden">
            <i className='bx bx-current-location text-white'></i>
          <div className="location">
            <p className="text-yellow-400">Location</p>
            <p className="text-white">Tajmahal</p>
          </div>
            <i className='bx bx-timer text-white'></i>
          <div className="date">
            <p className="text-yellow-400">Date</p>
            <p className="text-white">10th Aug , 2024</p>
          </div>

         <a href="#places "> <button className="px-2 py-2 ml-2 mt-1 bg-[#fc4c38] text-white rounded-lg text-sm hover:bg-[#ad3224]">Book Now</button> </a>
        </div>

        
      </div>

      
    </div>
  );
};

export default Hero;
